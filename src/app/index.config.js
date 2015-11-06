(function() {
  'use strict';

  angular
    .module('connectionsViewPath')
    .config(config);

  /** @ngInject */
  function config($logProvider) {
    // Enable log
    $logProvider.debugEnabled(true);

  }

})();
