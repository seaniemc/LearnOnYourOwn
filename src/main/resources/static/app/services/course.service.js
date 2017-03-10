todoApp.factory('coursesFac', ['$http', function($http) {
	var urlBase = '/api/courses';
	var coursesFac = {};
	
	coursesFac.getCourses = function () {
		return $http.get(urlBase);
	};

	coursesFac.getCourseById = function (id) {
		return $http.get(urlBase + '/' + id);
	};

	return coursesFac;
}]);