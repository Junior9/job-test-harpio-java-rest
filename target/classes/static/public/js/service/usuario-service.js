angular.module('usuarioService', ['ngResource'])
.factory('usuarioService', function($resource,$q,$http,$location) {
	var service = {};
	
	service.save = function(person){
		$http.post('/person/save',person)
		.success(function(data){
			$location.path("/usuario");
		})
		.catch(function(error){
			console.log(error);
		});
	}
	
	service.delete = function(id){
		$http.delete('/person/delete/'+ id)
		.success(function(data){
			return data;
		})
		.catch(function(error){
			console.log(error);
		});
	}

	return service;
});