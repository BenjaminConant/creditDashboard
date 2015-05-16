'use strict';

angular.module('creditDashboardApp')
  .directive('chartContainer', function () {
    return {
      templateUrl: 'app/charts/chartContainer/chartContainer.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  });