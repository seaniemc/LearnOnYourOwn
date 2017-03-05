
todoApp.controller('CoursesCtrl', ['Courses','$scope', function CoursesCtrl(Courses, $scope, $stateParams){

    $scope.courses = null;
    
    Courses.get()
    .success(function(data) {
        $scope.courses = data;
        console.log(data);
    });

    $scope.loadCourse($scope.courses, $stateParams.name);

    $scope.loadCourse = function(courses, name){
         	console.log(name);
        	for (var i = 0; i < courses.length; i++) {
				var obj = self.courses[i];
				if (obj.name == name) {
		 			return obj;
                }
	 		}
            
    };
	
		
		

		// 	}
		// }
}]);