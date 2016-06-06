var app = angular.module('wallet', []);

app.controller('WalletCtrl', function($scope) {
    $scope.cards = [
        {
            number: '1234 5678 9012 3456',
            active: true
        },
        {
            number: '6543 2109 8765 4321',
            active: false
        }
    ];

    $scope.addCard = function() {
        $scope.cards.push({
            number: $scope.number,
            active: true
        });

        $scope.number = '';
    };

    $scope.changeStatus = function(number) {
        var card = $scope.find(number);

        card.active = !card.active;
    };

    $scope.find = function(number) {
        return $scope.cards.filter(function(card) {
            return card.number == number;
        })[0];
    };
});