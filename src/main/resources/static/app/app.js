var todoApp = angular.module('todoApp', [
    'ui.router'
]);
todoApp.config(function ($stateProvider, $urlRouterProvider) {
    var homeState = {
        name: 'home',
        url: '/',
        templateUrl: 'app/views/todo.html'
    };

    var loginState = {
        name: 'login',
        url: '/login',
        templateUrl: 'app/views/login.html'
    };

    $stateProvider
        .state(homeState)
         .state(loginState);

    // $stateProvider
    // .state('home', {
    //     url: "/",
    //     templateUrl: 'app/views/todo.html',

    // })
    $urlRouterProvider.otherwise('/');
});