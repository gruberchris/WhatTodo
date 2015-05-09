'use strict';

/**
 * @ngdoc function
 * @name whatTodoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the whatTodoApp
 */
angular.module('whatTodoApp')
  .controller('MainCtrl', function ($scope, localStorageService) {
    var todosInStore = localStorageService.get('todos');

    $scope.todos = todosInStore || [];

    $scope.$watch('todos', function() {
      localStorageService.set('todos', $scope.todos);
    }, true);

    $scope.addTodo = function() {
      // Assign unique value to model id for ngRepeat "track by" to work. Allows for "todos" with same value
      var todo = { id: new Date().getUTCMilliseconds(), label: $scope.todo };

      $scope.todos.push(todo);

      $scope.todo = '';
    };

    $scope.removeTodo = function(index) {
      $scope.todos.splice(index, 1);
    };
  });
