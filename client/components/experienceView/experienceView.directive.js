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
    ExperienceViewController.$inject = ['views'];


    function ExperienceViewController(views) {
        var vm = this;

        console.log('please...');

        vm.sendToGatherHolder = function () {
            console.log('firing');
        }
        vm.cancel = function () {
            views.change();
        }

    }
})();