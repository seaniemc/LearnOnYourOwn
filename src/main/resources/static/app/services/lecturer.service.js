todoApp.factory('lecturerFac', ['$http', function($http) {

	var urlBase = '/api/lecturer';
	var lecturerFac = {};
	
	// lecturerFac.getLecturer = function () {
	// 	return $http.get(urlBase);
	// };

	// lecturerFac.getLecturerById = function (id) {
	// 	return $http.get(urlBase + '/' + id);
	// };

    lecturerFac.getLecturerByName = function (name) {
		return $http.get(urlBase + '/' + name);
	};

	return lecturerFac;
}]);