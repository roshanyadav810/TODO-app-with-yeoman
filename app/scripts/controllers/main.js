'use strict';

/**
 * @ngdoc function
 * @name firstAppWithYeomanApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the firstAppWithYeomanApp
 */
angular.module('firstAppWithYeomanApp')
  .controller('MainCtrl', function ($scope) {
    $scope.todos = ['item1' , 'item2' , 'item3'];
    $scope.addTodo = function(){
    	$scope.todos.push($scope.todo);
    	$scope.todo = '';	
    };
    $scope.removeTodo = function(index){
    	$scope.todos.splice(index , 1);
    };
    
  });
