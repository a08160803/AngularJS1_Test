var myApp = angular.module('myApp', []);

myApp.controller('parentController', ['$scope', function ($scope) {

    $scope.childUrl = "./includePage.html";

    $scope.init = function(){
        $scope.errorMessage = '';
    }
    $scope.init();

    $scope.focusChangePage = function (page) {
        $scope.errorMessage = '';
        $scope.$broadcast('childFocusChangePage', page);
    }

}]);