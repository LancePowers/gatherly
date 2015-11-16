// Directive to handle the preparation and display of the character select grid.

(function () {
    'use strict ';

    angular.module('app.components.selectGrid')
        .directive('selectGrid', selectGridDirective);

    function selectGridDirective() {
        return {
            restrict: 'E',
            templateUrl: 'components/selectGrid/selectGrid.html',
            scope: {},
            controller: SelectGridController,
            controllerAs: 'vm',
            bindToController: true
        };
    }

    SelectGridController.$inject = ['characters', 'gatherHolder', 'router'];

    function SelectGridController(characters, gatherHolder, router) {
        var vm = this;

        // Hard coded group Url. Will need to be made dynamic.
        var groupUrl = '/data/character/disney-character';

        // call router service to get character images and MB type from server
        router.get(groupUrl);

        //declare and populate and array for the select grid ng-repeat
        vm.squares = [];
        vm.populateSquares = function () {
            vm.squares = characters.characters();
        }

        //update view by either adding or removing a character from the character array in gather holder
        vm.updateSquare = function (character) {
            if (vm.isSelected(character)) {
                gatherHolder.removeCharacter(character);
            } else {
                gatherHolder.addCharacter(character);
            }
        }

        // Used to handle the selected styling on select grid
        vm.isSelected = function (character) {
            for (var i = 0; i < gatherHolder.characters.length; i++) {
                if (character._id === gatherHolder.characters[i].character._id) {
                    return true;
                }
            }
            return false;
        }
    }
})();