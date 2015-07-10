/**
 * Created by Hamid on 7/9/2015.
 */
describe('pieController', function () {
   var $rootScope,
       $scope,
       $controller,
       controller;

    beforeEach(function(){
        module('pieApp');
        inject(function(_$controller_){
            // The injector unwraps the underscores (_) from around the parameter names when matching
            $scope ={};
            $controller = _$controller_;
            controller = $controller('pieController',{$scope: $scope});
        });
    });
    it('should decrement of slices', function () {
        expect($scope.slice).toEqual(8);
        $scope.eatSlice();
        expect($scope.slice).toEqual(7);
    });
    it('should do nothing of slices', function () {
        $scope.slice= 0;
        $scope.eatSlice();
        expect($scope.slice).toEqual(0);
    });

    it("scope initialization ", function () {
       expect($scope.slice).toEqual(8);
    });


});