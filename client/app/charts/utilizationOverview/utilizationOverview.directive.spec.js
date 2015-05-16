'use strict';

describe('Directive: utilizationOverview', function () {

  // load the directive's module and view
  beforeEach(module('creditDashboardApp'));
  beforeEach(module('app/charts/utilizationOverview/utilizationOverview.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<utilization-overview></utilization-overview>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the utilizationOverview directive');
  }));
});