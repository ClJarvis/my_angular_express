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
        console.log('Task Rendered!')
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


  // var editTask = function(taskId) {
  //   console.log("lets edit this item")
  //   // $scope.task.user = $rootScope.rootUser;
  //   $http({
  //     method: 'GET',
  //     url: '/api/tasks' + taskId,
  //     data: $scope.tasklist,
  //   }).
  //   success(function(data, status, headers, config) {
  //     console.log("editing worked")
  //     getTask();
  //   }).
  //   $http({
  //     method: 'DELETE',
  //     url: 'api/tasks/' + taskId,
  //     data: $scope.tasklist,
  //   })
  // };
controllers.contoller('EditCtrl', function($scope, $rootScope, $http, myService) {
  $scope.message= "edit a task";
  console.log("in edit ctrl");

  $scope.task = taskService.editTask;
})
});

