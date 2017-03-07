todoApp.factory('Courses', ['$http', function($http) {
	return {
		get: function() {
			return $http.get('/api/courses');
		},
		getByName: function(name) {
			return $http.get('/api/courses/' + name);
		}
	}
}]);