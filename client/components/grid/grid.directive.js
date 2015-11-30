(function () {
    'use strict ';
    angular.module('app.components.grid')
        .directive('grid', ['$window', gridDirective]);

    function gridDirective($window) {
        console.log('in directive')
        return {
            restrict: 'E',
            templateUrl: 'components/grid/grid.html',
            scope: {},
            controller: GridController,
            controllerAs: 'vm',
            bindToController: true,
            link: function (scope, element, attrs, controller) {
                controller.configView(attrs.content);
                controller.sizer($window.innerWidth, attrs.content);
                angular.element($window).on('resize', function () {
                    controller.sizer($window.innerWidth, attrs.content)
                });
            }
        }
    }


    GridController.$inject = ['gatherHolder', 'experiences', 'characters', '$mdDialog'];

    function GridController(gatherHolder, experiences, characters, $mdDialog) {
        var vm = this;
        vm.test = true;
        vm.size = {
            width: 100,
            offset: 0
        };
        vm.menu = [{
            text: 'Experiences',
            image: 'img/gatherlyLogo.png',
            click: function () {}
            }, {
            text: 'Roles',
            image: 'img/gatherlyLogo.png',
            click: function () {}
            }, {
            text: 'Characters',
            image: 'img/gatherlyLogo.png',
            click: function () {}
            }, {
            text: 'Gather!',
            image: 'img/gatherlyLogo.png',
            click: function () {}
            }];

        vm.setDisplay = function (arr) {
            vm.displays = arr;
        }

        vm.configView = function (content) {
            console.log(content)
            if (content === 'home') {
                vm.setDisplay(vm.menu);
                vm.size = {
                    width: 40,
                    offset: 10
                };
            }
        }
        vm.sizer = function (width, view) {
                console.log(width);
                if (width > 600) {
                    vm.large = 'phone-content'
                } else {
                    vm.large = ''
                }
            }
            //experiences.experiences
        vm.showTabDialog = function (ev) {
            $mdDialog.show({
                templateUrl: 'components/dialog/dialog.html',
                parent: angular.element(vm),
                targetEvent: ev,
                clickOutsideToClose: true
            })
        }

        vm.select = function (ev) {
            characters.display(vm.setDisplay);
            vm.showTabDialog(ev)
        }
    };

})();