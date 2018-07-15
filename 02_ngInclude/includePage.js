myApp.controller('childController', ['$scope', function ($scope) {

    $scope.init = function () {
        $scope.page = 1;
        $scope.totalPage = 7;
    }
    $scope.init();

    $scope.previousPage = function () {
        $scope.page -= 1;
        $scope.checkButtonDisabled();
    }

    $scope.nextPage = function () {
        $scope.page += 1;
        $scope.checkButtonDisabled();
    }

    $scope.checkButtonDisabled = function () {
        if ($scope.page <= 1) {
            $scope.disabledPreviousButton = true;
        } else {
            $scope.disabledPreviousButton = false;
        }

        if ($scope.page >= $scope.totalPage) {
            $scope.disabledNextButton = true;
        } else {
            $scope.disabledNextButton = false;
        }
    }
    $scope.checkButtonDisabled();

    $scope.$on('childFocusChangePage', function (e, formParentData) {
        console.log('this is child function');
        if (formParentData <= $scope.totalPage && formParentData >= 0) {
            $scope.page = formParentData;
        } else {
            console.log("缺少頁數 : " + formParentData);
            // 要把錯誤訊息傳給parent
            // $scope.$parent.errorMessage = '缺少頁數 : ' + formParentData;
            $scope.message.errorMessage = '缺少頁數 : ' + formParentData;
        }
        $scope.checkButtonDisabled();
    });

}]);