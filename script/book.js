'use strict';

angular.module('BookApp').factory('Book', function($resource){
   return $resource('json/book-.json');
});