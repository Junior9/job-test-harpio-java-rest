angular.module('main').controller('homeController',function ($scope, $http, $location, $rootScope){

	$scope.persons = {};
	$scope.person = {};
	$scope.isDelete = 0;
	
	$scope.api = function(){		
		$http.get('https://jsonplaceholder.typicode.com/users')
		.success(function(persons){
			$scope.persons = persons;
		})
		.catch(function(error){
			console.log(error);
		});
	}
	
	$scope.getData = function() {
		$http.get('/person/all')
		.success(function(persons){
			$scope.persons = persons;
		})
		.catch(function(error){
			console.log(error);
		});
	}
	
	$scope.save = function(person){
		$http.post('/person/save',person)
		.success(function(data){
			$location.path("/home");
		})
		.catch(function(error){
			console.log(error);
		});
	}
	
	$scope.delete = function(id){
		$http.delete('/person/delete/'+ id)
		.success(function(data){
			$location.path("/home");
		})
		.catch(function(error){
			console.log(error);
		});
	}
});