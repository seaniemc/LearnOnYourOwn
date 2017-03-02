
todoApp.controller('CoursesCtrl', ['Courses','$scope', function CoursesCtrl(Courses, $scope){

//    var self = this;
    
    Courses.get()
    .success(function(data) {
        $scope.courses = data;
        console.log(data);
    });
}]);