//placeholder for future role creation

(function () {
    'use strict'
    angular
        .module('app')
        .factory('views', views);

    views.$inject = [];

    function views() {
        var view = {
            grid: true,
            experience: false,
            form: false,
        }
        var title = 'Create a Gather!'
        var storedCb;
        var cbFunction = function (cb) {
            storedCb = cb;
        }
        var reset = 'test';
        var createReset = function (cb) {
            console.log(reset);
            reset = cb;
        }

        var change = function (index) {
            view.grid = !view.grid;
            if (index === 0) {
                view.form = !view.form;
            } else {
                view.experience = !view.experience;
            }

            storedCb(view, title);
        }
        return {
            view: view,
            cbFunction: cbFunction,
            change: change,
            title: title,
            reset: reset,
            createReset: createReset
        };

    };
})()