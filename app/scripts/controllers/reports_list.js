'use strict';

/**
 * @ngdoc function
 * @name chileayudaMapaApp.controller:ReportsListCtrl
 * @description
 * # ReportsListCtrl
 * Controller of the chileayudaMapaApp
 */
angular.module('chileAyudaMapaApp')
  .controller('ReportsListCtrl', function (API, $scope, $http, $mdDialog, params) {

    $scope.showReportNewDialog = function (event) {
      $mdDialog.show({
        controller: 'DialogReportNewCtrl',
        templateUrl: 'views/dialogs/dialog_report_new.html',
        targetEvent: event,
        clickOutsideToClose: true
      });
    };

    $scope.incidentId = params.incidentId;
    $scope.reports = API.Reports.query({incidentId: $scope.incidentId}, function () {
      angular.forEach($scope.reports, function (report) {
        report.date = moment(report.date);
      });
    });
  });
