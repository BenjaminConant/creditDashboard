'use strict';

angular.module('creditDashboardApp')
  .directive('utilizationOverview', function () {
    return {
      templateUrl: 'app/charts/utilizationOverview/utilizationOverview.html',
      restrict: 'EA',
      scope: {},
      link: function (scope, element, attrs) {

      	scope.labels = ["tomcat", "February", "March", "April", "May", "June", "July"];
		    scope.series = ['Series A', 'Series B'];
    		scope.data = [
    		    [65, 59, 80, 81, 56, 55, 40],
    		    [28, 48, 40, 19, 86, 27, 90]
    	    ];
  	    scope.onClick = function (points, evt) {
      	   console.log(points, evt);
      	};

      }
    };
  });