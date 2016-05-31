'use strict';

describe('Controller: ReportsListCtrl', function () {

  // load the controller's module
  beforeEach(module('chileAyudaMapaApp'));

  var ReportsListCtrl,
    scope,
    httpBackend,
    mdDialog;

  var expectedReport = {
    id: 1,
    name: 'Fake Report'
  };

  // Initialize the controller and a mock scope
  beforeEach(inject(function (API, $controller, $rootScope, $injector, _$mdDialog_) {
    scope = $rootScope.$new();

    mdDialog = _$mdDialog_;

    httpBackend = $injector.get('$httpBackend');
    httpBackend.whenGET(API.baseUrl + '/0/incidents/1/reports/')
      .respond([expectedReport]);

    ReportsListCtrl = $controller('ReportsListCtrl', {
      $scope: scope,
      // place here mocked dependencies
      $httpBackend: httpBackend,
      params: {incidentId: 1}
    });
  }));

  it('should have reports list in the scope', function () {
    httpBackend.flush();

    expect(scope.reports.length).toBe(1);
    expect(scope.reports[0].id).toBe(expectedReport.id);
    expect(scope.reports[0].name).toBe(expectedReport.name);
  });

  it('should showReportNewDialog show dialog on screen', function () {
    spyOn(mdDialog, 'show');

    scope.showReportNewDialog();

    expect(mdDialog.show).toHaveBeenCalled();
  });

});
