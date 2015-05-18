'use strict';

describe('Service: creditDashboardData', function () {

  // load the service's module
  beforeEach(module('creditDashboardApp'));

  // instantiate service
  var creditDashboardData;
  beforeEach(inject(function (_creditDashboardData_) {
    creditDashboardData = _creditDashboardData_;
  }));

  it('should do something', function () {
    expect(!!creditDashboardData).toBe(true);
  });

});
