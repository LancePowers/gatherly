app.controller('experienceFormController', function ($scope, httpFactory, $location) {
    // Post Experiences
    $scope.postExperience = function () {
        console.log('hi');
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

    $scope.id = $routeParams.id;
    var experienceUrl = "data/experience/" + $scope.id;
    //1. Get Experience Function, using route
    $scope.getExperience = function () {
        httpFactory.get(experienceUrl)
            .then(function (response) {
                $scope.name = response.data.name;
                $scope.edds = response.data.edds;
                $scope.description = response.data.description;
            })
    };
    $scope.getExperience('data/experience');

    var imageUrl = "data/image/" + $scope.id
        //1. Get Experience Function, using route
    $scope.getImage = function () {
        httpFactory.get(imageUrl)
            .then(function (response) {
                $scope.image = response.data[0].image;
            });
    };
    $scope.getImage('data/image');
});


app.controller('gatherFormController', function ($scope, httpFactory, $location) {
    $scope.prompt = '#1'
    $scope.myInterval = 5000;
    $scope.noWrapSlides = false;
    $scope.names = [];
    $scope.edds = [];
    $scope.images = [];
    $scope.ids = [];
    $scope.slides = [];
    $scope.debug = function () {
        debugger
    };
    $scope.index = 0;

    $scope.experiences = [];
    $scope.addExperience = function () {
        console.log($scope.getActiveSlide().id)
        $scope.experiences.push($scope.getActiveSlide());
    }
    $scope.getActiveSlide = function () {
        return $scope.slides.filter(function (s) {
            return s.active;
        })[0];
    };
    $scope.getImage = function (imageUrl) {
        httpFactory.get(imageUrl)
            .then(function (response) {
                if (response.data[0].image.length > 10) {
                    $scope.images.push(response.data[0].image);
                    $scope.createSlides();
                }
                console.log($scope.slides)
            })
    };

    $scope.addSlide = function () {
        httpFactory.get('data/experiences')
            .then(function (response) {
                for (var i = 0; i < response.data.length; i++) {
                    $scope.names.push(response.data[i].name);
                    $scope.edds.push(response.data[i].edds);
                    $scope.ids.push(response.data[i]._id);
                    $scope.getImage('data/image/' + response.data[i]._id)
                }
            })
    };
    $scope.createSlides = function () {
        var slide = {
            image: $scope.images[$scope.index],
            name: $scope.names[$scope.index],
            edds: $scope.edds[$scope.index],
            id: $scope.ids[$scope.index],
        }
        $scope.slides.push(slide);
        $scope.index++;
    }
    $scope.addSlide();
});


app.controller('gatherController', function ($scope) {
    $scope.eImage1 = "that";
});

app.controller('landingController', function ($scope) {
    $scope.this = "that";
});

app.controller('rolesController', function ($scope) {
    $scope.this = "that";
});

app.controller('roleSelectController', function ($scope) {
    $scope.this = "that";
});


app.controller('loginController', ['$scope', '$location', 'AuthService',
  function ($scope, $location, AuthService) {

        console.log(AuthService.getUserStatus());

        $scope.login = function () {

            // initial values
            $scope.error = false;
            $scope.disabled = true;

            // call login from service
            AuthService.login($scope.loginForm.username, $scope.loginForm.password)
                // handle success
                .then(function (data) {
                    $location.path('/');
                    $scope.disabled = false;
                    $scope.loginForm = {};
                })
                // handle error
                .catch(function () {
                    $scope.error = true;
                    $scope.errorMessage = "Invalid username and/or password";
                    $scope.disabled = false;
                    $scope.loginForm = {};
                });

        };

}]);

app.controller('logoutController', ['$scope', '$location', 'AuthService',
  function ($scope, $location, AuthService) {

        $scope.logout = function () {

            console.log(AuthService.getUserStatus());

            // call logout from service
            AuthService.logout()
                .then(function () {
                    $location.path('/login');
                });

        };

}]);