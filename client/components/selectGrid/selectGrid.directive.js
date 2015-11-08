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
        console.log('there');
        var vm = this;
        var groupUrl = '/data/character/disney-character';
        router.get(groupUrl);
        vm.squares = [];
        vm.populateSquares = function () {
            vm.squares = characters.characters();
        }
        vm.updateSquare = function (character) {
            if (vm.isSelected(character)) {
                gatherHolder.removeCharacter(character);
            } else {
                gatherHolder.addCharacter(character);
            }
        }
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