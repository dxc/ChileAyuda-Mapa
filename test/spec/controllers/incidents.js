'use strict';

describe('Controller: IncidentsCtrl', function () {

  // load the controller's module
  beforeEach(module('chileAyudaMapaApp'));

  var IncidentsCtrl,
    scope,
    httpBackend;

  var expectedIncident = {
    id: 1,
    name: 'Fake incident'
  };

  // Initialize the controller and a mock scope
  beforeEach(inject(function (API, $controller, $rootScope, $injector) {
    scope = $rootScope.$new();

    httpBackend = $injector.get('$httpBackend');
    httpBackend.whenGET(API.baseUrl + '/0/incidents/')
      .respond([expectedIncident]);

    IncidentsCtrl = $controller('IncidentsCtrl', {
      $scope: scope,
      // place here mocked dependencies
      $httpBackend: httpBackend
    });
  }));

  it('should have incidents list in the scope', function () {
    httpBackend.flush();

    expect(scope.incidents.length).toBe(1);
    expect(scope.incidents[0].id).toBe(expectedIncident.id);
    expect(scope.incidents[0].name).toBe(expectedIncident.name);
  });

});
