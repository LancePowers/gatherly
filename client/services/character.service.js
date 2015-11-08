(function () {
    'use strict'
    angular
        .module('app')
        .factory('characters', characters);

    characters.$inject = [];

    function characters() {
        var characters = [];
        var set = function (response) {
            characters = response.data;
            for (var i = 0; i < characters.length; i++) {
                var image = characters[i].image
                characters[i].image = 'http://localhost:3000/img/characters/' + image;
            }
        }
        return {
            set: function (response) {
                set(response);
            },
            characters: function () {

                return characters;
            }
        }
    };
})()