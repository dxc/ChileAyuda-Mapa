'use strict';

/**
 * @ngdoc function
 * @name chileayudaMapaApp.controller:ReportsDetailsCtrl
 * @description
 * # ReportsDetailsCtrl
 * Controller of the chileayudaMapaApp
 */
angular.module('chileAyudaMapaApp')
  .controller('ReportsDetailsCtrl', function (API, $scope, $http, $mdDialog, params) {

    $scope.incidentId = params.incidentId;
    $scope.reportId = params.reportId;

    $scope.data = {
      report: API.Reports.get({incidentId: $scope.incidentId, id: $scope.reportId}, function () {
        $scope.data.report.date = moment($scope.data.report.date);
        $scope.map.center = {
          lat: $scope.data.report.coordinates.latitude,
          lng: $scope.data.report.coordinates.longitude,
          zoom: 20
        };
        $scope.map.markers.push({
          lat: $scope.data.report.coordinates.latitude,
          lng: $scope.data.report.coordinates.longitude,
        });
      }),
      comments: API.ReportsComments.query({incidentId: $scope.incidentId, reportId: $scope.reportId}, function () {
        angular.forEach($scope.data.comments, function (comment) {
          comment.date = moment(comment.date);

        });
      }),
      media: API.ReportsMedia.query({incidentId: $scope.incidentId, reportId: $scope.reportId}, function () {
        angular.forEach($scope.data.media, function (media) {
          media.date = moment(media.date);
        });
      })
    };

    $scope.map = {
      markers: [],
      center: {}  
    };
  });
