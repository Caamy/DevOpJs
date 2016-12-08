'use strict';

angular.module('BookApp').controller('ListCtrl', function($scope){

	var Book = $resource('json/book-:id.json');

	$scope.books = Book.query()

	$scope.delete = function(book){
		alert("Delete : " + book.id);
	}

    $scope.update = function(book){
        alert("Update : " + book.id);
    }
});

