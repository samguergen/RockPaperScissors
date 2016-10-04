angular.module('myApp', [])
    .controller('MainCtrl', ['$scope','$http', function($scope, $http){
      //init user choice and score vars
      $scope.userChoice = {choice: ''};
      $scope.userScore = 0;

      //API call is triggered on click
      $scope.playGame = function(){
        var postParam = { choice: "" };
        postParam.choice = $scope.userChoice.choice; // user choice is updated
        var promise = $http.post('/match', postParam); //post call send to backend

        promise.then( function(response) {
          $scope.data = response.data;
          //increment/decrement user score and displays on DOM.
          if ($scope.data.result === 'win'){ $scope.userScore += 1 }
          else if ($scope.data.result === 'lose'){ $scope.userScore += 1 }
          $scope.results = true; //display div on DOM with all results

        }, function(error) { // catches error in case result can't be retrieved
          alert("A response could not be retrieved from the server. Try again.", error);
        })
      }

    }]);