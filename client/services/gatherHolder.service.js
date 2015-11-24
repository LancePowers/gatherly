// hold gather information

(function () {

    'use strict';

    angular
        .module('app')
        .factory('gatherHolder', gatherHolder);

    gatherHolder.$inject = []

    function gatherHolder() {

        var holder = {};
        holder.position = '';


        // declare arrays to hold characters, roles, and experiences
        holder.characters = [];
        holder.roles = [];
        holder.experiences = [];

        // bad fix for startup weekend. Refactor
        // center button for creating a gatherly
        holder.create = {
            character: {
                image: 'img/gatherlyLogo.png'
            }
        };
        holder.login = {
            text: 'Login',
            image: ''
        };




        // functions to manipulate characters, roles, and experiences

        holder.setPosition = function (position) {
            holder.position = position;
        }
        holder.addCharacter = function (character) {
            holder.characters.push({
                position: holder.position,
                character: character
            });
            console.log(holder.characters)
        }

        holder.addRole = function (role) {
            holder.roles.push(role);
        }

        holder.addExperience = function (experience) {
            holder.experiences.push(experience);
        }

        holder.removeCharacter = function (character) {
            var position = holder.characters.indexOf(character.character);
            holder.characters.splice(position, 1);
        }

        holder.removeRole = function (role) {
            var position = holder.roles.indexOf(role);
            holder.roles.splice(position, 1);
        }

        holder.removeExperience = function (experience) {
            var position = holder.experiences.indexOf(experience);
            holder.experiences.splice(position, 1);
        }

        // Combines above arrays for use in the gather view ng-repeat
        // Default to roles followed by character selection

        holder.getDisplay = function () {
            var menu = [{
                text: 'Experiences',
                image: 'img/gatherlyLogo.png'
            }, {
                text: 'Roles',
                image: 'img/gatherlyLogo.png'
            }, {
                text: 'Characters',
                image: 'img/gatherlyLogo.png'
            }, {
                text: 'Gather!',
                image: 'img/gatherlyLogo.png'
            }]
            return menu;
        }

        return holder;


    };

}())