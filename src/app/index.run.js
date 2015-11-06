(function() {
  'use strict';

  angular
    .module('connectionsViewPath')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
