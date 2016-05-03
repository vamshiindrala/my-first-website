(function(){
	var module = angular.module('global', []);

	function global(){
		this.name = 'Gem Store';
		this.year = "Since 1996";
		this.currYear = new Date().getYear() + 1900;
	}

	module.directive('header', function(){
		return {
			restrict : 'E',
			templateUrl: '/header.html',
			controller: global,
			controllerAs: 'header'
		};
	});

	module.directive('footer', function(){
		return {
			restrict : 'A',
			templateUrl: '/footer.html',
			controller: global,
			controllerAs: 'footer'
		};
	});
})();