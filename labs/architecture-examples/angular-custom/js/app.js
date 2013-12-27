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
}