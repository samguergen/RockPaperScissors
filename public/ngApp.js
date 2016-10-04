angular
    .module('myApp', [])
    .controller('MainCtrl', ['$scope', '$location', '$window', function($scope, $location, $window){

      $scope.playGame = function(userChoice){

        var postParam = { 'choice': userChoice };
        var promise = $http.post('/match', postParam);

        promise.then( function(response) {
          $scope.data = response.data;
        });

        if userChoice == choice.rock
      }
    }]);