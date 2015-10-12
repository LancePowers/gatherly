var app = angular.module('gatherly', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/landing', {
            templateUrl: 'views/landing.html',
            controller: 'landingController'
        })
        .when('/login', {
            templateUrl: 'views/login.html',
            controller: 'loginController'
        })
        .when('/gather', {
            templateUrl: 'views/gather.html',
            controller: 'gatherController'
        })
        .when('/experience/:id', {
            templateUrl: 'views/experience.html',
            controller: 'experienceController'
        })
        .when('/new/experience', {
            templateUrl: 'views/experience-form.html',
            controller: 'experienceFormController'
        })
        .when('/roles', {
            templateUrl: 'views/roles.html',
            controller: 'rolesController'
        })
        .when('/roles/select', {
            templateUrl: 'views/role-select.html',
            controller: 'roleSelectController'
        })
        .otherwise({
            templateUrl: 'views/landing-page.html',
            controller: 'landingController'
        })
})

//app.run(function ($rootScope, $location, $route, AuthService) {
//    $rootScope.on('$routeChangeStart', function (event, next, current) {
//        if (next.access.restricted && !AuthService.getUserStatus()) {
//            $location.path('/login');
//        }
//    });
//});