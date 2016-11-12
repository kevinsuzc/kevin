/**
 * Created by zichaosu on 2016/11/8.
 */
'use strict';

angular.module('kevin')
  .controller('CalendarController', function ($scope,$uibModal) {

    var vm = this;
    console.log("calendar");

    vm.click = function (day, size) {

      var modalInstance = $uibModal.open({
        animation: true,
        templateUrl: 'app/tpl/modal.calendarDayEvent.html',
        controller: 'CalendarDayEventController as vm',
        size: size,
        backdrop: 'static',
        resolve: {
          day: function () {
            return day;
          }
        }
      });
      modalInstance.result.then(function () {

      }, function () {

      });
    };

  });
