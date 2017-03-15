
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
        url: '/course/:id?name',
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

todoApp.filter("GetYouTubeID", function () {
    return function (text) {
        var video_id = text.split('v=')[1].split('&')[0];
        //console.log(video_id );
        return video_id;
        }
    });

// todoApp.run(['$rootScope', '$state', '$stateParams',
//   function ($rootScope, $state, $stateParams) {
//     $rootScope.$state = $state;
//     $rootScope.$stateParams = $stateParams;
// }]);
