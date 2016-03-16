'use strict';

/**
 * @ngdoc directive
 * @name iaAppApp.directive:fileItem
 * @description
 * # fileItem
 */
angular.module('iaAppApp')
  .directive('fileItem', function () {
    return {
      templateUrl: 'views/directives/fileItem.html',
      restrict: 'E',
      scope: {
        file: '='
      }
    };
  });
