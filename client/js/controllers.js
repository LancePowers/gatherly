app.controller('landingPageController', function ($scope) {
    $scope.welcome = "Hi, thanks for swinging by!";
    $scope.about = "about gatherly";
    $scope.buttonText = "Get Started";
});

app.controller('profileController', function ($scope) {
    $scope.name = "Patrick";
//    $scope.email = "pdiddy@gmizzy.com";
    $scope.phone = "719-238-1373";
    $scope.answers = [{
            question: 'If you were to meet a martian at a bar, the first 5 words out of your mouth would be...',
            answer: 'Holy Fuck! You are a'
                                    },
        {
            question: 'What would you name your pet robot?',
            answer: 'PupBot'
                                    }
                                             ];
    $scope.image = "https://avatars0.githubusercontent.com/u/11655723?v=3&s=460";
});