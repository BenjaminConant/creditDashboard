'use strict';

angular.module('creditDashboardApp')
  .directive('utilizationDetail', function () {
    return {
      templateUrl: 'app/charts/utilizationDetail/utilizationDetail.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  });