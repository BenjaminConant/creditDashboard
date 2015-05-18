'use strict';

describe('Directive: creditDashboardNavbar', function () {

  // load the directive's module and view
  beforeEach(module('creditDashboardApp'));
  beforeEach(module('components/creditDashboardNavbar/creditDashboardNavbar.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<credit-dashboard-navbar></credit-dashboard-navbar>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the creditDashboardNavbar directive');
  }));
});