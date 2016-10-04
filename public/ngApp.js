angular.module('myApp', [])
    .controller('MainCtrl', ['$scope', '$location', '$window', '$http', function($scope, $location, $window, $http){
      console.log('inside mainctrl');

      $scope.playGame = function(userChoice){
        console.log('inside playgame func');
        var postParam = { 'choice': userChoice };
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