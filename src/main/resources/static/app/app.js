
var todoApp = angular.module('todoApp', [
    'ui.router',
    'jcs-autoValidate',
	'angular-ladda'
]);

todoApp.config(function ($stateProvider, $urlRouterProvider, $httpProvider) {
    var homeState = {
        name: 'home',
        url: '/',
        templateUrl: 'app/views/home.html',
        controller: 'TodoController'
    };

    var loginState = {
        name: 'login',
        url: '/login',
        templateUrl: 'app/views/login.html',
        controller: 'navigation'
    };
     var registerState = {
        name: 'register',
        url: '/register',
        templateUrl: 'app/views/register.html',
        controller: 'UserController'
    };

    $stateProvider
        .state(homeState)
        .state(registerState)
         .state(loginState);

    $urlRouterProvider.otherwise('/');
    
    //$httpProvider.defaults.withCredentials = true;
    //$httpProvider.interceptors.push('XSRFInterceptor');
    
//    $httpProvider.defaults.xsrfCookieName = 'csrftoken';
//    $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
   $httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';
});