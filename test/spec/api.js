'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('chileAyudaMapaApp'));

  var api;

  // Initialize the controller and a mock scope
  beforeEach(inject(function (API) {
    api = API;
  }));

  it('should getLoginUrl method return API URL', function () {
    var expected = api.baseUrl + '/0/auth/login/facebook';

    expect(api.getLoginUrl('facebook')).toBe(expected);
  });

});
