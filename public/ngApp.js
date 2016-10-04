angular.module('myApp', [])
    .controller('MainCtrl', ['$scope', '$location', '$window', '$http', function($scope, $location, $window, $http){
      console.log('inside mainctrl');
      $scope.userChoice = {choice: '-'};

      $scope.playGame = function(userSelection){
        console.log('inside playgame func');
        console.log('userSelection is ', userSelection, $scope.userChoice.choice);
        var postParam = { choice: "" };
        postParam.choice = $scope.userChoice.choice;
        console.log("post param is ", postParam);
        var config = {
              headers : {
                  'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
              }
          };
        var promise = $http.post('/match', postParam);

        promise.then( function(response) {
          $scope.data = response;

          console.log('response is ', response);
          console.log('playerChoice is ', response.playerChoice);



          $scope.results = true;
        });

      }

    }]);

    // playerChoice   : [your choice]
    // computerChoice : [rock|paper|scissors]
    // result         : [win|lose|tie]