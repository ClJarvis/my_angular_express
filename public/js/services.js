'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', []).
  value('version', '0.1').service('taskService', function() {
  var currentTask = {};
  return {
    setTask : function (task) {
      currentTask = task;


    },
    getTask : function () {
      // console.log(currentTask);
      return currentTask;
    }
  }
})

