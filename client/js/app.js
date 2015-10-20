var app = angular.module('gatherly', ['ngRoute', 'ngAnimate', 'ui.bootstrap']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/register', {
            templateUrl: 'views/register.html',
            controller: 'registerController'
        })
        .when('/login', {
            templateUrl: 'views/login.html',
            controller: 'loginController'
        })
        .when('/gather', {
            templateUrl: 'views/gather.html',
            controller: 'gatherController'
        })
        .when('/new/gather', {
            templateUrl: 'views/gather-form.html',
            controller: 'gatherFormController'
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
        .when('/character', {
            templateUrl: 'components/character/characters.html',
        })
        .otherwise({
            templateUrl: 'views/gather.html',
            controller: 'gatherController'
        })
})

//app.run(function ($rootScope, $location, $route, AuthService) {
//    $rootScope.on('$routeChangeStart', function (event, next, current) {
//        if (next.access.restricted && !AuthService.getUserStatus()) {
//            $location.path('/login');
//        }
//    });
//});