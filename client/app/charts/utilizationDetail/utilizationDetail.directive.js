'use strict';

angular.module('creditDashboardApp')
  .directive('utilizationDetail', function () {
    return {
      templateUrl: 'app/charts/utilizationDetail/utilizationDetail.html',
      restrict: 'EA',
      scope: {
        detail: '=detail',
      },
      link: function (scope, element, attrs) {
      }, 
  };

});