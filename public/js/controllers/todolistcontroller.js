controllers.controller('TodolistCtrl', function ($scope, $http, $rootScope, $location) {
    $scope.message= 'TodoList page';
    // $scope.tasklist= {};
    // $scope.task = [];

var getTask = function() {
    $http({
        method: 'GET',
        url: '/api/tasks'
      }).
      success(function (data, status, headers, config) {
        console.log('Task Rendered!', $scope.task)
        // $scope.todolist = data.tasks;
        return $scope.task = data;
      }).
      error(function (data, status, headers, config) {
        console.log("failed to render task")
      });
 };
  getTask();

  $scope.delete = function(taskId) {
    console.log("delete attempt")
    $http({
      method: 'DELETE',
      url: 'api/tasks/' + taskId,
      data: $scope.tasklist,
    }).
    success(function(data, status, headers, config) {
      console.log("task deleted")
    getTask();
    }).
    error(function(data, status, headers, config) {
      console.log("delete failed")
    })
  };


});

