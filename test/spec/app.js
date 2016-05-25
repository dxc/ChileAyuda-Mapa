'use strict';

describe('App: chileAyudaMapaApp', function () {

  // load the controller's module
  beforeEach(module('chileAyudaMapaApp'));

  var api,
    routeProvider,
    location,
    rootScope,
    httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function (API, $rootScope, $injector, _$location_, _$route_) {
    api = API;
    routeProvider = _$route_;
    location = _$location_;
    rootScope = $rootScope;

    httpBackend = $injector.get('$httpBackend');
    httpBackend.whenGET('views/reports_list.html').respond('fake_content');
    httpBackend.whenGET('views/map.html').respond('fake_content');
  }));

  it('should reports list route have incident id in params', function () {
    location.path('/incidents/1/reports');
    rootScope.$digest();

    expect(routeProvider.current.params.incidentId).toBe('1');
  });

  it('should map route have incident id in params', function () {
    location.path('/incidents/1/map');
    rootScope.$digest();

    expect(routeProvider.current.params.incidentId).toBe('1');
  });

  it('should getLoginUrl method return API URL', function () {
    var expected = api.baseUrl + '/0/auth/login/facebook';

    expect(api.getLoginUrl('facebook')).toBe(expected);
  });

});
