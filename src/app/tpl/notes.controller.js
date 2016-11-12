/**
 * Created by zichaosu on 2016/11/6.
 */
'use strict';

angular.module('kevin')
  .controller('NotesController', function ($state,$window) {

    var vm = this;
    console.log("notes");


    console.log(moment().date(0));
    console.log(moment().date(1));
    console.log(moment().day(0));

  });
