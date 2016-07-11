'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('chileAyudaMapaApp'));

  var MainCtrl,
    scope,
    httpBackend,
    mdDialog;

  var expectedSession = {
    id: 1,
    username: 'test_user',
    email: 'test_user@test.com'
  };

  // Initialize the controller and a mock scope
  beforeEach(inject(function (API, $controller, $rootScope, $injector, _$mdDialog_) {
    scope = $rootScope.$new();

    mdDialog = _$mdDialog_;

    httpBackend = $injector.get('$httpBackend');
    httpBackend.whenGET(API.baseUrl + '/0/sessions/')
      .respond([expectedSession]);

    httpBackend.whenGET(API.baseUrl + '/0/api-auth/logout/')
      .respond('ok');

    MainCtrl = $controller('MainCtrl', {
      $scope: scope,
      // place here mocked dependencies
      $httpBackend: httpBackend
    });
  }));

  it('should getSessions method put sessions into the scope', function () {
    httpBackend.flush();

    expect(scope.sessions.length).toBe(1);
    expect(scope.sessions[0].id).toBe(expectedSession.id);
    expect(scope.sessions[0].username).toBe(expectedSession.username);
    expect(scope.sessions[0].email).toBe(expectedSession.email);

    expect(scope.currentSession).toBe(scope.sessions[0]);
  });

  it('should logout method remove all sessions from the scope', function () {
    scope.logout();
    httpBackend.flush();

    expect(scope.sessions.length).toBe(0);
    expect(scope.currentSession).toBe(undefined);
  });

  it('should showLoginDialog show dialog on screen', function () {
    spyOn(mdDialog, 'show');

    scope.showLoginDialog();

    expect(mdDialog.show).toHaveBeenCalled();
  });

});
