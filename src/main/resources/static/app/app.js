var todoApp = angular.module('todoApp', [
    'ui.router'
]);
todoApp.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state('todo', {
        url: "/",
        templateUrl: 'app/views/todo.html',

    })
    $urlRouterProvider.otherwise('/');
});
