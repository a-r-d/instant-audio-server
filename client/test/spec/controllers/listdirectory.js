'use strict';

describe('Controller: ListdirectoryCtrl', function () {

  // load the controller's module
  beforeEach(module('iaAppApp'));

  var ListdirectoryCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ListdirectoryCtrl = $controller('ListdirectoryCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ListdirectoryCtrl.awesomeThings.length).toBe(3);
  });
});
