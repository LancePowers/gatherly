(function () {
    'use strict ';
    //retrieve components module
    angular.module('app.components')
        .controller('ComponentController', ComponentController)
    ComponentController.$inject = ['$window']

    function ComponentController($window) {
        var vm = this;
        vm.mobile = ($window.innerWidth < 720);
        console.log(vm.mobile)
    };
})();