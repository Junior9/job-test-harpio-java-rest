angular.module('main').controller('userController',function ($scope, $http, $location, $rootScope){

	$scope.persons = {};
	$scope.person = {};
	$scope.mensagem = {};
	
	$scope.save = function(){
		$http.post('/person/save',$scope.person)
		.success(function(data){
			$scope.mensagem.data = "Salvo com sucesso"; 
			$location.path("/usuarios");
		})
		.catch(function(error){
			console.log(error);
			$scope.mensagem.erro = "Objeto ja salvo em banco";
		});
	}
	
});