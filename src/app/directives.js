/**
 * Created by zichaosu on 2016/11/2.
 */
'use strict';
// angular.module('angularPrism',[])
//   .directive('code', function () {
//     return {
//       restrict: 'E',
//       link: function ($scope, element, attrs) {
//         element.ready(function () {
//           Prism.highlightAll();
//         });
//       }
//     }
//   });
angular.module('kevin')
  .directive('calendar', function ($timeout) {
    return {
      restrict: 'E',
      link: function ($scope) {
        $scope.day = moment();
        console.log($scope.day);
        // $scope.selected = _removeTime($scope.selected || moment());
        $scope.selected = $scope.day;
        console.log($scope.selected);
        $scope.month = $scope.selected.clone();
        console.log($scope.month);

        var start = $scope.selected.clone();
        // start.date(1);
        console.log(start.date(1));
        _removeTime(start.day(0));

        _buildMonth($scope, start, $scope.month);

        $scope.select = function (day) {
          $scope.selected = day.date;
          // console.log($scope.selected);
        };

        $scope.next = function () {
          var next = $scope.month.clone();
          _removeTime(next.month(next.month() + 1)).date(1);
          $scope.month.month($scope.month.month() + 1);
          _buildMonth($scope, next, $scope.month);
        };

        $scope.previous = function () {
          var previous = $scope.month.clone();
          _removeTime(previous.month(previous.month() - 1).date(1));
          $scope.month.month($scope.month.month() - 1);
          _buildMonth($scope, previous, $scope.month);
        };
        function _removeTime(date) {
          return date.day(0).hour(0).minute(0).second(0).millisecond(0);
        }

        function _buildMonth(scope, start, month) {
          scope.weeks = [];
          var done = false, date = start.clone(), monthIndex = date.month(), count = 0;
          while (!done) {
            scope.weeks.push({days: _buildWeek(date.clone(), month)});
            date.add(1, "w");
            done = count++ > 2 && monthIndex !== date.month();
            monthIndex = date.month();
          }
        }

        function _buildWeek(date, month) {
          var days = [];
          for (var i = 0; i < 7; i++) {
            days.push({
              name: date.format("dd").substring(0, 1),
              number: date.date(),
              isCurrentMonth: date.month() === month.month(),
              isToday: date.isSame(new Date(), "day"),
              date: date
            });
            date = date.clone();
            date.add(1, "d");
          }
          return days;
        }
      }
    };

  })
  .directive('footable', function ($timeout) {
    return {
      restrict: 'A',
      scope: {
        pagingSize: '@'
      },
      link: function (scope, element, attributes) {
        console.log(attributes.pagingSize);

        $timeout(function () {
          element.footable({
            "paging": {
              "enabled": true,
              "position": "right",
              "size": attributes.pagingSize
            },
            "sorting": {
              "enabled": true
            },
            "filtering": {
              "enabled": true
            }
          })
        }, 100)
      }
      // console.log(ele);
    }
  })

;
