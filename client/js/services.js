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