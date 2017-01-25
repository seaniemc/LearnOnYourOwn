var todoApp = angular.module('todoApp', [
    'ngRoute'
]);

todoApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
    .when('/#', 
    		{
    	  templateUrl: '/views/todo.html',
	      controller: 'TodoController'
    		})
    }]);

