//angular.module('todoApp')
todoApp.controller('UserController', ['Users','$scope', function UserController(Users, $scope) {
    console.log("in user controller");

	//,$rootScope,$state, $http
	
    $scope.formModel = {};
	$scope.submitting = false;
	$scope.submitted = false;
	$scope.has_error = false;

	//console.log($scope.formModel);
	$scope.createUser = function() {
        if(!$scope.registerForm.$valid) {
            return;
        }
		 Users.create($scope.formModel, function (res) {
          // Success code you gave from server
		if (res !== undefined) {   
			$scope.submitting = false;
			$scope.submitted = true;
			$scope.has_error = false;
            $scope.formModel = {}; // clear the form so our user is ready to enter another
            $scope.users.push(data);
            console.log(":)");
		 } else {
			console.log(":(");
			$scope.submitting = false;
 			$scope.submitted = false;
 			$scope.has_error = true;
		}
		});
		
	  
    };
    
    
//		var authenticate = function(credentials, callback) {
//
//		var headers = credentials ? {authorization : "Basic "
//			+ btoa($scope.credentials.email + ":" + $scope.credentials.password)
//		} : {};
//
//		$http.get('/api/todos', {headers : headers}).then(function(response) {
//			if (response.data.name) {
//				$rootScope.authenticated = true;
//			} else {
//				$rootScope.authenticated = false;
//			}
//			callback && callback();
//			}, function() {
//				$rootScope.authenticated = false;
//			callback && callback();
//		});
//
//	}
//    
//	authenticate();
//	$scope.credentials = {};
//	$scope.login = function() {
//		authenticate($scope.credentials, function() {
//			if ($rootScope.authenticated) {
//			$state.go('home');
//			$scope.error = false;
//			} else {
//			$state.go('login');
//			$scope.error = true;
//			}
//		});
//	};

}]);