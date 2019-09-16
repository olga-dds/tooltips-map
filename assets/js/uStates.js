(function () {
	var uStatePaths, allProviders, urlObj, sampleData, uStates, tooltip, width, smallStates,slallStatesMod;


	urlObj = {
		mapdata: "assets/api/us-map-data.json",
		providersdata: "assets/api/providers-data.json",

	}
	uStatePaths = []
	allProviders = []
	sampleData = {};	/* Sample random data. */
	uStates = {};
	smallStates = []
	slallStatesMod = []
	initMap()


	uStates.draw = function (id, mapdata, data, toolTip) {
		width = document.documentElement.clientWidth;
		if (width >= 1024) {
			createSvgGroup(id, mapdata, data, mouseOver, mouseOut)
			addStatelabels(id)
		} else if (width < 1024) {
			createSvgGroup(id, mapdata, data, open, close)
			addStatelabels(id)
		}

		function mouseOver(d) {
			d3.select("#tooltip").transition().duration(200).style("opacity", .9);
			d3.select("#tooltip").html(toolTip(d.n, data[d.id]))
				.style("left", (d3.event.pageX) + "px")
				.style("top", (d3.event.pageY - 15) + "px");

		}

		function mouseOut() {
			d3.select("#tooltip").transition().duration(500).style("opacity", 0);
		}

		function open(d) {
			var position
			if (width - d3.event.pageX <= 150) {
				position = 100 + 15
			} else {
				position = 0
			}
			d3.select("#tooltip").transition().duration(0).style("display", "block");
			d3.select("#tooltip").transition().duration(500).style("opacity", .9);
			d3.select("#tooltip").html(toolTip(d.n, data[d.id]))
				.style("left", (d3.event.pageX) - position + "px")
				.style("top", (d3.event.pageY - 15) + "px");
		}

		function close() {
			return null
		}
	
	}

	tooltip = document.getElementById("tooltip")
	tooltip.addEventListener("click", function () {
		var d = this
		d.style.display = "none"
	})

	this.uStates = uStates;


	function createSvgGroup(id, mapData, data, mouseOver, mouseOut) {
		d3.select(id).selectAll("g")

			.data(mapData).enter().append("g")

			.append("path")
			.attr("class", "state")
			.attr("d", function (d) { return d.d; })
			.each(function (d, i) {

				if (this.getBoundingClientRect().width < 55) {
					smallStates.push(d)
				}

			})
			.style("fill", function (d) { return data[d.id].color; })
			.on("mouseover", mouseOver).on("mouseout", mouseOut);
	}

	function addStatelabels(id) {
		d3.select(id).selectAll("g").append("svg:text").text(function (d) { return d.id })
			.attr("class", function (d) { return "label-state label-" + d.id })
			.attr("x", function (d, i) { return d.c.x })
			.attr("y", function (d, i) { return d.c.y })
			.attr("text-anchor", "middle")
	}

	function tooltipHtml(n, d) {	/* function to create html content string in tooltip div. */
		return '<div class="d-flex align-items-center justify-content-between "><h6 class="mr-1">' + n + '</h6><svg class="fa-svg d-lg-none" id="close-btn" viewBox="0 0 259.5 260.1"><path d="M117.3,130.1L2.5,246c-3.2,3.2-3.2,8.4,0,11.7l0,0c3.1,3.2,8.3,3.2,11.5,0.1 c0,0,0.1-0.1,0.1-0.1l0,0l115.7-116.8l115.7,116.8c3.1,3.2,8.3,3.2,11.5,0.1c0,0,0.1-0.1,0.1-0.1l0,0c3.2-3.2,3.2-8.4,0-11.7l0,0 L142.1,130.1l114.9-116c3.2-3.2,3.2-8.4,0-11.7l0,0c-3.1-3.2-8.3-3.2-11.5-0.1c0,0,0,0-0.1,0.1l0,0L129.7,119.3L13.9,2.4 C10.8-0.8,5.7-0.8,2.5,2.3c0,0,0,0-0.1,0.1l0,0c-3.2,3.2-3.2,8.4,0,11.7l0,0L117.3,130.1z"></path></svg></div><table><tr><td>' + d.providers.join("<br>") + '</td></tr></table>'
	}

	function getMapData(urlObj) {
		return fetch(urlObj.mapdata)
			.then(function (response) {
				return response.json();
			})
			.then(function (result) {
				uStatePaths = result
			})
			.then(function () {
				return fetch(urlObj.providersdata)
					.then(function (response) {
						return response.json();
					})
					.then(function (value) {
						allProviders = value
					})
			})
			.catch(function (error) { console.error('Error:', error) });
	}



	function createSampleData() {
		uStatePaths.map(function (item) {
			return item.id
		}).forEach(function (d) {
			var stateProviders = allProviders.find(function (e) {
				return e.state === d
			})
			var low = Math.round(100 * Math.random())
			sampleData[d] = { providers: stateProviders.providers, color: d3.interpolate("#5878af", "#ec7f80")(low / 100) };

		})
	}

	function createSmallData() {
      smallStates.map(function (e, index) {
		  e.c.x = 600;
			e.c.y = 600 * index;
		})
		
	}

	function initMap() {
		getMapData(urlObj)
			.then(function () {
				createSampleData();
			
			})
			.then(function () {
				uStates.draw("#statesvg", uStatePaths, sampleData, tooltipHtml);
				createSmallData();
			  console.log(smallStates)
			})
	}


})();
