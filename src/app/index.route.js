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
        templateUrl: "app/tpl/home.html",
        controller: 'HomeController',
        controllerAs: 'vm'
      })
      .state('index.notes', {
        url: "/notes",
        templateUrl: "app/tpl/notes.html",
        controller: 'NotesController',
        controllerAs: 'vm'
      });


    $urlRouterProvider.otherwise('');
    // $locationProvider.html5Mode(true);
  }

})();
