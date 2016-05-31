'use strict';

/**
 * @ngdoc function
 * @name chileayudaMapaApp.controller:IncidentsCtrl
 * @description
 * # IncidentsCtrl
 * Controller of the chileayudaMapaApp
 */
angular.module('chileAyudaMapaApp')
  .controller('IncidentsCtrl', function (API, $scope) {

    $scope.incidents = API.Incidents.query();
  });
