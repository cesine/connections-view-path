(function() {
  'use strict';

  angular
    .module('connectionsViewPath')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController() {
    var vm = this;
    vm.things = [];

    vm.path1 = {
      id: '1234x'
    };
  }
})();
