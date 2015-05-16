'use strict';

describe('Directive: creditDashboardFooter', function () {

  // load the directive's module and view
  beforeEach(module('creditDashboardApp'));
  beforeEach(module('components/creditDashboardFooter/creditDashboardFooter.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<credit-dashboard-footer></credit-dashboard-footer>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the creditDashboardFooter directive');
  }));
});