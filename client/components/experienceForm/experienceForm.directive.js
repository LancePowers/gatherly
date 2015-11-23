// Template to use for future experience creation form.

// submit and cancel aren't fully operationable yet.

(function () {
    'use strict ';
    angular.module('app.components.experienceForm')
        .directive('experienceForm', experienceFormDirective);

    function experienceFormDirective() {
        return {
            restrict: 'E',
            templateUrl: 'components/experienceForm/experienceForm.html',
            scope: {},
            controller: ExperienceFormController,
            controllerAs: 'vm',
            bindToController: true
        };
    }

    ExperienceFormController.$inject = ['router'];


    function ExperienceFormController(router) {

        var vm = this;
        var experience = {
            name
        }


        vm.experienceFormContent = {}

        vm.experienceFormSubmit = function () {
            router.post('/experiences', vm.experienceFormContent);

        }

        vm.experienceFormCancel = function () {
            console.log(vm.experienceFormContent);
            vm.experienceFormContent = {};

        }

    }
})();