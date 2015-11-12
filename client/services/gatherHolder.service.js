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
        holder.characters = [];
        holder.roles = [];
        holder.experiences = [];
        //holder.display = [];


        holder.setPosition = function (position) {
     holder.position = position;
 }
 holder.addCharacter = function (character) {
         holder.characters.push({
                position: holder.position,
                character: character
            });
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


        return holder;


    };

}())