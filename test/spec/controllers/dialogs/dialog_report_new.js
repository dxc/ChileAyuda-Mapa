'use strict';

describe('Controller: DialogReportNewCtrl', function () {

  // load the controller's module
  beforeEach(module('chileAyudaMapaApp'));

  var DialogReportNewCtrl,
    scope,
    mdDialog;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, _$mdDialog_) {
    scope = $rootScope.$new();

    mdDialog = _$mdDialog_;

    DialogReportNewCtrl = $controller('DialogReportNewCtrl', {
      $scope: scope
      // place here mocked dependencies
    });

  }));

  it('should cancel dismiss dialog on screen', function () {
    spyOn(mdDialog, 'cancel');

    scope.cancel();

    expect(mdDialog.cancel).toHaveBeenCalled();
  });

});
