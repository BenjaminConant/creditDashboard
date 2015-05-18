'use strict';

angular.module('creditDashboardApp')
  .directive('chartContainer', function (creditDashboardData) {
    return {
      templateUrl: 'app/charts/chartContainer/chartContainer.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
	  	scope.setDetail = function (points, event) {
	      if (points) {
	      	creditDashboardData.current = points[0].label;
	      }
	    }
      }
    };
  });