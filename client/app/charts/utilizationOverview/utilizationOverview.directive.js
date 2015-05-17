'use strict';

angular.module('creditDashboardApp')
  .directive('utilizationOverview', function (creditDashboardData) {
    return {
      templateUrl: 'app/charts/utilizationOverview/utilizationOverview.html',
      restrict: 'EA',
      scope: {
        rawData: '=data',
      },
      link: function (scope, element, attrs) {
        scope.labels = [];
        scope.series = ['percent utilizaiton'];
        var data = [[],[]];
        
        for (var key in scope.rawData) {
          scope.labels.unshift(key);
          console.log(Number(scope.rawData[key]['utilization']));
          data[0].unshift(Number(scope.rawData[key]['utilization']))
        }
        
        console.log(data);
        scope.data = data;

        scope.setDetail = function (points, event) {
          console.log(points[0].label);
          creditDashboardData.current = points[0].label;
        }

      }
    };
  });