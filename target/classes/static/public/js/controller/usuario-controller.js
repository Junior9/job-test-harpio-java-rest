angular.module('main').controller('usuarioController',function ($scope, $http, $location, $rootScope){

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
	
	$scope.delete = function(id){
		$http.delete('/person/delete/'+ id)
		.success(function(data){
			$scope.removeUsuario(id);
		})
		.catch(function(error){
			console.log(error);
			$scope.mensagem.erro = "Erro ao remover objeto";
		});
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