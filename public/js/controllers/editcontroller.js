controllers.controller('EditCtrl', function ($scope, $rootScope, $http, $location, taskService) {
  $scope.message= "edit a task";
  // console.log("in edit ctrl");
$scope.getTask = function (){
  $scope.task = taskService.getTask();
  console.log(taskService.getTask());
}
$scope.getTask();
 $scope.submit = function() {
    console.log("lets edit this item")
    // $scope.task.user = $rootScope.rootUser;
    $http({
      method: 'POST',
      url: '/api/tasks',
      data: $scope.task,
    }).
    success(function(data, status, headers, config) {
      console.log("editing worked")
      return $location.path('/edit')
      $scope.task = {};
    }).
    error(function(data, status, headers, config) {
      console.log("editing failed")
    });
  }
  $scope.edit = function(editId) {
    $http({
      method: 'DELETE',
      url: 'api/tasks/' + editId,
      data: $scope.tasklist,
    }).
    success(function(data, status, headers, config) {
      console.log("task deleted")
    getTask();
    }).
    error(function(data, status, headers, config) {
      console.log("delete failed")
    });
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
