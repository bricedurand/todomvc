function TodoCtrl($scope) {
  $scope.todos = [
    {title: 'Create a TodoMVC template', completed: true},
    {title: 'Rule the web', completed: false}];
 
  $scope.addTodo = function() {
    if ($scope.todoText.length == 0)
      return;

    $scope.todos.push({ title: $scope.todoText.trim(), completed: false });
    $scope.todoText = "";
  }

  $scope.markAll = function(checked) {
    $scope.todos.forEach(function(todo) {
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
}