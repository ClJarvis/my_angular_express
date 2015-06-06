controllers.controller('TodolistCtrl', function ($scope, $http, $rootScope, $location) {
    $scope.message= 'TodoList page';
    $scope.todolist= {};
    $scope.task = {};


  $scope.todolist = function(){
    console.log('TodolistCtrl is here')
    $http({
        method: 'GET',
        url: '/api/tasks',
        data: $scope.task
      }).
      success(function (data, status, headers, config) {
        console.log('Congratulations you have more stuff to do!', $scope.task);
        $scope.todolist = data.tasks;
        $location.path('/todolist');
      }).
      error(function (data, status, headers, config) {
        console.log("nothing to do? check again you ain't getting off that easy")
      });
  }

});

// $http({
//           method: 'GET',
//           url: '/api/tasks',
//           data: $scope.todo
//         }).
//         success(function (data, status, headers, config) {
//           console.log(' GET you added a task!', data);
//           console.log($scope.todo);
//           $scope.todo={};
//           $rootScope.rootuser = data.username;
//           $scope.todo = data.tasks;
//           console.log($scope.todo);

//           $location.path('/todolist');
//         }).
//         error(function (data, status, headers, config) {
//           console.log(' GET adding task failed')
//         });

