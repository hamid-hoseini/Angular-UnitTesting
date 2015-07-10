/**
 * Created by Hamid on 7/9/2015.
 */
var app= angular.module('pieApp',[]);
app.controller('pieController',['$scope', function($scope){
    $scope.eatSlice = function () {
        if ($scope.slice){
            $scope.slice--;

        }
    };
    $scope.slice = 8;
}]);