'use strict';

angular.module('creditDashboardApp')
  .controller('MainCtrl', function ($scope, $http, creditDashboardData) {
    $scope.history = creditDashboardData.createHistory();
  	$scope.detail = creditDashboardData.createCurrent('current');
  	
  	$scope.$watch(function(){
  		return creditDashboardData.current;
  	}, function (newVal){
  		$scope.detail = creditDashboardData.createCurrent(newVal);
  	})

  });
