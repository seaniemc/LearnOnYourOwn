todoApp.controller('LecturerDetailsCtrl', ['coursesFac','lecturerFac','$modal','$scope','$stateParams', function LecturerDetailsCtrl(coursesFac, lecturerFac,$modal, $scope, $stateParams){

    $scope.formData = {};

    $scope.lecturer;
    $scope.courses;
    $scope.status;

    var lecturerDetails = $scope.formData;
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
                 response.data.courses = JSON.parse(response.data.courses);
                $scope.lecturer = response.data;
                console.log($scope.lecturer);
            }, function (error) {
                $scope.status = 'Unable to load lecturer data: ' + error.message;
                console.log($scope.status);
            });
    };

   $scope.getLecturer(id);

   $scope.edidtLecturer = function(lecturerDetails){
       console.log("inside method "+lecturerDetails);

        lecturerFac.updateLecturer(lecturerDetails)
            .then(function(response){
                $scope.status = 'Updated Lecturer!';
                console.log($scope.status);
                $state.go("lecturer");
                $scope.formData = {};
            }, function (error) {
              $scope.status = 'Unable to update customer: ' + error.message;
        });
    
    };
    $scope.edidtLecturer(lecturerDetails);

    $scope.createLecturer = function(lecturerDetails){
       console.log("inside method "+lecturerDetails);

        lecturerFac.insertLecturer(lecturerDetails)
            .then(function(response){
                $scope.status = 'Created Lecturer!';
                console.log($scope.status);
                $state.go("lecturer");
                $scope.formData = {};
            }, function (error) {
              $scope.status = 'Unable to update customer: ' + error.message;
        });
    
    };
    
     $scope.deleteLecturer = function (id) {
        lecturerFac.deleteLecturer(id)
        .then(function (response) {
            $scope.status = 'Deleted Customer! Refreshing customer list.';
            for (var i = 0; i < $scope.lecturer.length; i++) {
                var cust = $scope.lecturer[i];
                if (cust.ID === id) {
                    $scope.lecturer.splice(i, 1);
                    break;
                }
            }
            $scope.orders = null;
        }, function (error) {
            $scope.status = 'Unable to delete customer: ' + error.message;
        });
    };

//============== Modals ========================
   $scope.showEditModal = function(){
        $scope.editModal = $modal({
          scope: $scope,
          template: 'app/views/editLecturer.html',
          show: true
        })
   };

   $scope.showCreateLecModal = function(){
        $scope.createModal = $modal({
          scope: $scope,
          template: 'app/views/createLecForm.html',
          show: true
        })
   };
   
   $scope.showDeleteModal = function(){
       $scope.deleteModal = $modal({
         scope: $scope,
         template: 'app/views/deleteLecturer.html',
         show: true
       })
  };


}]);