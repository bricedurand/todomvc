/*global angular*/
/*jshint unused:false*/
'use strict';

/**
 * The main TodoMVC app module.
 *
 * @type {angular.Module}
 */
var todomvc = angular.module('todomvc', []).
    config(['$routeProvider',function($routeProvider) {
        $routeProvider.
            when('/:state', { templateUrl: 'index.html', controller: todomvc.TodoCtrl }).
            otherwise({redirectTo: '/'});
    }]);
