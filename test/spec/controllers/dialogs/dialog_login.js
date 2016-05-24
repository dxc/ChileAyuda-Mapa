'use strict';

describe('Controller: DialogLoginCtrl', function () {

  // load the controller's module
  beforeEach(module('chileAyudaMapaApp'));

  var DialogLoginCtrl,
    scope,
    mdDialog,
    window_,
    api;

  // Initialize the controller and a mock scope
  beforeEach(inject(function (API, $controller, $rootScope, _$mdDialog_) {
    scope = $rootScope.$new();

    mdDialog = _$mdDialog_;

    window_ = {
      location: {}
    };

    DialogLoginCtrl = $controller('DialogLoginCtrl', {
      $scope: scope,
      // place here mocked dependencies
      $window: window_
    });

    api = API;
  }));

  it('should cancel dismiss dialog on screen', function () {
    spyOn(mdDialog, 'cancel');

    scope.cancel();

    expect(mdDialog.cancel).toHaveBeenCalled();
  });

  it('should login redirect to API URL', function () {
    scope.login('facebook');

    expect(window_.location.href).toBe(api.getLoginUrl('facebook'));
  });

});
