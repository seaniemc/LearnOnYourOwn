todoApp.factory('lecturerFac', ['$http', function($http) {
	var urlBase = '/api/lecturer';
	var coursesFac = {};
	
	coursesFac.getLecturer = function () {
		return $http.get(urlBase);
	};

	coursesFac.getLecturerById = function (id) {
		return $http.get(urlBase + '/' + id);
	};

    coursesFac.getLecturerByName = function (name) {
		return $http.get(urlBase + '/' + name);
	};

	return coursesFac;
}]);