
//create your application module.
var app = angular.module('myApp', []);

app.config(function($httpProvider) {
      //Enable cross domain calls
      $httpProvider.defaults.useXDomain = true;

      //Remove the header used to identify ajax call  that would prevent CORS from working
      delete $httpProvider.defaults.headers.common['X-Requested-With'];
  });

//add a controller to it
app.controller('MyCtrl', function($scope, $http) {

   //a scope function to load the data.
   $scope.loadData = function () {
      $http.get('http://172.16.51.61:4567/getData').success(function(data) {
         $scope.posts = data;
      });
   };

});
