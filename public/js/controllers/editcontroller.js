controllers.contoller('EditCtrl', function($scope, $rootScope, $http, taskService) {
  $scope.message= "edit a task";
  console.log("in edit ctrl");

  $scope.task = taskService.editTask;
})
