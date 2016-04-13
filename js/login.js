var app = angular.module('login', []);
app.controller('loginCtrl', function ($scope) {
    $scope.isUserExist = true;
    $scope.wrongPassword = false;
    $scope.login = function (event) {
        $scope.isUserExist = false;
        $scope.wrongPassword = false;
        var data = JSON.parse(localStorage.getItem('database')) || {};
        for (var property in data) {
            if (data.hasOwnProperty(property)) {
                if ($scope.UserName == property) {
                    $scope.isUserExist = true;
                    if ($scope.Password != data[property].password) {
                        $scope.wrongPassword = true;
                    }
                }
            }
        };
        if ($scope.isUserExist == false || $scope.wrongPassword == true) {
            event.preventDefault();
        } else {
            sessionStorage.setItem('UserName', $scope.UserName);
        }

    };
});