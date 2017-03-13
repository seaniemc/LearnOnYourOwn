todoApp.controller('CoursesDetailsCtrl', ['coursesFac','lecturerFac','$scope','$stateParams', function CoursesCtrl(coursesFac, lecturerFac, $scope,  $stateParams){
    
    $scope.lecturers;
    $scope.courses;
    $scope.status;

   // var name = $stateParams.lecturer;
    var id = $stateParams.id;

    console.log(id);
    //console.log(name);

    //getCourse() method calls the coursesFac factory/service which calls the api endpoint and returns 
    //the course information based on the course id.
    $scope.getCourse = function(id){
        coursesFac.getCourseById(id)
            .then(function (response) {
                $scope.courses = response.data;
                console.log($scope.courses);
                //console.log($scope.courses.video);
            }, function (error) {
                $scope.status = 'Unable to load course data: ' + error.message;
                console.log($scope.status);
            });
    };

    //passes the state paramater in to the method. The paramater is the course Id 
    $scope.getCourse(id);
  

    $scope.getLecturer = function(){
        lecturerFac.getLecturer()
            .then(function (response) {
                $scope.lecturers = response.data;
                console.log($scope.lecturers);
            }, function (error) {
                $scope.status = 'Unable to load lecturer data: ' + error.message;
                console.log($scope.status);
            });
    };
   $scope.getLecturer();

   var lecturers =  $scope.getLecturer();
   //console.log(lecturers);
   $scope.myFilter = function (name, lecturers) { 
        console.log(name);
        for (var i = 0; i <= lecturers.length; i++) {
            var obj = self.persons[i];
            if (obj.name == name) {
                return obj;
                console.log(obj);
            }
        }
    };

			


// $state,   $scope.state = $state.current
// '$state',    $scope.params = $stateParams; 
}]);