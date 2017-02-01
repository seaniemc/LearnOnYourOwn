
todoApp.controller('UserController', ['Users','$scope','$http', function UserController(Users, $scope, $http) {
    console.log("in user controller");

    $scope.formModel = {};

	$scope.submitting = false;
	$scope.submitted = false;
	$scope.has_error = false;

	Users.get()
    .success(function(data) {
        $scope.users = data;
    });

	$scope.createUser = function() {
        if(!$scope.userForm.$valid) {
            return;
        }
		Users.create($scope.formModel)
		.success(function(data){
			console.log(":)");
			$scope.submitting = false;
			$scope.submitted = true;
			$scope.has_error = false;
		}).error(function(data) {
			console.log(":(");
			$scope.submitting = false;
 			$scope.submitted = false;
 			$scope.has_error = true;
		});

		$scope.saveUser = function(users) {
	        Users.update(users)
	        .success(function(data) {
	            $scope.editedUser = {};
	        });
	    };
        
    };


}]);
