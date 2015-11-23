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

        gatherHolder.init();

        vm.select = function (ev) {
            vm.showTabDialog(ev)
        }
        console.log(characters.characters)
        vm.displays = gatherHolder.getDisplay();
        //            characters.characters;
        //      experiences.experiences

    };

})();