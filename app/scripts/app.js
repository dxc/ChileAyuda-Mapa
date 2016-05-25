'use strict';

/**
 * @ngdoc overview
 * @name chileAyudaMapaApp
 * @description
 * # chileAyudaMapaApp
 *
 * Main module of the application.
 */
angular
  .module('chileAyudaMapaApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngMaterial',
    'ng-mfb',
    'leaflet-directive'
  ])
  .factory('API', function ($resource) {
    var baseUrl = 'http://chileayuda.lo:8000';

    return {
      baseUrl: baseUrl,
      getLoginUrl: function (type) {
        return baseUrl + '/0/auth/login/' + type;
      },
      getLogoutUrl: function () {
        return baseUrl + '/0/api-auth/logout/';
      },
      Users:           $resource(baseUrl + '/0/users/:id'),
      Sessions:        $resource(baseUrl + '/0/sessions/:id'),
      Region:          $resource(baseUrl + '/0/regions/:id'),
      Province:        $resource(baseUrl + '/0/provinces/:id'),
      Commune:         $resource(baseUrl + '/0/communes/:id'),
      Categories:      $resource(baseUrl + '/0/categories/:id'),
      Incidents:       $resource(baseUrl + '/0/incidents/:id'),
      Reports:         $resource(baseUrl + '/0/incidents/:incidentId/reports/:id'),
      ReportsComments: $resource(baseUrl + '/0/incidents/:incidentId/reports/:reportId/comments/:id'),
      ReportsMedia:    $resource(baseUrl + '/0/incidents/:incidentId/reports/:reportId/media/:id'),
    };
  })
  .config(function ($httpProvider) {
    $httpProvider.defaults.withCredentials = true;
  })
  .config(function ($logProvider) {
    $logProvider.debugEnabled(false);
  })
  .config(function ($resourceProvider) {
    $resourceProvider.defaults.stripTrailingSlashes = false;
  })
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl'
        // controllerAs: 'home'
      })
      .when('/incidents', {
        templateUrl: 'views/incidents.html',
        controller: 'IncidentsCtrl'
        // controllerAs: 'incidents'
      })
      .when('/incidents/:incidentId/reports', {
        templateUrl: 'views/reports_list.html',
        resolve: {
          params: function ($route) {
            return {
              incidentId: $route.current.params.incidentId
            };
          }
        },
        controller: 'ReportsListCtrl'
        // controllerAs: 'reports'
      })
      .when('/incidents/:incidentId/map', {
        templateUrl: 'views/map.html',
        resolve: {
          params: function ($route) {
            return {
              incidentId: $route.current.params.incidentId
            };
          }
        },
        controller: 'MapCtrl'
        // controllerAs: 'map'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
