app.controller('experienceFormController', function ($scope, httpFactory, $location) {
    // Post Experiences
    $scope.postExperience = function () {
        var payload = {
            name: $scope.name,
            edds: $scope.edds,
            description: $scope.description,
            images: [$scope.image]
        };
        //        console.log(payload);
        httpFactory.post('data/experience', payload)
            .then(function (response) {
                $location.path('/experience/' + response.data[0]._id);

            });
    };
});


app.controller('experienceController', function ($scope, httpFactory, $location, $routeParams) {
    console.log('here')
    $scope.id = $routeParams.id;
    var experienceUrl = "data/experience/" + $scope.id;
    //1. Get Experience Function, using route
    $scope.getExperience = function () {
        httpFactory.get(experienceUrl)
            .then(function (response) {
                $scope.name = response.data.name;
                $scope.edds = response.data.edds;
                $scope.description = response.data.description;
            });
    };
    $scope.getExperience('data/experience');

    var imageUrl = "data/image/" + $scope.id;
    //1. Get Experience Function, using route
    $scope.getImage = function () {
        httpFactory.get(imageUrl)
            .then(function (response) {
                $scope.image = response.data[0].image;
            });
    };
    $scope.getImage('data/image');


});