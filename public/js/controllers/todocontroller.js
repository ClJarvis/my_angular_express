controllers.controller('TodoCtrl', function ($scope, $http, $rootScope, $location) {
  $scope.message = 'Todo';
  $scope.todo = {};

  $scope.todo = function(){
    console.log('you clicked the create a form button')
    $http({
          method: 'GET',
          url: '/api/tasks',
          data: $scope.todo
        }).
        success(function (data, status, headers, config) {
          console.log(' GET you added a task!', data);
          console.log($scope.todo);
          $scope.todo={};
          $rootScope.rootuser = data.username;
          $scope.todo = data.tasks;
          console.log($scope.todo);

          $location.path('/');
        }).
        error(function (data, status, headers, config) {
          console.log(' GET adding task failed')
        });

        $http({
          method: 'POST',
          url: '/api/tasks',
          data: $scope.user
        }).
        success(function (data, status, headers, config) {
          console.log('Here is your list', data);
          $scope.todo = data.tasks;
          $location.path('/todolist');
        }).
        error(function (data, status, headers, config) {
          console.log('adding task failed')
        });

  }

});

