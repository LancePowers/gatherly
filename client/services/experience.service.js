(function () {
    'use strict'
    angular
        .module('app')
        .factory('experiences', experiences);

    experiences.$inject = ['router'];

    function experiences(router) {
        var self = this;
        var experiences = [];
        //1. Get Experience Function, using route

        var populate = router.get("data/experiences")
            .then(function (response) {
                response.data.forEach(function (res) {
                    var experience = {
                        id: res._id,
                        name: res.name,
                        edds: res.edds,
                        description: res.description
                    }
                    experiences.push(experience);
                    getImage(experience);
                })

            });



        //1. Get Experience Function, using route
        var getImage = function (experience) {
            var imageUrl = "data/image/" + experience.id;
            router.get(imageUrl)
                .then(function (response) {
                    experience.image = response.data[0].image;

                });
        };


        return {
            experiences: experiences

        }
    };

})()