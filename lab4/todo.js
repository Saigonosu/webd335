var app = angular.module('Todo', []);

app.service('TodoHolder', function(){
  this.todos = new Array;

  this.todos.push({
    'id': 'lol',
    'todo': 'todo',
    'description': 'description',
    'date': 'today',
    'user': 'lol'
  })

  this.addTodo = function(todo){
    this.todos.push(todo);
  }

  this.getTodos = function(){
    return this.todos;
  }

  this.getTodo = function(id){
    var findTodo = function(element){
      if(element.id === id){
        return element;
      }
    }

    this.todos.find(findTodo);
  }

  this.deleteTodo = function(id){
    function findTodo(element){
      return element.id === id;
    }
    var index = this.todos.findIndex(findTodo);
    this.todos.splice(index, 1);
  }
})
app.controller('TodoCtrl', function($scope, TodoHolder) {
  var todos = TodoHolder;
  var todoCtrl = this;

  todoCtrl.selected = {};
  todoCtrl.todos = todos.getTodos();
  todoCtrl.edit = false;

  function getDate(){
    if(todoCtrl.check){
      return new Date
    }else {
      return undefined
    }
  }

  function ID(){
    return '_' + Math.random().toString(36).substr(2,9);
  }

  function resetTodo(){
    todoCtrl.id = undefined;
    todoCtrl.todo = undefined;
    todoCtrl.description = undefined;
    todoCtrl.date = undefined;
    todoCtrl.user = undefined;
    todoCtrl.check = undefined;
  }

  todoCtrl.resetSelected = function(){
    todoCtrl.selected = {};
    todoCtrl.edit = false;
  }

  todoCtrl.editTodo = function(todo){
    todoCtrl.selected = angular.copy(todo);
    todoCtrl.edit = true;
  }

  todoCtrl.saveTodo = function(id){
    function findTodo(element){
      return element.id === id;
    }
    var index = todos.getTodos().findIndex(findTodo);
    todos.todos[index] = angular.copy(todoCtrl.selected)
    todoCtrl.edit = false;
  }

  todoCtrl.deleteTodo = function(todo){
    todos.deleteTodo(todo.id);
  }

  todoCtrl.addTodo = function(){
    todos.addTodo({
      'id':ID(),
      'todo':todoCtrl.todo,
      'description':todoCtrl.description,
      'date':getDate(),
      'user':todoCtrl.user
    })
    resetTodo();
  }
})
