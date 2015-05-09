'use strict';

// Stop event bubbling directive

angular.module('whatTodoApp')
  .directive('stopEventBubbling', function() {
    return {
      restrict: 'A',
      link: function(scope, element) {
        element.bind('click', function(e) {
          e.stopPropagation();
        });
      }
    };
  });
