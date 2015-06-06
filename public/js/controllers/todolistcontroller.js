controllers.controller('TodolistCtrl', function ($scope, $http, $rootScope, $location) {
    $scope.message= 'TodoList page';
    // $scope.todolist= {};
    $scope.task = [];

    $http({
        method: 'GET',
        url: '/api/tasks'
      }).
      success(function (data, status, headers, config) {
        console.log('Task Rendered!', $scope.task);
        // $scope.todolist = data.tasks;
        return $scope.task = data;
      }).
      error(function (data, status, headers, config) {
        console.log("failed to render task")
      });

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

