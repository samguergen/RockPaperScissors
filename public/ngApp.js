angular.module('myApp', [])
    .controller('MainCtrl', ['$scope','$http', function($scope, $http){
      $scope.userChoice = {choice: ''};

      $scope.playGame = function(){
        var postParam = { choice: "" };
        postParam.choice = $scope.userChoice.choice;
        var promise = $http.post('/match', postParam);

        promise.then( function(response) {
          $scope.data = response.data;
          $scope.results = true;
        }, function(error) {
          alert("A response could not be retrieved from the server. Try again.", error);
        })
      }

    }]);