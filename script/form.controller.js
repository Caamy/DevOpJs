'use strict';

angular.module('BookApp').controller('FormCtrl', function($scope){

    $scope.book = {};

    $scope.submitBook = function(){
        console.log($scope.book);

    }

});