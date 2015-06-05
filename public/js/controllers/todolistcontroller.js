controllers.controller('TodolistCtrl', function ($scope, $http, $location) {
    $scope.message= 'TodoList';
    $scope.todolist= {};


  $scope.todolist = function(){
    console.log('Heres your list')
    $http({
          method: 'GET',
          url: '/api/list',
          data: $scope.todolist
        }).
        success(function (data, status, headers, config) {
          console.log('Congratulations you have more stuff to do!', data);
          $scope.todolist = data.task;
          $location.path('/');
        }).
        error(function (data, status, headers, config) {
          console.log("nothing to do? check again you ain't getting off that esay")
        });
  }

});
