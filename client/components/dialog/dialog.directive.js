(function () {
    'use strict';
    angular.module('app.components.dialog')
        .directive('dialog', dialogDirective);

    function dialogDirective() {
        console.log('in directive')
        return {
            restrict: 'E',
            templateUrl: 'components/dialog/dialog.html',
            scope: {},
            controller: DialogController,
            controllerAs: 'vm',
            bindToController: true,
        }
    }
    DialogController.$inject = ['$mdDialog'];


    function DialogController($mdDialog) {
        var vm = this;
        vm.test = "Woohoo"
        vm.hide = function () {
            $mdDialog.hide();
        };
        vm.cancel = function () {
            $mdDialog.cancel();
        };
        vm.answer = function (answer) {
            $mdDialog.hide(answer);
        };
    }
})();