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

    Template.todoapp.events({
        'keydown #new-todo': function (event) {
            var todoTitle = event.target.value.trim();
            if (event.keyCode == ENTER_KEY && todoTitle != "") {
                Todos.insert({title: event.target.value, completed: false});
                event.target.value = "";
            }
        }
    });
}

if (Meteor.isServer) {
    Meteor.startup(function () {
        // code to run on server at startup


    });

    Meteor.publish("todos", function () {
        return Todos.find();
    });
}
