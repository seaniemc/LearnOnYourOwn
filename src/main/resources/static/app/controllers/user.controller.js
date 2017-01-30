todoApp.controller('UserController', ['$scope', 'Users', function UserController($scope, Users) {
    console.log("in user controller");

    $scope.formModel = {};
	$scope.submitting = false;
	$scope.submitted = false;

    $scope.onSubmit = function () {
		$scope.submitting = true;
		console.log("Hey i'm submitted!");
		console.log($scope.formModel);

        $http.post('https://minmax-server.herokuapp.com/register/', $scope.formModel).
			success(function (data) {
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

    };


}]);