todoApp.controller('CoursesDetailsCtrl', ['coursesFac','$scope','$stateParams', function CoursesCtrl(coursesFac, $scope, $stateParams){
    
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
    $scope.getCourse($scope.id);
    console.log($scope.getCourse($scope.id));
}]);