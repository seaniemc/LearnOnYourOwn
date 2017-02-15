(function () {
    'use strict';

angular.module('todoApp', [
    'ui.router',
    'auth0.lock', 
    'angular-jwt'
])
.config(config);

config.$inject = ['$stateProvider', 'lockProvider', '$urlRouterProvider'];

function config ($stateProvider, $urlRouterProvider, lockProvider) {

   $stateProvider
      .state('home',{
        url: '/',
        templateUrl: 'app/views/todo.html',
        controller: 'TodoController'
      })
       .state('login',{
        url: '/login',
        controller: 'LoginController',
        templateUrl: 'app/components/login/login.html',
        controllerAs: 'vm'
    });

    lockProvider.init({
      clientID: AUTH0_CLIENT_ID,
      domain: AUTH0_DOMAIN
    });
    $urlRouterProvider.otherwise('/');
}
})();