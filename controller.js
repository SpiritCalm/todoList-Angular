(function() {

    'use strict';
    angular
        .module("todoapp")
        .controller("todoController", todoController);

    function todoController($scope) {
        var todo = this;
        todo.totalTodos = 4;

        todo.items = [{ text: 'Make todo list', done: false }, { text: 'Do Homework', done: false }];

        $scope.addTodo = function() {
            todo.items.push({ text: $scope.fromTodoText, done: false });
            todo.fromTodoText = "";
        };
    }

}());
