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
    });
})();