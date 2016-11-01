(function () {
  'use strict';

  angular
    .module('kevin')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider,$locationProvider) {
    // $urlRouterProvider.when('', '/#/home');
    $stateProvider
      .state('index', {
        url: '',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'vm'
      })
      .state('index.home', {
        url: "/home",
        templateUrl: "app/tpl/home.html"
      });

    $urlRouterProvider.otherwise('');
    // $locationProvider.html5Mode(true);
  }

})();
