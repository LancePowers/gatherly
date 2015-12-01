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

        vm.sizer = function (width) {
            console.log(width);
            vm.view = views.view;
            vm.updateView = function (view) {
                vm.view = view;
            }
            views.cbFunction(vm.updateView);
            if (width > 600) {
                vm.fullScreen = 'phone'
            }
            //            if (width > 960 && width < 1060) {
            //                vm.padding = 'pad-left'
            //            } 
            else {
                vm.fullScreen = ''
            }
        }
        vm.size = {
            width: 100,
            offset: 0
        };
    };

})();