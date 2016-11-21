/**
 * Created by zichaosu on 2016/11/12.
 */

angular.module('kevin')
  .controller('CalendarDayEventController', function ($scope, day,$uibModalInstance) {

    var vm = this;
    vm.day = day;
    console.log("CalendarDayEventController");
    // console.log(day);
    // console.log(vm.day.date.toString().substring(4,14));
    console.log( Date(1984, 4, 15, 19, 20));
    console.log(moment().date())
    $scope.user = {
      time: new Date()
    };

    vm.cancel = function () {
      $uibModalInstance.dismiss();
      // $state.reload();
    }

  });
