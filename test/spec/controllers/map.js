'use strict';

describe('Controller: MapCtrl', function () {

  // load the controller's module
  beforeEach(module('chileAyudaMapaApp'));

  var MapCtrl,
    scope,
    httpBackend,
    mdDialog;

  var expectedIncident = {
    id: 1,
    name: 'Fake incident',
    coordinates: {
      latitude: -33.4583573,
      longitude: -70.6631088
    }
  };

  var expectedReport = {
    id: 1,
    name: 'Fake report',
    coordinates: {
      latitude: -33.459,
      longitude: -70.664
    }
  };

  // Initialize the controller and a mock scope
  beforeEach(inject(function (API, $controller, $rootScope, $injector) {
    scope = $rootScope.$new();

    httpBackend = $injector.get('$httpBackend');

    httpBackend.whenGET(API.baseUrl + '/0/incidents/1').respond(expectedIncident);
    httpBackend.whenGET(API.baseUrl + '/0/incidents/1/reports/').respond([expectedReport]);

    httpBackend.whenGET('views/map/map_popup.html').respond('fake_template');

    MapCtrl = $controller('MapCtrl', {
      $scope: scope,
      // place here mocked dependencies
      $httpBackend: httpBackend,
      params: {incidentId: 1}
    });
  }));

  it('should load map popup template into the scope', function () {
    httpBackend.flush();

    expect(scope.messageTemplate).toBe('fake_template');
  });

  it('should create popup report scope', function () {
    httpBackend.flush();

    var popupScope = scope.createPopupScope(scope.reports[0]);

    expect(popupScope.id).toBe(1);
    expect(popupScope.name).toBe('Fake report');
  });

  it('should set map center', function () {
    httpBackend.flush();

    expect(scope.map.center.lat).toBe(expectedIncident.coordinates.latitude);
    expect(scope.map.center.lng).toBe(expectedIncident.coordinates.longitude);
    expect(scope.map.center.zoom).toBe(20);
  });

});
