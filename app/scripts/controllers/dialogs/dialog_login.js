'use strict';

/**
 * @ngdoc function
 * @name chileayudaMapaApp.controller:DialogLoginCtrl
 * @description
 * # DialogLoginCtrl
 * Controller of the chileayudaMapaApp
 */
angular.module('chileAyudaMapaApp')
  .controller('DialogLoginCtrl', function (API, $scope, $mdDialog, $window) {

    $scope.cancel = function () {
      $mdDialog.cancel();
    };

    $scope.login = function (type) {
      $window.location.href = API.getLoginUrl(type);
    };
  });
