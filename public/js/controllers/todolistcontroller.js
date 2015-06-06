controllers.controller('TodolistCtrl', function ($scope, $http, $location) {
    $scope.message= 'TodoList';
    $scope.todolist= {};


  $scope.todolist = function(){
    console.log('Heres your list')
    $http({
          method: 'POST',
          url: '/api/tasks',
          data: $scope.user
        }).
        success(function (data, status, headers, config) {
          console.log('Congratulations you have more stuff to do!', data);
          $scope.todolist = data.tasks;
          $location.path('/todolist');
        }).
        error(function (data, status, headers, config) {
          console.log("nothing to do? check again you ain't getting off that esay")
        });
  }

});
