todoApp.controller('LecturerDetailsCtrl', ['coursesFac','lecturerFac','$modal','$scope','$stateParams', function LecturerDetailsCtrl(coursesFac, lecturerFac,$modal, $scope, $stateParams){
    $scope.formData = {};

    $scope.lecturer;
    $scope.courses;
    $scope.status;

    var lecturerEdit = $scope.formData;
    var id = $stateParams.id;

    console.log(id);
    
    $scope.getCourse = function(){
        coursesFac.getCourses()
            .then(function (response) {
                $scope.courses = response.data;
                console.log($scope.courses);
               // console.log($scope.courses.video);
            }, function (error) {
                $scope.status = 'Unable to load course data: ' + error.message;
                console.log($scope.status);
            });
    };

    //passes the state paramater in to the method. The paramater is the course Id 
    $scope.getCourse();
  
    //getLecturer() method calls the lecturerFac factory/service which calls the api endpoint and returns 
    //the lecturer information based on the course id.
    
    $scope.getLecturer = function(id){
        lecturerFac.getLecturerById(id)
            .then(function (response) {
                $scope.lecturer = response.data;
                console.log($scope.lecturer);
            }, function (error) {
                $scope.status = 'Unable to load lecturer data: ' + error.message;
                console.log($scope.status);
            });
    };

   $scope.getLecturer(id);

   $scope.edidtLecturer = function(lecturerEdit){
       console.log("inside method "+lecturerEdit);

        lecturerFac.updateLecturer(lecturerEdit)
            .then(function(response){
                $scope.status = 'Updated Lecturer!';
                console.log($scope.status);
                $state.go("lecturer");
            }, function (error) {
              $scope.status = 'Unable to update customer: ' + error.message;
        });
    
    };
   
   
    $scope.edidtLecturer(lecturerEdit);

   $scope.showEditModal = function(){
        $scope.editModal = $modal({
          scope: $scope,
          template: 'app/views/editLecturer.html',
          show: true
        })
   };

}]);