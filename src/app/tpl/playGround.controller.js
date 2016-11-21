/**
 * Created by zichaosu on 2016/11/20.
 */
'use strict';

angular.module('kevin')
  .controller('PlayGroundController', function ($timeout, $scope, $uibModal) {

    var vm = this;

    vm.data = [];

    console.log("PlayGroundController");

    vm.getData = function () {
      vm.data = [
        {
          'ID': 1,
          'FirstName': "First Name",
          'LastName': 'Last Name',
          'JobTitle': 'Job Title',
          'StartedOn': 'Started On',
          'DateofBirth': 'Date of Birth'
        },
        {
          'ID': 2,
          'FirstName': "First Name2",
          'LastName': 'Last Name2',
          'JobTitle': 'Job Title2',
          'StartedOn': 'Started On2',
          'DateofBirth': 'Date of Birth2'
        },
        {
          'ID': 3,
          'FirstName': "First Name3",
          'LastName': 'Last Name3',
          'JobTitle': 'Job Title3',
          'StartedOn': 'Started On3',
          'DateofBirth': 'Date of Birth3'
        },
        {
          'ID': 3,
          'FirstName': "aaaaaaaaaaaaaaaa",
          'LastName': 'Last Name3',
          'JobTitle': 'Job Title3',
          'StartedOn': 'Started On3',
          'DateofBirth': 'Date of Birth3'
        }
      ];
    };

    vm.getData();

  });
