(function () {
    'use strict ';
    angular.module('app.components.gather')
        .directive('gather', gatherDirective);

    function gatherDirective() {
        console.log('in directive')
        return {
            restrict: 'E',
            templateUrl: 'components/gather/gather.html',
            scope: {},
            controller: GatherController,
            controllerAs: 'vm',
            bindToController: true,
            link: function (scope, elem, attrs, controller) {

            }
        }
    }

    GatherController.$inject = ['gatherHolder'];

    function GatherController(gatherHolder) {
        var vm = this;
        vm.select = function (event) {
            var position = parseInt(event.srcElement.id);
            gatherHolder.setPosition(position);
        }
        vm.images = {
            '0': '',
            one: '',
            '2': '',
            '3': ''
        }
        vm.populateImages = function (position) {
            gatherHolder.characters.forEach(function (character) {
                if (character.position === position) {
                    vm.images.one = character.character.image;
                }
            })
        }
        vm.populateImages('one');


    };
})();