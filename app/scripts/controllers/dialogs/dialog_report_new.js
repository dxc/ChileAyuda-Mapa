'use strict';

/**
 * @ngdoc function
 * @name chileayudaMapaApp.controller:DialogReportNewCtrl
 * @description
 * # DialogReportNewCtrl
 * Controller of the chileayudaMapaApp
 */
angular.module('chileAyudaMapaApp')
  .controller('DialogReportNewCtrl', function ($scope, $mdDialog) {

    $scope.cancel = function () {
      $mdDialog.cancel();
    };
  });
