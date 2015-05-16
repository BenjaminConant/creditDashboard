'use strict';

angular.module('creditDashboardApp')
  .directive('creditDashboardNavbar', function ($location) {
    return {
      templateUrl: 'app/creditDashboardNavbar/creditDashboardNavbar.html',
      restrict: 'E',
      link: function (scope, element, attrs) {
      	scope.menu = [{
	      'title': 'Home',
	      'link': '/'
	    }];

	    scope.isCollapsed = true;

	    scope.isActive = function(route) {
	      return route === $location.path();
	    };
	    
      }
    };
  });