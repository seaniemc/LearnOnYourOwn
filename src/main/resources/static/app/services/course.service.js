todoApp.factory('coursesFac', ['$http', function($http) {
	// return {
	// 	get: function() {
	// 		
	// 	},
	// 	getById: function(id) {
	// 		return $http.get('/api/courses/' + id);
	// 	}
	// }
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