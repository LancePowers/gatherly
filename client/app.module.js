// declare app module and inject in high level dependencies

(function () {
    'use strict';

    angular.module('app', [
        'ngMaterial',
        'ngRoute',
        'app.components',
        'ngMdIcons'
    ]);

})();