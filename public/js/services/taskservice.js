angular.module("myApp.taskService", []).service('taskService', function() {
  var currentTask = {};
  return {
    setTask : function (task) {
      currentTask = task;
    },
    getTask : function () {
      return currentTask;
    }
  }
})
