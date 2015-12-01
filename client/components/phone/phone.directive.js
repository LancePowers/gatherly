(function () {
    'use strict ';
    angular.module('app.components.phone')
        .directive('phone', ['$window', phoneDirective]);

    function phoneDirective($window) {
        console.log('in directive')
        return {
            restrict: 'E',
            templateUrl: 'components/phone/phone.html',
            scope: {},
            controller: PhoneController,
            controllerAs: 'vm',
            bindToController: true,
            link: function (scope, element, attrs, controller) {
                controller.sizer($window.innerWidth);
                angular.element($window).on('resize', function () {
                    controller.sizer($window.innerWidth)
                });
            }
        }
    }


    PhoneController.$inject = ['$mdDialog', 'views'];

    function PhoneController($mdDialog, views) {
        var vm = this;
        vm.title = views.title;
        vm.view = views.view;
        vm.reset = function () {
            console.log(views)
            views.reset();
        }
        vm.updateView = function (view, title) {
            vm.view = view;
            vm.title = title;
        }
        views.cbFunction(vm.updateView);
        vm.sizer = function (width) {
            console.log(width);

            if (width > 600) {
                vm.fullScreen = 'phone'
            } else {
                vm.fullScreen = ''
            }
        }
        vm.size = {
            width: 100,
            offset: 0
        };
    };

})();