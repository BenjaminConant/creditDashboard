'use strict';

angular.module('creditDashboardApp')
  .directive('chartContainer', function (creditDashboardData) {
    return {
      templateUrl: 'app/charts/chartContainer/chartContainer.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      	scope.labels = ["Percent Utilization", "Percent Remaining"];
	  	
	  	scope.setDetail = function (points, event) {
	      console.log(points[0].label);
	      creditDashboardData.current = points[0].label;
	    }
	    
	   
	    

	      

	    
	    

      }
    };
  });