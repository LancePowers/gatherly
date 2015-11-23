// angular ui router

(function () {
    angular.module('router').config(function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/gather');

        $stateProvider
            .state('gather', {
                url: '/gather',
                templateUrl: 'router/gather.view.html'
            })
            .state('select-grid', {
                url: '/select-grid',
                templateUrl: 'router/select.grid.view.html'
            })
            .state('experience', {
                url: '/experience',
                templateUrl: 'router/experience.html'
            })
            .state('experience-form', {
                url: '/experience-form',
                templateUrl: 'router/experience.form.view.html'
            })
    });
})();