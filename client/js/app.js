var app = angular.module('gatherly', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/landing-page.html',
            controller: 'landingPageController'
        })
        .when('/profile', {
            templateUrl: 'views/profile.html',
            controller: 'profileController'
        })

    //        .otherwise({
    //            templateUrl: 'views/home.html',
    //            controller: 'HomeController'
    //        })
})