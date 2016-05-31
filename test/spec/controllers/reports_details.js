'use strict';

describe('Controller: ReportsDetailsCtrl', function () {

  // load the controller's module
  beforeEach(module('chileAyudaMapaApp'));

  var ReportsDetailsCtrl,
    scope,
    httpBackend;

  var expectedReport = {
    id: 1,
    name: 'Fake Report',
    coordinates: {
      latitude: -33.4583573,
      longitude: -70.6631088
    },
    user: {
      id: 1,
      username: 'Fake user 1'
    }
  };
  var expectedComment = {
    id: 2,
    user: {
      id: 2,
      username: 'Fake user 2'
    },
    text: 'Fake comment'
  };
  var expectedMedia = {
    id: 3,
    user: {
      id: 3,
      username: 'Fake user 3'
    },
    url: 'http://fake_url',
    source: {
      id: 4,
      name: 'Fake source'
    }
  };

  // Initialize the controller and a mock scope
  beforeEach(inject(function (API, $controller, $rootScope, $injector) {
    scope = $rootScope.$new();

    httpBackend = $injector.get('$httpBackend');
    httpBackend.whenGET(API.baseUrl + '/0/incidents/1/reports/2')
      .respond(expectedReport);
    httpBackend.whenGET(API.baseUrl + '/0/incidents/1/reports/2/comments/')
      .respond([expectedComment]);
    httpBackend.whenGET(API.baseUrl + '/0/incidents/1/reports/2/media/')
      .respond([expectedMedia]);

    ReportsDetailsCtrl = $controller('ReportsDetailsCtrl', {
      $scope: scope,
      // place here mocked dependencies
      $httpBackend: httpBackend,
      params: {incidentId: 1, reportId: 2}
    });
  }));

  it('should have report in the scope', function () {
    httpBackend.flush();

    expect(scope.data.report).toBeDefined();
    expect(scope.data.report.id).toBe(expectedReport.id);
    expect(scope.data.report.name).toBe(expectedReport.name);
    expect(scope.data.report.coordinates).toEqual(expectedReport.coordinates);
    expect(scope.data.report.user).toEqual(expectedReport.user);
  });

  it('should have report comments in the scope', function () {
    httpBackend.flush();

    expect(scope.data.comments.length).toBe(1);
    expect(scope.data.comments[0].id).toBe(expectedComment.id);
    expect(scope.data.comments[0].text).toBe(expectedComment.text);
    expect(scope.data.comments[0].user).toEqual(expectedComment.user);
  });

  it('should have report media in the scope', function () {
    httpBackend.flush();

    expect(scope.data.media.length).toBe(1);
    expect(scope.data.media[0].id).toBe(expectedMedia.id);
    expect(scope.data.media[0].url).toBe(expectedMedia.url);
    expect(scope.data.media[0].text).toBe(expectedMedia.text);
    expect(scope.data.media[0].user).toEqual(expectedMedia.user);
  });

});
