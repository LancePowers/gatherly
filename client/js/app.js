var app = angular.module('gatherly', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/landing-page.html',
            controller: 'landingPageController'
        })

    //        .otherwise({
    //            templateUrl: 'views/home.html',
    //            controller: 'HomeController'
    //        })
})