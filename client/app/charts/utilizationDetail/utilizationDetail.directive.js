'use strict';

angular.module('creditDashboardApp')
  .directive('utilizationDetail', function () {
    return {
      templateUrl: 'app/charts/utilizationDetail/utilizationDetail.html',
      restrict: 'EA',
      scope: {},
      link: function (scope, element, attrs) {
      	scope.labels = ["credit used", "credit remaining"];
        scope.data = [60, 40];
      }
    };
  });