(function() {
  'use strict';

  angular
    .module('connectionsViewPath')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController() {
    var vm = this;
    vm.things = [];
  }
})();
