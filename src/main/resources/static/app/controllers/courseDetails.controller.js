todoApp.controller('CoursesDetailsCtrl', ['coursesFac','lecturerFac','$scope','$sce','$stateParams', function CoursesCtrl(coursesFac, lecturerFac, $scope, $sce, $stateParams){
    
    $scope.lecturers;
    $scope.courses;
    $scope.status;

    var id = $stateParams.id;

    console.log(id);

    //getCourse() method calls the coursesFac factory/service which calls the api endpoint and returns 
    //the course information based on the course id.
    $scope.getCourse = function(id){
        coursesFac.getCourseById(id)
            .then(function (response) {
                // var items;
                response.data.video = JSON.parse(response.data.video);
                 console.log(response.data.video);
                $scope.courses = response.data;
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
            }, function (error) {
                $scope.status = 'Unable to load lecturer data: ' + error.message;
                console.log($scope.status);
            });
    };
   $scope.getLecturer();

   //============== Modals ========================
   $scope.showCourseEditModal = function(){
        $scope.editModal = $modal({
          scope: $scope,
          template: 'app/views/editLecturer.html',
          show: true
        })
   };

   $scope.showCreateCourseModal = function(){
        $scope.createModal = $modal({
          scope: $scope,
          template: 'app/views/createLecForm.html',
          show: true
        })
   };
   
   $scope.showDeleteCourseModal = function(){
       $scope.deleteModal = $modal({
         scope: $scope,
         template: 'app/views/deleteLecturer.html',
         show: true
       })
  };
}]);
