
todoApp.controller('CoursesDetailsCtrl', ['coursesFac','lecturerFac','$scope','$sce','$modal', '$stateParams', function CoursesDetailsCtrl(coursesFac, lecturerFac, $scope, $sce, $modal, $stateParams){
    $scope.formData ={};

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

   //==============Update delete and create================
   $scope.edidtCourse = function(courseDetails){

        coursesFac.updateCourse(courseDetails)
            .then(function(response){
                $scope.status = 'Updated Course!';
                console.log($scope.status);
                $state.go("lecturer");
                $scope.formData = {};
            }, function (error) {
              $scope.status = 'Unable to update customer: ' + error.message;
        });
    
    };
   // $scope.edidtCourse(courseDetails);

//     $scope.createCourse = function(courseDetails){
//        console.log("inside method "+courseDetails);

//         coursesFac.insertCourse(courseDetails)
//             .then(function(response){
//                 $scope.status = 'Created Course!';
//                 console.log($scope.status);
//                 $state.go("courses");
//                 $scope.formData = {};
//             }, function (error) {
//               $scope.status = 'Unable to create course: ' + error.message;
//         });
    
//     };


   //============== Modals ========================
   $scope.showCourseEditModal = function(){
        $scope.editCourModal = $modal({
          scope: $scope,
          template: 'app/views/editCourse.html',
          show: true
        })
   };

   $scope.showCreateCourseModal = function(){
        $scope.createCourModal = $modal({
          scope: $scope,
          template: 'app/views/createCourse.html',
          show: true
        })
   };
   
   $scope.showDeleteCourseModal = function(){
       $scope.deleteCourModal = $modal({
         scope: $scope,
         template: 'app/views/deleteLecturer.html',
         show: true
       })
  };
}]);
