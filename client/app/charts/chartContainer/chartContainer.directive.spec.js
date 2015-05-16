'use strict';

describe('Directive: chartContainer', function () {

  // load the directive's module and view
  beforeEach(module('creditDashboardApp'));
  beforeEach(module('app/charts/chartContainer/chartContainer.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<chart-container></chart-container>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the chartContainer directive');
  }));
});