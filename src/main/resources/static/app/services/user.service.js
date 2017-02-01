//angular.module('todoApp')
todoApp.factory('Users', ['$http', function($http) {
	return {
		get: function() {
			return $http.get('/api/users');
		},

		create: function(userData) {
			console.log(userData);
			return $http.get('/api/users', userData);
			debugger;
		},

		delete: function(id) {
			return $http.delete('/api/users/' + id);
		},

		update: function(userData) {
			console.log(userData);
			return $http.put('/api/users/' + userData.id, userData);
		}
	}
}]);
