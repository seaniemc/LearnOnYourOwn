todoApp.controller('LecturerCtrl', ['coursesFac','lecturerFac','$scope', function LecturerCtrl(coursesFac, lecturerFac, $scope){

    $scope.status;
    $scope.courses = null;

     
        lecturerFac.getLecturer()
            .then(function (response) {
                 $scope.courses = response.data;
                 console.log($scope.courses);
            }, function (error) {
                $scope.status = 'Unable to load customer data: ' + error.message;
            });
    
    
    // Courses.get()
    // .success(function(data) {
    //     $scope.courses = data;
    //     console.log(data);
    // });

}]);