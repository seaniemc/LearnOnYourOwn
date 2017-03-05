
todoApp.controller('CoursesCtrl', ['Courses','$scope', function CoursesCtrl(Courses, $scope, $stateParams){

//    var self = this;
    
    Courses.get()
    .success(function(data) {
        $scope.courses = data;
        console.log(data);
    });

    

    // var self = {
	// 	'getPerson': function (email) {
	// 		console.log(email);
	// 		for (var i = 0; i < self.persons.length; i++) {
	// 			var obj = self.persons[i];
	// 			if (obj.email == email) {
	// 				return obj;
	// 			}

	// 		}
	// 	}
}]);