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
            }
        }
    }


    GridController.$inject = ['gatherHolder', 'experiences', 'characters', '$mdDialog'];

    function GridController(gatherHolder, experiences, characters, $mdDialog) {
        var vm = this;


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
            //experiences.experiences
        vm.showTabDialog = function (ev) {
            $mdDialog.show({
                templateUrl: 'components/dialog/dialog.html',
                parent: angular.element(vm),
                targetEvent: ev,
                clickOutsideToClose: true
            })
        }
        vm.configView = function (content) {
            if (content === 'character') {
                characters.display(vm.setDisplay);
            } else {
                vm.setDisplay(vm.menu);
            }
        }
        vm.select = function (ev) {
            characters.display(vm.setDisplay);
            vm.showTabDialog(ev)
        }

    };

})();