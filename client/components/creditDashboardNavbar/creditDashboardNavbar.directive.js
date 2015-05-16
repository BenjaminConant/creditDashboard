'use strict';

angular.module('creditDashboardApp')
  .directive('creditDashboardNavbar', function () {
    return {
      templateUrl: 'components/creditDashboardNavbar/creditDashboardNavbar.html',
      restrict: 'EA',
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