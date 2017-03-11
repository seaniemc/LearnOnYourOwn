
var todoApp = angular.module('todoApp', [
    'ui.router',
    'jcs-autoValidate',
	'angular-ladda',
    'ngYoutubeEmbed'
]);

todoApp.config(function ($stateProvider, $urlRouterProvider, $httpProvider) {
    var homeState = {
        name: 'home',
        url: '/',
        templateUrl: 'app/views/home.html',
        controller: 'CoursesCtrl'
    };

    var loginState = {
        name: 'login',
        url: '/login',
        templateUrl: 'app/views/login.html',
        controller: 'navigation'
    };
    var todoState = {
        name: 'todo',
        url: '/todo',
        templateUrl: 'app/views/todo.html',
        controller: 'TodoController'
    };
     var registerState = {
        name: 'register',
        url: '/register',
        templateUrl: 'app/views/register.html',
        controller: 'UserController'
    };

     var lecturerState = {
        name: 'lecturer',
        url: '/lecturer',
        templateUrl: 'app/views/lecturer.html',
        controller: 'LecturerCtrl'
    };

    var courseState = {
        name: 'course',
        url: '/course/:id',
        // params: { 
        //     // here we define default value for foo
        //     // we also set squash to false, to force injecting
        //     // even the default value into url
        //     id: {
        //       value: 'id',
        //       squash: false,
        //     },
        //     // this parameter is now array
        //     // we can pass more items, and expect them as []
        //     name : { 
        //       array : true,
        //     },
        //     // this param is not part of url
        //     // it could be passed with $state.go or ui-sref 
        //     hiddenParam: 'YES',
        //   },
        templateUrl: 'app/views/course.html',
        controller: 'CoursesDetailsCtrl'
    };


    $stateProvider
        .state(homeState)
        .state(todoState)
        .state(registerState)
        .state(lecturerState)
        .state(courseState)
         .state(loginState);


    $urlRouterProvider.otherwise('/');
    
    //$httpProvider.defaults.withCredentials = true;
    //$httpProvider.interceptors.push('XSRFInterceptor');
    
//    $httpProvider.defaults.xsrfCookieName = 'csrftoken';
//    $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
   $httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';
});

todoApp.run(['$rootScope', '$state', '$stateParams',
  function ($rootScope, $state, $stateParams) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
}]);