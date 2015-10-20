app.controller('CharacterCtrl', function ($scope, $uibModal, $log, httpFactory, gatherHolder) {
    console.log('here')

    $scope.items = ['disney-character', 'action-hero'];

    $scope.animationsEnabled = true;

    $scope.isSelected = function (character) {
        for (var i = 0; i < gatherHolder.characters.length; i++) {
            if (character._id === gatherHolder.characters[i]._id) {
                return true;
            }
        }
        return false;
    }

    $scope.addCharacter = function (character) {
        if ($scope.isSelected(character)) {
            gatherHolder.characters.splice(gatherHolder.characters.indexOf(character), 1);
            console.log(gatherHolder.characters);
        } else {
            gatherHolder.characters.push(character);
            console.log(gatherHolder.characters);
        }
    }

    $scope.src = function () {
        for (var i = 0; i < $scope.characters.length; i++) {
            var image = $scope.characters[i].image
            $scope.characters[i].image = 'http://localhost:3000/img/characters/' + image;
            console.log($scope.characters[i].image)
        }
    }

    $scope.open = function (size) {

        var modalInstance = $uibModal.open({
            animation: $scope.animationsEnabled,
            templateUrl: 'character-modal.html',
            controller: 'CharacterModalCtrl',
            size: size,
            resolve: {
                items: function () {
                    return $scope.items;
                }
            }
        });

        modalInstance.result.then(function (selectedGroup) {
            $scope.selected = selectedGroup;
            $scope.getCharacters(selectedGroup);
        }, function () {
            $log.info('Modal dismissed at: ' + new Date());
        });
    };

    $scope.toggleAnimation = function () {
        $scope.animationsEnabled = !$scope.animationsEnabled;
    };
    $scope.open('lg');
    $scope.getCharacters = function (group) {
        console.log(group);
        var groupUrl = '/data/character/' + group;
        httpFactory.get(groupUrl)
            .then(function (response) {
                console.log(response)
                $scope.characters = response.data;
                $scope.src();
            })
    };



});

app.controller('CharacterModalCtrl', function ($scope, $modalInstance, items) {
    $scope.items = items;
    $scope.selected = {
        item: $scope.items[0]
    };

    $scope.ok = function () {
        $modalInstance.close($scope.selected.item);
    };

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
});