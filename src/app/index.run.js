(function() {
  'use strict';

  angular
    .module('kevin')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log,$state) {

    $log.debug('runBlock end');
  }

})();
