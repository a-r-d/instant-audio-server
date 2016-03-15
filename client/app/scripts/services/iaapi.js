'use strict';

/**
 * @ngdoc service
 * @name iaAppApp.iaApi
 * @description
 * # iaApi
 * Service in the iaAppApp.
 */
angular.module('iaAppApp')
  .service('iaApi', function ($http) {
    var url = 'http://localhost:8080/api/';
    
    function listDir(path, cb) {
      $http({
        method: 'GET',
        url: url + 'directory?path=' + path
      }).then(function(res) {
        return cb(null, res);
      }, function(res) {
        return cb(res);
      });
    }

    function getFile() {
      
    }

    return {
      listDir: listDir,
      getFile: getFile
    };

  });
