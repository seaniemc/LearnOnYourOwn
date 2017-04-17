todoApp.factory('coursesFac', ['$http', function($http) {
	
	var urlBase = '/api/courses';
	var coursesFac = {};
	
	coursesFac.getCourses = function () {
		return $http.get(urlBase);
	};

	coursesFac.getCourseById = function (id) {
		return $http.get(urlBase + '/' + id);
	};

	coursesFac.insertCourse = function (course) {
        return $http.post(urlBase, course);
    };
	coursesFac.updateCourse = function (courseData) {
		console.log(courseData);
        return $http.put(urlBase + '/' + courseData.id, courseData)
    };
	
	coursesFac.deleteCourse = function (id) {
        return $http.delete(urlBase + '/' + id);
    };
	return coursesFac;
}]);