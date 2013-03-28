Todos = new Meteor.Collection("todos");


if (Meteor.isClient) {
    Meteor.subscribe("todos");

    Template.todoapp.todoCount = function() {
        return Todos.find().count();
    };

    Template.main.todos = function() {
        return Todos.find();
    };
}

if (Meteor.isServer) {
    Meteor.startup(function () {
        // code to run on server at startup


    });

    Meteor.publish("todos", function () {
        return Todos.find();
    });
}
