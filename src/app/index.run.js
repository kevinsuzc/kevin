(function() {
  'use strict';

  angular
    .module('kevin')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log,$state,$rootScope) {
    $rootScope.$state = $state;
    $log.debug('runBlock end');
  }

})();
