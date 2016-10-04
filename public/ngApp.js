angular.module('myApp', [])
    .controller('MainCtrl', ['$scope', '$location', '$window', '$http', function($scope, $location, $window, $http){
      console.log('inside mainctrl');
      $scope.userChoice = {choice: ''};

      $scope.playGame = function(userSelection){
        console.log('userSelection is ', userSelection, $scope.userChoice.choice);
        var postParam = { choice: "" };
        postParam.choice = $scope.userChoice.choice;
        console.log("post param is ", postParam);
        var promise = $http.post('/match', postParam);

        promise.then( function(response) {
          $scope.data = response.data;
          console.log('playerChoice is ', response.data.playerChoice);

          $scope.results = true;
        });

      }

    }]);

    // playerChoice   : [your choice]
    // computerChoice : [rock|paper|scissors]
    // result         : [win|lose|tie]