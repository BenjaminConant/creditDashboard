'use strict';

angular.module('creditDashboardApp')
  .controller('MainCtrl', function ($scope, $http) {
    
    $scope.detailLabels = ["Download Sales", "In-Store Sales", "Mail-Order Sales"];
  	$scope.detailData = [300, 500, 100];
	$scope.overviewLabels = ["January", "February", "March", "April", "May", "June", "July"];
	$scope.overviewSeries = ['Series A', 'Series B'];
	$scope.overviewData = [
	  [65, 59, 80, 81, 56, 55, 40],
	  [28, 48, 40, 19, 86, 27, 90]
	];


  });
