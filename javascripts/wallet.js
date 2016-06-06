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
});