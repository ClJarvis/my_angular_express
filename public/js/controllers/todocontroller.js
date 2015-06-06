controllers.controller('TodoCtrl', function ($scope, $http, $rootScope, $location) {
  $scope.message = 'Todo';
  $scope.task = {};

  $scope.todo = function(){
    console.log('you clicked the create a form button')
    $scope.task.user = $rootScope.rootUser;
    $http({
      method: 'POST',
      url: '/api/tasks',
      data: $scope.task
    }).
    success(function (data, status, headers, config) {
      console.log('Here is your list', $scope.task);
      $scope.task = {};
      $location.path('/todolist');
    }).
    error(function (data, status, headers, config) {
      console.log('adding task failed')
    });

  }

});

    // $http({
    //       method: 'GET',
    //       url: '/api/tasks',
    //       data: $scope.todo
    //     }).
    //     success(function (data, status, headers, config) {
    //       console.log(' GET you added a task!', data);
    //       console.log($scope.todo);
    //       $scope.todo={};
    //       $rootScope.rootuser = data.username;
    //       $scope.todo = data.tasks;
    //       console.log($scope.todo);

    //       $location.path('/todolist');
    //     }).
    //     error(function (data, status, headers, config) {
    //       console.log(' GET adding task failed')
    //     });
