(function() {
  'use strict';

  angular
    .module('kevin')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($window,$timeout, webDevTec, toastr,$state) {
    var vm = this;
    console.log("home");
    $state.go('index.home');
  //   vm.awesomeThings = [];
  //   vm.classAnimation = '';
  //   vm.creationDate = 1476596428619;
  //   vm.showToastr = showToastr;
  //
  //   activate();
  //
  //   function activate() {
  //     getWebDevTec();
  //     $timeout(function() {
  //       vm.classAnimation = 'rubberBand';
  //     }, 4000);
  //   }
  //
  //   function showToastr() {
  //     toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
  //     vm.classAnimation = '';
  //   }
  //
  //   function getWebDevTec() {
  //     vm.awesomeThings = webDevTec.getTec();
  //
  //     angular.forEach(vm.awesomeThings, function(awesomeThing) {
  //       awesomeThing.rank = Math.random();
  //     });
  //   }

  }
})();