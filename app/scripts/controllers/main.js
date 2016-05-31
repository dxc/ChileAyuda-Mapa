'use strict';

/**
 * @ngdoc function
 * @name chileayudaMapaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the chileayudaMapaApp
 */
angular.module('chileAyudaMapaApp')
  .controller('MainCtrl', function (API, $scope, $http, $mdDialog) {

    $scope.getSessions = function () {
      $scope.sessions = API.Sessions.query({}, function () {
        if ($scope.sessions.length === 0) {
          return;
        }
        $scope.currentSession = $scope.sessions[0];
      });
    };

    $scope.logout = function () {
      $http({
        method: 'GET',
        url: API.getLogoutUrl()
      }).then(function () {
        delete $scope.currentSession;
        $scope.sessions.splice(0, $scope.sessions.length);
      });
    };

    $scope.showLoginDialog = function (event) {
      $mdDialog.show({
        controller: 'DialogLoginCtrl',
        templateUrl: 'views/dialogs/dialog_login.html',
        targetEvent: event,
        clickOutsideToClose: true
      });
    };

    $scope.sessions = [];
    $scope.getSessions();
  });
