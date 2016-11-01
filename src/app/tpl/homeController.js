/**
 * Created by zichaosu on 2016/11/1.
 */
'use strict';

angular.module('kevin')
  .controller('homeController', function ($state,$window) {

    var vm = this;

    vm.openSchonell = function () {
      console.log("open schonell");
      $window.open('http://admin.schonell.com.sg','_blank');
    }
  });
