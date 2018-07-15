var myApp = angular.module('myApp', []);

myApp.controller('parentController', ['$scope', function ($scope) {

    $scope.childUrl = "./includePage.html";

    $scope.init = function(){
        $scope.message = {};
        $scope.message.errorMessage = '';
    }
    $scope.init();

    $scope.focusChangePage = function (page) {
        $scope.message.errorMessage = '';
        $scope.$broadcast('childFocusChangePage', page);
    }

}]);