controllers.controller('TodoCtrl', function ($scope, $http, $location) {
  $scope.message = 'Todo';
  $scope.todo = {};

  $scope.todo = function(){
    console.log('you clicked the create a form button')
    $http({
          method: 'POST',
          url: '/api/tasks',
          data: $scope.todo
        }).
        success(function (data, status, headers, config) {
          console.log('you added a task!', data);
          $scope.todo = data.task;
          $location.path('/todolist');
        }).
        error(function (data, status, headers, config) {
          console.log('adding task failed')
        });
  }

});
