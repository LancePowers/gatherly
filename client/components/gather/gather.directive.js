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
        }
    }

    // Inject singleton service for holding experiences, characters, and go/login squares
    GatherController.$inject = ['gatherHolder'];

    function GatherController(gatherHolder) {
        var vm = this;

        // Initialize the gatherHolder singleton
        gatherHolder.init();


        // Set position of click event for use in gather holder
        vm.select = function (position) {
            gatherHolder.setPosition(position);
        }

        // Used to populate the display array used in the ng-repeat from the gather holder service 
        vm.displays = gatherHolder.getDisplay();

        //        
        //        vm.populateImages = function (position) {
        //            gatherHolder.characters.forEach(function (character) {
        //                if (character.position === position) {
        //                    vm.images.one = character.character.image;
        //                }
        //            })
        //        }
        //        vm.populateImages('one');
        console.log(vm.displays)

    };
})();