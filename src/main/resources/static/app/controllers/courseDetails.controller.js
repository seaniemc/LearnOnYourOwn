todoApp.controller('CoursesDetailsCtrl', ['Courses','$scope','$stateParams', function CoursesCtrl(Courses, $scope, $stateParams){
    
    $scope.status;
    $scope.courseName = $stateParams;
    //console.log($scope.courseName);

    
   
    Courses.getByName($scope.courseName)
        .then(function (response) {
            $scope.courses = response.data;
        }, function (error) {
            $scope.status = 'Unable to load customer data: ' + error.message;
        });

}]);