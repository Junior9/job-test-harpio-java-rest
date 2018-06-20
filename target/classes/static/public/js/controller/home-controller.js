angular.module('main').controller('homeController',function ($scope, $http, $location, $rootScope){

	$scope.persons = {};
	$scope.person = {};
	$scope.mensagem = {};
	
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
		$location.path("/usuario");
	}
	
	$scope.save = function(person){
		$http.post('/person/save',person)
		.success(function(data){
			$scope.mensagem.data = "Salvo com sucesso"; 
		})
		.catch(function(error){
			console.log(error);
			$scope.mensagem.erro = "Objeto ja salvo em banco";
		});
	}
	
});