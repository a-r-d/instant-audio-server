'use strict';

/**
 * @ngdoc function
 * @name iaAppApp.controller:ListdirectoryCtrl
 * @description
 * # ListdirectoryCtrl
 * Controller of the iaAppApp
 */
angular.module('iaAppApp')
  .controller('ListdirectoryCtrl', function ($scope, iaApi) {
   
    console.log('list dir controller initialized');

    iaApi.listDir('/', function(err, dirs) {
      if(err) {
        return console.error('dir list err: ', err);
      }
      console.log('dirs:', dirs.data);
      $scope.directoryListing = dirs.data.files;
    });
    
  
  });
