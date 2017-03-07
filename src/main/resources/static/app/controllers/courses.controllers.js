
todoApp.controller('CoursesCtrl', ['Courses','$scope', function CoursesCtrl(Courses, $scope){
    
    // $scope.status;
    // $scope.courseName = $stateParams;
    //console.log($scope.courseName);

    $scope.courses = null;
    
    Courses.get()
    .success(function(data) {
        $scope.courses = data;
        console.log(data);
    });

    //Courses.getByName($scope.courseName)

   
        Courses.getByName($scope.courseName)
            .then(function (response) {
                $scope.courses = response.data;
            }, function (error) {
                $scope.status = 'Unable to load customer data: ' + error.message;
            });
//    $scope.loadCourse($scope.courses, $stateParams.name);

//    $scope.loadCourse = function(courses, name){
//         	console.log(name);
//        	for (var i = 0; i < courses.length; i++) {
// 				var obj = self.courses[i];
// 				if (obj.name == name) {
// 		 			return obj;
//                }
// 	 		}
           
//    };
	
		
		

		// 	}
		// }
}]);