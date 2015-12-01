(function () {
    'use strict';
    angular.module('app.components.experienceView')
        .directive('view', experienceViewDirective);

    function experienceViewDirective() {
        console.log('in EView directive');
        return {
            restrict: 'E',
            templateUrl: 'components/experienceView/experienceView.html',
            scope: {},
            controller: ExperienceViewController,
            controllerAs: 'vm',
            bindToController: true,
        };
    }
    // i get an injector error with this and i have no clue why... that's why it's commented out.
    // ExperienceViewController.$inject = [''];


    function ExperienceViewController() {
        var vm = this;

        console.log('please...');

        vm.sendToGatherHolder = function () {
            console.log('firing');
        }

    }
})();
