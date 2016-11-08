(function() {
  'use strict';

  angular
    .module('kevin')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope,$state) {
    var vm = this;

    // console.log($state.current)

    if($state.current.name == 'index'){
      // console.log("index")
      $state.go('index.home');
    }
    $scope.isNavCollapsed = true;
    $scope.isCollapsed = false;
    $scope.isCollapsedHorizontal = false;
  }
})();
