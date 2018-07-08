var myApp = angular.module('myApp', []);

myApp.controller('myController', ['$scope', function ($scope) {

    $scope.init = function(){
        $scope.showItOrNot = '隱藏';
        $scope.customerName = 'Enzo';
        $scope.showName = true;
    }
    $scope.init();
    $scope.nameControl = {}


    $scope.changeName = function(){
        if ($scope.nameControl.changeNameDirective) {
            $scope.customerName = $scope.nameControl.changeNameDirective($scope.customerName);
        }
    }

    $scope.showCustomerName = function() {
        $scope.showName = !$scope.showName;
        if ($scope.showName == true) {
            $scope.showItOrNot = '隱藏';
        } else {
            $scope.showItOrNot = '顯示';
        }
    }
}]);