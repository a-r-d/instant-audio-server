'use strict';

describe('Directive: fileItem', function () {

  // load the directive's module
  beforeEach(module('iaAppApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<file-item></file-item>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the fileItem directive');
  }));
});
