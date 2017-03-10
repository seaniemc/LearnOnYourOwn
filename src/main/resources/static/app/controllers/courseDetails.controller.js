todoApp.controller('CoursesDetailsCtrl', ['coursesFac','lecturerFac','$scope','$stateParams', function CoursesCtrl(coursesFac, lecturerFac, $scope, $stateParams){
    
    $scope.lecturer;
    $scope.courses;
    $scope.status;

    $scope.id = $stateParams.id;
    console.log($stateParams.id);

    $scope.getCourse = function(id){
        coursesFac.getCourseById(id)
            .then(function (response) {
                $scope.courses = response.data;
                console.log($scope.courses);
            }, function (error) {
                $scope.status = 'Unable to load customer data: ' + error.message;
                console.log($scope.status);
            });
    };

   //$scope.getCourse($scope.id);
    //console.log($scope.getCourse($scope.id));

    $scope.getLecturer = function(name){
        lecturerFac.getLecturerByName(name)
            .then(function (response) {
                $scope.lecturer = response.data;
                console.log($scope.lecturer);
            }, function (error) {
                $scope.status = 'Unable to load customer data: ' + error.message;
                console.log($scope.status);
            });
    };
   

}]);