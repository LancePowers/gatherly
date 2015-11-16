// factory to handle server calls.

(function () {
    'use strict'
    angular
        .module('app')
        .factory('router', router);

    router.$inject = ['$http', 'characters'];

    function router($http, characters) {
        var obj = {};
        //1. get request
        obj.get = function (url) {
            return $http.get(url).then(characters.set);
        };
        //2. post request
        obj.post = function (url, payload) {
            return $http.post(url, payload);
        };
        return obj;
    };
})()