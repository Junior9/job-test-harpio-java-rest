angular.module('usuarioService', ['ngResource'])
.factory('usuarioService', function($resource,$q,$http,$location, $rootScope ) {
	var service = {};
	
	service.login = function(usuario){
		$http.post('/usuario/login',usuario)
		.success(function(usuario){
			console.log("Usuario logado : " + usuario.login );
			sessionStorage.setItem("usuario",usuario.id);
			$location.path("/leilao/home/usuario");
		})
		.catch(function(error){
			console.log(error);
			$scope.message = 'User not found';
			$location.path("/leilao/home/");
		});
	}
	
	service.save = function(usuario){
		$http.post('/usuario/save',usuario)
		.success(function(usuario){
			console.log("Usuario salvo : " + usuario.login );
			sessionStorage.setItem("usuario",usuario.id);
			$location.path("/leilao/home/usuario");
		})
		.catch(function(error){
			console.log(error);
			$scope.message = 'User not found';
			$location.path("leilao/home/");
		});	
	}
	
	return service;
});	