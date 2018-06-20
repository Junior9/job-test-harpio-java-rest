angular.module('main').controller('usuarioController',function ($scope, $http, $location, $rootScope,usuarioService){

	$scope.persons = {};
	$scope.person = {};
	$scope.mensagem = {};
	
	$http.get('/person/all')
	.success(function(persons){
		$scope.persons = persons;
	})
	.catch(function(error){
		console.log(error);
	});
	
	$scope.novo = function(){
		$location.path("/usuario/novo");
	}
	
	$scope.home = function(){
		$location.path("/home");
	}
	$scope.save = function(){
		usuarioService.save($scope.person);
	}
	
	$scope.delete = function(id){
		usuarioService.delete(id);
		$scope.removeUsuario(id);
	}
	
	$scope.removeUsuario = function (id){
		var index;
		for(index = 0; index < $scope.persons.length; index++){
			if($scope.persons[index].id == id){
				$scope.persons.splice(index, 1);
			}
		}
	}
	
});