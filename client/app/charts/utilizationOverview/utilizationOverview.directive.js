'use strict';

angular.module('creditDashboardApp')
  .directive('utilizationOverview', function () {
    return {
      templateUrl: 'app/charts/utilizationOverview/utilizationOverview.html',
      restrict: 'EA',
      scope: {
        data: '=',
        labels: '=',
        series: '='
      },
      link: function (scope, element, attrs) {

      }
    };
  });