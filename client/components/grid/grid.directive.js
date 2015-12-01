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
            bindToController: true
        }
    }


    GridController.$inject = ['gatherHolder', 'experiences', 'characters', '$mdDialog', 'views'];

    function GridController(gatherHolder, experiences, characters, $mdDialog, views) {
        var vm = this;


        vm.menu = [{
            text: 'Experiences',
            image: 'img/gatherlyLogo.png',
            }, {
            text: 'Roles',
            image: 'img/gatherlyLogo.png',
            }, {
            text: 'Characters',
            image: 'img/gatherlyLogo.png',
            }, {
            text: 'Gather!',
            image: 'img/gatherlyLogo.png',
            }];

        vm.chooseDisplay = function (index) {
            switch (index) {
            case 0:
                vm.displays = experiences.experiences;
                break;
            case 1:
                vm.displays = roles.roles
                break;
            case 2:
                characters.display(vm.setDisplay)
                break;
            }
        }

        views.createReset(function () {
            console.log(vm.displays)
            vm.displays = vm.menu;
        });

        vm.setDisplay = function (arr) {
            vm.displays = arr;
        }

        vm.setDisplay(vm.menu);

        vm.mode = 'menu';


        vm.select = function (ev) {
            if (vm.mode === 'menu') {
                vm.chooseDisplay(ev);
                vm.mode = vm.menu[ev].text;
            } else if (vm.mode === 'Experiences') {
                experiences.setActive(ev);
                views.change(ev);
            } else if (vm.mode === 'Roles') {
                console.log(ev)
            } else if (vm.mode === 'Characters') {
                console.log(ev)
            };
        }

    };

})();