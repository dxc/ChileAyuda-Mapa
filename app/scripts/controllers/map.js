'use strict';

/**
 * @ngdoc function
 * @name chileayudaMapaApp.controller:MapCtrl
 * @description
 * # MapCtrl
 * Controller of the chileayudaMapaApp
 */
angular.module('chileAyudaMapaApp')
  .controller('MapCtrl', function (API, $scope, $rootScope, params, $templateRequest) {

    $templateRequest('views/map/map_popup.html').then(function (template) {
      $scope.messageTemplate = template;
    });

    $scope.incidentId = params.incidentId;

    $scope.incident = API.Incidents.get({'id': $scope.incidentId}, function () {
      $scope.map.center = {
        lat: $scope.incident.coordinates.latitude,
        lng: $scope.incident.coordinates.longitude,
        zoom: 20
      };
    });

    $scope.createPopupScope = function (report) {
      var scope = $rootScope.$new(true);
      angular.extend(scope, report);
      return scope;
    };

    $scope.reports = API.Reports.query({incidentId: $scope.incidentId}, function () {
      $scope.map.markers.splice(0, $scope.map.markers.length);

      angular.forEach($scope.reports, function (report) {
        var marker = {
          lat: report.coordinates.latitude,
          lng: report.coordinates.longitude,
          message: $scope.messageTemplate,
          layer: 'emergencias',
          getMessageScope: function () {
            return $scope.createPopupScope(report);
          }
        };
        $scope.map.markers.push(marker);
      });
    });

    $scope.map = {
      markers: [],
      center: {},
      layers: {
        baselayers: {
          osm: {
            name: 'OpenStreetMap',
            url: 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
            type: 'xyz'
          }
        },
        overlays: {
          emergencias: {
            name: 'Emergencias',
            type: 'group',
            visible: true
          }
        }
      }
    };
  });
