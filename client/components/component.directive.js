(function () {
    'use strict ';
    //retrieve components module
    angular.module('app.components')
        //create components directive to hand MVC
        .directive('components', componentDirective);

    function componentDirective() {
        console.log('in component directive')
        return {
            restrict: 'E',
            templateUrl: 'components/components.html',
            scope: {},
            controller: ComponentController,
            controllerAs: 'vm',
            bindToController: true,
        }
    }


    ComponentController.$inject = [];


    function ComponentController() {
        var vm = this;

        // Set default value for display of selectGrid and gather directives. 
        // This is an attempt to replace angular's UI router for compatability with Jekyll 
        vm.selectGrid = true;
        vm.gather = true;

        // Toggle views
        vm.showHide = function () {
            vm.gather = !vm.gather;
        }

    };
})();