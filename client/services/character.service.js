// angular factory to retrieve images for characters and store characters.

(function () {
    'use strict'
    angular
        .module('app')
        .factory('characters', characters);

    characters.$inject = ['router'];

    function characters(router) {

        var characterSets = [{
            name: 'disney-character',
            characters: []
        }, {
            name: 'action-hero',
            characters: []
        }]

        for (var i = 0; i < characterSets.length; i++) {
            var test = i;
            var url = '/data/character/' + characterSets[i].name;
            router.get(url)
                .then(function (response) {
                    console.log(characterSets[test].characters);

                    characterSets[test].characters = response.data;
                    for (var j = 0; j < characterSets[test].characters.length; j++) {
                        var image = characterSets[test].characters[j].image
                        characterSets[test].characters[j].image = 'http://localhost:3000/img/characters/' + image;
                    }

                })
        };

        return {
            characters: characterSets[1].characters
        }

    };

})()