(function() {
  'use strict';

  describe('controllers', function(){
    var vm;

    beforeEach(module('connectionsViewPath'));
    beforeEach(inject(function(_$controller_) {

      vm = _$controller_('MainController');
    }));

    it('should define 0 things', function() {
      expect(angular.isArray(vm.things)).toBeTruthy();
      expect(vm.things.length === 0).toBeTruthy();
    });
  });
})();
