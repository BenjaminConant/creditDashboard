'use strict';

angular.module('creditDashboardApp')
  .directive('utilizationOverview', function () {
    return {
      templateUrl: 'app/charts/utilizationOverview/utilizationOverview.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  });