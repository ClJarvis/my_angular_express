controllers.controller('TodoCtrl', function ($scope, $http, $rootScope, $location) {
  //myService
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
      console.log('Congratulations you have more stuff to do!', $scope.task);
      $scope.task = {};
      $location.path('/todolist');
    }).
    error(function (data, status, headers, config) {
      console.log("nothing to do? Try again you ain't getting off that easy")
    });

  }

});
