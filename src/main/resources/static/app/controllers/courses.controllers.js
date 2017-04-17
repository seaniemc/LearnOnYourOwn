
todoApp.controller('CoursesCtrl', ['coursesFac','$scope', function CoursesCtrl(coursesFac, $scope){
    $scope.status;
    $scope.courses = null;

     
         coursesFac.getCourses()
            .then(function (response) {
            		for (var i = response.data.length - 1; i >= 0; i--) {
            			response.data[i].video = JSON.parse(response.data[i].video);
            		}
                 $scope.courses = response.data;

            }, function (error) {
                $scope.status = 'Unable to load customer data: ' + error.message;
            });
}]);