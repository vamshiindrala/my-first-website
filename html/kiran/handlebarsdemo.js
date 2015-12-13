(function(){

	var sourceMenuItem = $("#menuItemTemplate").html(),
		templateMenuItem = Handlebars.compile(sourceMenuItem),
		source = $("#pageTemplate").html(),
		template = Handlebars.compile(source);

	var showPage = function(event){
		var pageName = window.location.hash.replace('#', ''),
			menuItemsHTML = "",
			pages = Object.keys(website.pages),
			i,
			page,
			data,
			content;

		if(pageName === '') pageName = 'home';

		for (i = 0; i < pages.length; i++) {
			page = pages[i];
			data = {
				"page":page,
				"pageName": website.pages[page].pageName
			};
			menuItemsHTML = menuItemsHTML + templateMenuItem(data);
		};

		$("#nav").html(menuItemsHTML);
		
		$( '#menu-' + pageName ).addClass('active');

		content = template(website.pages[pageName]);
		$("#output").html(content);

	}

	$(window).on({
		'hashchange': showPage,
		'load': showPage
	});


})();