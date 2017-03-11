
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
    
    $scope.go = function(){
        $state.go('course', { id: 'courses', param2: 'baz'});
    }
    // Courses.get()
    // .success(function(data) {
    //     $scope.courses = data;
    //     console.log(data);
    // });

}]);