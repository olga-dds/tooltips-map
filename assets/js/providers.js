(function () {
		var allProviders = [
			{state: "HI", providers: ["DIRECTV","Spectrum"]},
			{state: "AK", providers: ["DIRECTV"]},
			{state: "FL", providers: ["AT&T","Spectrum","CenturyLink","Charter","Xfinity","Cox","DIRECTV","Frontier","Mediacom","Windstream"]},
			{state: "SC", providers: ["AT&T","CenturyLink","Charter","Xfinity","DIRECTV","Frontier","Spectrum","Windstream"]},
			{state: "GA", providers: ["AT&T","CenturyLink","Charter","Xfinity","Cox","DIRECTV","Frontier","Mediacom","Spectrum","Windstream"]},
			{state: "AL", providers: ["AT&T","CenturyLink","Charter","Xfinity","DIRECTV","Frontier","Mediacom","Spectrum","Windstream"]},
			{state: "NC", providers: ["AT&T","CenturyLink","Charter","Xfinity","Cox","DIRECTV","Frontier","Mediacom","Spectrum","Windstream"]},
			{state: "TN", providers: ["AT&T","CenturyLink","Charter","Xfinity","DIRECTV","Frontier","Mediacom","Spectrum"]},
			{state: "RI", providers: ["Cox","DIRECTV"]},
			{state: "CT", providers: ["Charter","Xfinity","Cox","DIRECTV","Frontier"]},
			{state: "MA", providers: ["Charter","Xfinity","Cox","DIRECTV","Frontier","Mediacom","Spectrum"]},
			{state: "ME", providers: ["Xfinity","Dish","DIRECTV","Spectrum"]},
			{state: "NH", providers: ["Charter","Xfinity","DIRECTV","Spectrum"]},
			{state: "VT", providers: ["Charter","Xfinity","DIRECTV"]},
			{state: "NY", providers: ["CenturyLink","Charter","Xfinity","DIRECTV","Frontier","Spectrum","Windstream"]},
			{state: "NJ", providers: ["CenturyLink","Xfinity","DIRECTV","Spectrum"]},
			{state: "PA", providers: ["CenturyLink","Xfinity","DIRECTV","Frontier","Spectrum","Windstream"]},
			{state: "DE", providers: ["Xfinity","DIRECTV","Mediacom"]},
			{state: "MD", providers: ["Charter","Xfinity","DIRECTV","Mediacom"]},
			{state: "WV", providers: ["Xfinity","DIRECTV","Frontier","Spectrum"]},
			{state: "KY", providers: ["AT&T","Cincinnati Bell","Xfinity","DIRECTV","Mediacom","Spectrum","Windstream"]},
			{state: "OH", providers: ["AT&T","Buckeye Cable","CenturyLink","Cincinnati Bell","Xfinity","Cox","DIRECTV","Frontier","Mediacom","Spectrum","Windstream"]},
			{state: "MI", providers: ["AT&T","Buckeye Cable","CenturyLink","Charter","Xfinity","DIRECTV","Frontier","Mediacom","Spectrum"]},
			{state: "WY", providers: ["CenturyLink","Charter","DIRECTV"]},
			{state: "MT", providers: ["CenturyLink","Charter","DIRECTV","Frontier"]},
			{state: "ID", providers: ["CenturyLink","Cox","DIRECTV","Frontier","Spectrum"]},
			{state: "WA", providers: ["CenturyLink","Charter","Xfinity","DIRECTV","Frontier","Spectrum"]},
			{state: "DC", providers: ["Xfinity","DIRECTV"]},
			{state: "TX", providers: ["AT&T","Baja","CenturyLink","Charter","Xfinity","DIRECTV","Frontier","Spectrum","Windstream"]},
			{state: "CA", providers: ["AT&T","Charter","Xfinity","Cox","DIRECTV","Frontier","Mediacom","Spectrum",]},
			{state: "AZ", providers: ["AT&T","CenturyLink","Xfinity","Cox","DIRECTV","Frontier","Mediacom","Spectrum"]},
			{state: "NV", providers: ["AT&T","Baja","CenturyLink","Charter","Cox","DIRECTV","Frontier"]},
			{state: "UT", providers: ["Baja","CenturyLink","Xfinity","DIRECTV","Frontier"]},
			{state: "CO", providers: ["Baja","CenturyLink","Charter","Xfinity","DIRECTV","Spectrum"]},
			{state: "NM", providers: ["Baja","CenturyLink","Xfinity","DIRECTV","Frontier","Spectrum","Windstream"]},
			{state: "OR", providers: ["CenturyLink","Charter","Xfinity","DIRECTV","Frontier"]},
			{state: "ND", providers: ["CenturyLink","DIRECTV"]},
			{state: "SD", providers: ["CenturyLink","DIRECTV","Mediacom"]},
			{state: "NE", providers: ["CenturyLink","Charter","Cox","DIRECTV","Frontier","Spectrum","Windstream"]},
			{state: "IA", providers: ["CenturyLink","Cox","DIRECTV","Frontier","Mediacom","Windstream"]},
			{state: "MS", providers: ["AT&T","CenturyLink","Charter","Xfinity","DIRECTV","Frontier","Mediacom","Windstream"]},
			{state: "IN", providers: ["AT&T","CenturyLink","Cincinnati Bell","Xfinity","DIRECTV","Frontier","Mediacom","Spectrum"]},
			{state: "IL", providers: ["AT&T","CenturyLink","Charter","Xfinity","DIRECTV","Frontier","Mediacom"]},
			{state: "MN", providers: ["CenturyLink","Charter","Xfinity","DIRECTV","Frontier","Mediacom","Windstream"]},
			{state: "WI", providers: ["AT&T","CenturyLink","Charter","Xfinity","DIRECTV","Frontier","Mediacom","Spectrum"]},
			{state: "MO", providers: ["AT&T","CenturyLink","Charter","Xfinity","DIRECTV","Mediacom","Spectrum","Windstream"]},
			{state: "AR", providers: ["AT&T","CenturyLink","Xfinity","Cox","DIRECTV","Windstream"]},
			{state: "OK", providers: ["AT&T","CenturyLink","Cox","DIRECTV","Windstream"]},
			{state: "KS", providers: ["AT&T","CenturyLink","Xfinity","Cox","DIRECTV","Mediacom","Spectrum"]},
			{state: "LA", providers: ["AT&T","CenturyLink","Charter","Xfinity","Cox","DIRECTV"]},
			{state: "VA", providers: ["CenturyLink","Charter","Xfinity","Cox","DIRECTV","Mediacom","Spectrum"]}
		 ]

		 
		function tooltipHtml(n, d){	/* function to create html content string in tooltip div. */
			return `
			<div class="d-flex align-items-center justify-content-between "><h4 class="mr-1">${n}</h4><svg class="fa-svg d-lg-none" id="close-btn" viewBox="0 0 259.5 260.1"><path d="M117.3,130.1L2.5,246c-3.2,3.2-3.2,8.4,0,11.7l0,0c3.1,3.2,8.3,3.2,11.5,0.1 c0,0,0.1-0.1,0.1-0.1l0,0l115.7-116.8l115.7,116.8c3.1,3.2,8.3,3.2,11.5,0.1c0,0,0.1-0.1,0.1-0.1l0,0c3.2-3.2,3.2-8.4,0-11.7l0,0 L142.1,130.1l114.9-116c3.2-3.2,3.2-8.4,0-11.7l0,0c-3.1-3.2-8.3-3.2-11.5-0.1c0,0,0,0-0.1,0.1l0,0L129.7,119.3L13.9,2.4 C10.8-0.8,5.7-0.8,2.5,2.3c0,0,0,0-0.1,0.1l0,0c-3.2,3.2-3.2,8.4,0,11.7l0,0L117.3,130.1z"></path></svg></div>
			<table><tr><td>${d.providers.join("<br>")}</td></tr></table>
			
			`
				}
			
			var sampleData ={};	/* Sample random data. */	
			["HI", "AK", "FL", "SC", "GA", "AL", "NC", "TN", "RI", "CT", "MA",
			"ME", "NH", "VT", "NY", "NJ", "PA", "DE", "MD", "WV", "KY", "OH", 
			"MI", "WY", "MT", "ID", "WA", "DC", "TX", "CA", "AZ", "NV", "UT", 
			"CO", "NM", "OR", "ND", "SD", "NE", "IA", "MS", "IN", "IL", "MN", 
			"WI", "MO", "AR", "OK", "KS", "LA", "VA"]
				.forEach(function(d){ 
					var stateProviders = allProviders.find(e=>{
						return e.state === d
					})
					var low=Math.round(100*Math.random())
					sampleData[d]={providers:stateProviders.providers, color:d3.interpolate("#5878af", "#ec7f80")(low/100)}; 
						 
				});
	
			/* draw states on id #statesvg */	
			uStates.draw("#statesvg", sampleData, tooltipHtml);


})();