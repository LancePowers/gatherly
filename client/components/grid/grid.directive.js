(function () {
    'use strict ';
    angular.module('app.components.grid')
        .directive('grid', gridDirective);

    function gridDirective() {
        console.log('in directive')
        return {
            restrict: 'E',
            templateUrl: 'components/grid/grid.html',
            scope: {},
            controller: GridController,
            controllerAs: 'vm',
            bindToController: true,
            //need to add a link or transclude to determine state.
        }
    }


    GridController.$inject = ['gatherHolder', 'experiences', 'characters', '$mdDialog'];

    function GridController(gatherHolder, experiences, characters, $mdDialog) {
        var vm = this;
        vm.showTabDialog = function (ev) {
            $mdDialog.show({
                templateUrl: 'components/dialog/dialog.html',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose: true
            })
        }



        vm.select = function (ev) {
            vm.showTabDialog(ev)
        }

        vm.displays = gatherHolder.getDisplay();;

        //characters.set(vm.setDisplay);
        vm.setDisplay = function (arr) {
            console.log(arr)
            vm.displays = arr;
        }
        console.log(vm.displays);


        //experiences.experiences
    };

})();