function TodoCtrl($scope) {
  var todos = $scope.todos = [
    {title: 'Create a TodoMVC template', completed: true},
    {title: 'Rule the web', completed: false}];
 
  $scope.addTodo = function() {
    if ($scope.todoText.length == 0)
      return;

    todos.push({ title: $scope.todoText.trim(), completed: false });
    $scope.todoText = "";
  }

  $scope.markAll = function(checked) {
    todos.forEach(function(todo) {
      todo.completed = checked;
    });
  }

  $scope.editTodo = function(todo) {
    $scope.editedTodo = todo;
  }

  $scope.doneEditing = function(todo) {
    todo.title = todo.title.trim();
    $scope.editedTodo = null; 

    if (!todo.title)
      $scope.removeTodo(todo); 
  }

  // $scope.remainingTodos = function() {
  //   var remainingTodoList = $scope.todos.filter(function(todo) {
  //     return todo.completed == false;
  //   });

  //   return remainingTodoList.length; 
  // }

  $scope.$watch('todos', function(newValue, oldValue) {
    var remainingTodoList = $scope.todos.filter(function(todo) {
      return todo.completed == false;
    });
   
    $scope.remainingTodos = remainingTodoList.length;
  });
}