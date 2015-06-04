controllers.controller('NavCtrl', function ($scope, $rootScope, $location) {
    $scope.message="Nav";
    $scope.logout= function() {
      $rootScope.rootuser = null;
      $location.path('/')
    }
});
