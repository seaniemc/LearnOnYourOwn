todoApp.controller('LecturerCtrl', ['coursesFac','lecturerFac','$scope', function LecturerCtrl(coursesFac, lecturerFac, $scope){

    $scope.status;
    $scope.lecturers = null;

     
        lecturerFac.getLecturer()
            .then(function (response) {
                 $scope.lecturers = response.data;
                 console.log($scope.lecturers);
            }, function (error) {
                $scope.status = 'Unable to load customer data: ' + error.message;
            });
    
    
    // Courses.get()
    // .success(function(data) {
    //     $scope.courses = data;
    //     console.log(data);
    // });

}]);