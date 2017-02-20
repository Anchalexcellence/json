var app = angular.module("myApp", [])
app.controller("tableCtrl", function($scope, $timeout) {
    $scope.employees = [{
            "name": "anchal",
            "email": "anchal@gmail.com",
            "age": 22,
            "id": 1
        },
        {
            "name": "sourab",
            "email": "sourab@gmail.com",
            "age": 24,
            "id": 2
        },
        {
            "name": "vaibhav",
            "email": "anchal@gmail.com",
            "age": 23,
            "id": 3
        },
        {
            "name": "sazal",
            "email": "sazal@gmail.com",
            "age": 25,
            "id": 4
        },
        {
            "name": "varun",
            "email": "varun@gmail.com",
            "age": 26,
            "id": 5
        },
        {
            "name": "vikrant",
            "email": "vikrant@gmail.com",
            "age": 28,
            "id": 6
        },
        {
            "name": "devansh",
            "email": "devansh@gmail.com",
            "age": 18,
            "id": 7
        },
        {
            "name": "nitin",
            "email": "nitin@gmail.com",
            "age": 15,
            "id": 8
        }
    ]
    $scope.display = function() {

        $scope.isdataend = true;
        $timeout(function() {
            $scope.isdataend = false;
        }, 2000)
    };

    $scope.reverseSort = false;
    $scope.sortColumn = "id"
    $scope.sortData = function(column) {
        $scope.reverseSort = ($scope.sortColumn == column) ? !$scope.reverseSort : false;
        $scope.sortColumn = column;
    }
    $scope.sortClass = function(column) {
        if ($scope.sortColumn == column) {
            return $scope.reverseSort ? 'arrow-down' : 'arrow-up'
        }

    }

});