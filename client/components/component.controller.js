(function () {
    'use strict ';
    //retrieve components module
    angular.module('app.components')
        .controller('ComponentController', ComponentController)
    ComponentController.$inject = ['$window', '$scope']

    function ComponentController($window, $scope) {
        $scope.test = "Helailahdaoidna"
        $scope.mobile = ($window.innerWidth < 720);
        console.log($scope.mobile)
    };
})();