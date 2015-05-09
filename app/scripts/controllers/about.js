'use strict';

/**
 * @ngdoc function
 * @name whatTodoApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the whatTodoApp
 */
angular.module('whatTodoApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
