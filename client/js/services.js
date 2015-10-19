// *** HTTP *** //


app.factory('httpFactory', ['$http', function ($http) {
    var obj = {};
    //1. get request
    obj.get = function (url) {
        return $http.get(url);
    };
    //2. post request
    obj.post = function (url, payload) {
        return $http.post(url, payload);
    };
    return obj;
}]);


// *** Slides *** //

//function getData($timeout, $q) {
//    return function () {
//        return $q(function (resolve, reject) {
//            // simulated async function
//            $timeout(function () {
//                resolve(Math.floor(Math.random() * 10))
//            }, 2000)
//        })
//    }
//}
app.factory('slides', function (httpFactory, $q) {
    var getExperiences = httpFactory.get('data/experiences');
    var parseExperiences = function (response) {
        console.log(response)
        var slides = [];
        for (var i = 0; i < response.data.length; i++) {
            name = response.data[i].name;
            edds = response.data[i].edds;

            description = response.data[i].description;
            //            getImage('data/image/' + response.data[i]._id, i);
            slides.push({
                name: name,
                edds: edds,
                description: description,
                id: response.data[i]._id
            })
        }
        console.log(slides)
        return slides;
    }
    var getImage = function (imageUrl) {
        console.log(imageUrl)
        httpFactory.get(imageUrl)
            .then(function (response) {
                console.log(response.data);
                return response
            })

    };
    return {
        getExperiences: getExperiences,
        parseExperiences: parseExperiences,
        getImage: getImage
    }
})

app.factory('gatherHolder', function (httpFactory, $q) {
    var experiences = [];
    var characters = [];
    var roles = [];
    return {
        experiences: experiences,
        characters: characters,
        roles: roles
    }
});


//                    var createSlides = function () {
//                        var slide = {
//                            image: images[index],
//                            name: names[index],
//                            edds: edds[index],
//                            description: descriptions[index],
//                            id: ids[index]
//                        }
//                        slides.push(slide);
//                        index++;
//                    }
//                    addSlide();