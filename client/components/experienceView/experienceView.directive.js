(function () {
    'use strict';
    angular.module('app.components.experienceView')
        .directive('view', experienceViewDirective);

    function experienceViewDirective() {

        return {
            restrict: 'E',
            templateUrl: 'components/experienceView/experienceView.html',
            scope: {},
            controller: ExperienceViewController,
            controllerAs: 'vm',
            bindToController: true,
        };
    }
    ExperienceViewController.$inject = ['views', 'experiences'];


    function ExperienceViewController(views, experiences) {
        var vm = this;
        vm.active = experiences.experiences[0]
        vm.getActive = function (active) {
            vm.active = active
        }

        experiences.setCb(vm.getActive)

        vm.sendToGatherHolder = function () {
            console.log('firing');
        }
        vm.cancel = function () {
            views.change();
        }

    }
})();