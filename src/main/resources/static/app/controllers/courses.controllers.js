
todoApp.controller('CoursesCtrl', ['coursesFac','$scope', function CoursesCtrl(coursesFac, $scope){
    $scope.status;
    $scope.courses = null;

     
        coursesFac.getCourses()
            .then(function (response) {
                 $scope.courses = response.data;
                 console.log($scope.courses);
            }, function (error) {
                $scope.status = 'Unable to load customer data: ' + error.message;
            });

}]);