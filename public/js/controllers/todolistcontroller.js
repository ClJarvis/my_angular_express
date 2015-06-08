controllers.controller('TodolistCtrl', function ($scope, $http, $rootScope, $location, taskService) {
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

  $scope.delete = function(id) {
    console.log("delete attempt")
    $http({
      method: 'DELETE',
      url: 'api/tasks/' + id,
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

  $scope.edit = function(taskId) {

        $http({
              method: 'GET',
              url: '/api/tasks/' + taskId
            }).
            success(function (data, status, headers, config) {
              console.log('inside listController');
              // console.log(data[0]);
              taskService.setTask(data[0]);
              console.log("made it past services")
              $location.path('/edit');
            }).
            error(function (data, status, headers, config) {
              console.log('could not get the tasks');
            });
      }

});
