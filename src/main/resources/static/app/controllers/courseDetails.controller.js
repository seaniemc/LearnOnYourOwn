todoApp.controller('CoursesDetailsCtrl', ['coursesFac','lecturerFac','$scope','$sce','$stateParams', function CoursesCtrl(coursesFac, lecturerFac, $scope, $sce, $stateParams){
    
    $scope.lecturers;
    $scope.courses;
    $scope.status;

   //var name = $stateParams.lecturer;
    var id = $stateParams.id;

    console.log(id);
    //console.log(name);

    //getCourse() method calls the coursesFac factory/service which calls the api endpoint and returns 
    //the course information based on the course id.
    $scope.getCourse = function(id){
        coursesFac.getCourseById(id)
            .then(function (response) {
                // var items;
                response.data.video = JSON.parse(response.data.video);
                 console.log(response.data.video);
                $scope.courses = response.data;
               // console.log(items);
                // console.log($scope.courses.video);
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
                var courses;
                //response.data.courses = JSON.parse(response.data.courses);
               // courses =  response.data.courses;
                 console.log(courses);
                $scope.lecturers = response.data;
            }, function (error) {
                $scope.status = 'Unable to load lecturer data: ' + error.message;
                console.log($scope.status);
            });
    };
   $scope.getLecturer();

       
}]);
