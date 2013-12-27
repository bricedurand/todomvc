Todos = new Meteor.Collection("todos");


if (Meteor.isClient) {
    var ENTER_KEY = 13;

    Meteor.subscribe("todos");

    Template.todoapp.todoCount = function() {
        return Todos.find().count();
    };

    Template.main.todos = function() {
        return Todos.find();
    };

    Template.main.events({
        'change #toggle-all': function(event) {
            var should_be_completed = $(event.target).is(':checked');
            Todos.find({ completed: !should_be_completed }).forEach(function(todo) {
                Todos.update({ _id: todo._id }, { $set: { completed : should_be_completed } });
            });
        }
    });

    Template.todoapp.events({
        'keydown #new-todo': function (event) {
            var todoTitle = event.target.value.trim();
            if (event.keyCode == ENTER_KEY && todoTitle != "") {
                Todos.insert({title: event.target.value, completed: false});
                event.target.value = "";
            }
        }
    });

    Template.todo.todo_completed = function() {
        return this.completed;
    }
}

if (Meteor.isServer) {
    Meteor.startup(function () {
        // code to run on server at startup


    });

    Meteor.publish("todos", function () {
        return Todos.find();
    });
}
