// angular factory to retrieve images for characters and store characters.

(function () {
    'use strict'
    angular
        .module('app')
        .factory('characters', characters);

    characters.$inject = ['router'];

    function characters(router) {
        var set = [];
        var type = ['disney-character', 'action-hero']

        var url = '/data/character/disney-character';
        var populate = router.get(url)
            .then(function (response) {
                response.data.forEach(function (res) {
                    var character = {
                        image: '/img/characters/' + res.image,
                        group: res.group,
                        world: res.world,
                        information: res.information,
                        decision: res.decision,
                        structure: res.structure
                    }
                    set.push(character);
                })
            });


        return {
            display: function (cb) {
                console.log(cb);
                cb(set);
            }
        }
    };
})()