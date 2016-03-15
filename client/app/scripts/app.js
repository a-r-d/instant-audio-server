'use strict';

/**
 * @ngdoc overview
 * @name iaAppApp
 * @description
 * # iaAppApp
 *
 * Main module of the application.
 */
angular
  .module('iaAppApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/listdirectory.html',
        controller: 'ListdirectoryCtrl',
        controllerAs: 'listDirectory'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
