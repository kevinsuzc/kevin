(function() {
  'use strict';

  angular
    .module('kevin')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log,$state,$rootScope,editableOptions) {
    $rootScope.$state = $state;
    editableOptions.theme = 'bs3';
    $log.debug('runBlock end');
  }

})();
