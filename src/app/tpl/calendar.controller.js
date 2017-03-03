/**
 * Created by zichaosu on 2016/11/8.
 */
'use strict';

angular.module('kevin')
  .controller('CalendarController', function ($scope,$uibModal) {

    var vm = this;
    console.log("calendar");

    // function generateTable(thisMonthFirstDate) {
    //   for (var i = 0; i < 6; i++){
    //     var newRow = document.createElement("tr");
    //     for(var j = 0; j < 7; j++){
    //       var newDate = document.createElement("td");
    //       var date;//获取日期信息
    //       newDate.innerText = thisMonthFirstDate;
    //       newRow.appendChild(newDate);
    //     }
    //     dateTable.appendChild(newRow);
    //   }
    // }
    //
    // var currentDate = new Date();
    //
    // var month = currentDate.getMonth();
    // console.log(month);
    // var year = currentDate.getFullYear();
    // var thisMonthDay = new Date(year, month, 1);
    // var thisMonthFirstDay = thisMonthDay.getDay();
    // var thisMonthFirstDate = new Date(year, month, - thisMonthFirstDay);
    // console.log(thisMonthDay,thisMonthFirstDay,thisMonthFirstDate);
    // generateTable(thisMonthFirstDate);  //生成日历主体的日期区域

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
