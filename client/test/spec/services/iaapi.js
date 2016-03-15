'use strict';

describe('Service: iaApi', function () {

  // load the service's module
  beforeEach(module('iaAppApp'));

  // instantiate service
  var iaApi;
  beforeEach(inject(function (_iaApi_) {
    iaApi = _iaApi_;
  }));

  it('should do something', function () {
    expect(!!iaApi).toBe(true);
  });

});
