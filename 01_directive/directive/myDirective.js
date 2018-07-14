myApp.directive("myDirective1", function () {
    return {
        restrict: 'EA',
        template: '<h1 ng-show="showName">directive Hello, {{ customerName }}</h1>',
        link: link
    }

    function link(scope, element, attrs, controller) {
        console.log('customerName >>>>>', scope.customerName);
        scope.customerName = 'Ada';
        console.log('customerName >>>>>', scope.customerName);
    }

});

myApp.directive("myDirective2", function () {
    return {
        scope: {
            control: '='
        },
        link: link
    }

    function link(scope, element, attrs, controller) {
        scope.control.changeNameDirective = function (name) {
            name = name == 'Enzo' ? 'Ada' : 'Enzo';
            return name;
        }
    }
});