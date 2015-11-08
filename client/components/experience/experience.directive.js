(function () {
    'use strict ';
    angular.module('app.components.selectGrid')
        .directive('selectGrid', selectGridDirective);

    function selectGridDirective() {
        return {
            restrict: 'E',
            templateUrl: 'app/components/selectGrid/selectGrid.html',
            scope: {},
            controller: SelectGridController,
            controllerAs: 'vm',
            bindToController: true
        };
    }

    SelectGridController.$inject = [];

    function SelectGridController() {
        var vm = this;

    }
})();