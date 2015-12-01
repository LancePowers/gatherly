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


    PhoneController.$inject = ['$mdDialog'];

    function PhoneController($mdDialog) {
        var vm = this;
        vm.sizer = function (width) {
            console.log(width);
            if (width > 600) {
                vm.large = 'phone-content'
            } else {
                vm.large = ''
            }
        }
        vm.size = {
            width: 100,
            offset: 0
        };
    };

})();