'use strict';

angular.module('creditDashboardApp')
  .directive('creditDashboardFooter', function () {
    return {
      templateUrl: 'components/creditDashboardFooter/creditDashboardFooter.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  });