//placeholder for future role creation

(function () {
    'use strict'
    angular
        .module('app')
        .factory('views', views);

    views.$inject = [];

    function views() {
        var view = {
            grid: false,
            experience: false,
            form: true
        }
        var storedCb;
        var cbFunction = function (cb) {
            storedCb = cb;
        }
        var change = function () {
            view.grid = !view.grid;
            view.experience = !view.experience;
            storedCb(view);
        }
        return {
            view: view,
            cbFunction: cbFunction,
            change: change
        };

    };
})()