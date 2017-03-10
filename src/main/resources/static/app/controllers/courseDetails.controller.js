todoApp.controller('CoursesDetailsCtrl', ['coursesFac','lecturerFac','$scope','$stateParams', function CoursesCtrl(coursesFac, lecturerFac, $scope, $stateParams){
    
    $scope.lecturer;
    $scope.courses;
    $scope.status;

    $scope.id = $stateParams.id;
    console.log($stateParams.id);

    //getCourse() method calls the coursesFac factory/service which calls the api endpoint and returns 
    //the course information based on the course id.
    $scope.getCourse = function(id){
        coursesFac.getCourseById(id)
            .then(function (response) {
                $scope.courses = response.data;
                console.log($scope.courses);
            }, function (error) {
                $scope.status = 'Unable to load course data: ' + error.message;
                console.log($scope.status);
            });
    };

    //passes the state paramater in to the method. The paramater is the course Id 
    $scope.getCourse($scope.id);
  

    $scope.getLecturer = function(name){
        lecturerFac.getLecturerByName(name)
            .then(function (response) {
                $scope.lecturer = response.data;
                console.log($scope.lecturer);
            }, function (error) {
                $scope.status = 'Unable to load lecturer data: ' + error.message;
                console.log($scope.status);
            });
    };
   

}]);