define(function(require){
    var mod = require("service/serviceModule.min"),
        serviceName = "wpService";

    service.$inject = ['$http', '$q'];
    mod.factory(serviceName, service);

    return serviceName;

    function service($http, $q){
        return{
            getPost: retrievePost,
            getAllAuthors: retrieveAllAuthors,
            getAuthor: retrieveAuthor,
            getMedia: retrieveMedia
        };

        function retrieveMedia(id){
            var deferred = $q.defer();
            $http.get('http://poing.ca/wp/wp-json/wp/v2/media/' + id)
                .then(function(res){
                    deferred.resolve(res.data);
                });
            return deferred.promise;
        }

        function retrievePost(month, year){
            var deferred = $q.defer();
            $http.get('http://poing.ca/wp/wp-json/wp/v2/posts?filter[monthnum]=' + month + "&filter[yearnum]=" + year)
                .then(function(res){
                    deferred.resolve(res.data);
                });
            return deferred.promise;
        }

        function retrieveAllAuthors(){
            var deferred = $q.defer();
            $http.get('http://poing.ca/wp/wp-json/wp/v2/users')
                .then(function(res){
                    deferred.resolve(res.data);
                });
            return deferred.promise;
        }

        function retrieveAuthor(id){
            var deferred = $q.defer();
            $http.get('http://poing.ca/wp/wp-json/wp/v2/users/' + id)
                .then(function(res){
                    deferred.resolve(res.data);
                });
            return deferred.promise;
        }
    }
});