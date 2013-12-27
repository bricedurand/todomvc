Todos = new Meteor.Collection("todos");


if (Meteor.isClient) {
    var ENTER_KEY = 13;

    // Session var to keep todo which is currently in editing mode, if any
    Session.set('editing_todo', null);

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

    
    // Returns an event map that handles the "escape" and "return" keys and
    // "blur" events on a text input (given by selector) and interprets them
    // as "ok" or "cancel".
    var okCancelEvents = function (selector, callbacks) {
      var ok = callbacks.ok || function () {};
      var cancel = callbacks.cancel || function () {};

      var events = {};
      events['keyup '+selector+', keydown '+selector+', blur '+selector] = function (evt) {
        if (evt.type === "keydown" && evt.which === 27) {
            // escape = cancel
            cancel.call(this, evt);

        } else if (evt.type === "keyup" && evt.which === 13 || evt.type === "blur") {
            // blur/return/enter = ok/submit if non-empty
            var value = String(evt.target.value || "");
            if (value)
                ok.call(this, value, evt);
            else
                cancel.call(this, evt);
        }
    };

    return events;
    };
    

    Template.todo.events( okCancelEvents('li.editing input.edit', {
        ok: function (value) {
            Todos.update(this._id, {$set: {title: $.trim(value) }});
            Session.set('editing_id', null);
        },
        cancel: function () {
            Session.set('editing_id', null);
        }
    }));

    Template.todo.todo_editing = function() {
        return this._id === Session.get('editing_id');
    }

    Template.todo.events({
        'change': function (event) {
            var should_be_completed = $(event.target).is(':checked');
            Todos.update({ _id: this._id }, { $set : { completed: should_be_completed } });
        },
        'dblclick label': function(event, tpl) {
            Session.set('editing_id', this._id);
            tpl.find('input.edit').focus();
        }
    });

    Template.footer.number_left_items = function() {
        return Todos.find({ completed: false }).count();
    };

    Template.footer.has_one_item_left = function() {
        return Todos.find({ completed: false }).count() == 1;
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
