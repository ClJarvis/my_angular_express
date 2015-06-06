'use strict';

/* Controllers */

var controllers = angular.module('myApp.controllers', [])
controllers.controller('AppCtrl', function ($scope, $http) {

    $http({
      method: 'GET',
      url: '/api/name'
    }).
    success(function (data, status, headers, config) {
      $scope.name = data.name;
    }).
    error(function (data, status, headers, config) {
      $scope.name = 'Error!';
    });

  })

controllers.service('taskService', function(){
  this.editTask = {};
});

/*
//Inside controlers.js
controllers.service('myService', function(){
  this.editTask = {};
}),

//inside edit contoller
controllers.contoller('EditCtrl', function($scope, $rootScope, $http, myService) {
  $scope.message= "edit a task";
  console.log("in edit ctrl");

  $scope.task = myService.editTask;
})

contollers.contoller('ListCtrl', function($scope, $http, $route, $location,myService){

})

/////// */
