controllers.controller('TodoCtrl', function ($scope, $http, $location) {
  $scope.message = 'Todo';
  $scope.Todo = {};

  $scope.Todo = function(){
    console.log('you clicked the create a form button')
    $http({
          method: 'POST',
          url: '/api/tasks',
          data: $scope.Todo
        }).
        success(function (data, status, headers, config) {
          console.log('you added a task!', data);
          $scope.Todo = data.task;
          $location.path('/todolist');
        }).
        error(function (data, status, headers, config) {
          console.log('adding task failed')
        });
  }

});
