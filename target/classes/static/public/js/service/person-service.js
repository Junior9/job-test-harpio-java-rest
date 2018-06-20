angular.module('personService', ['ngResource'])
.factory('personService', function($resource,$q,$http,$location, $rootScope ) {
	var service = {};
	
	service.save = function(person){
		$http.post('/person/save',person)
		.success(function(data){
			return "Salvo com sucesso";
		})
		.catch(function(error){
			console.log(error);
			return "Objeto ja salvo em banco";
		});
	}
	
	service.delete = function(id){
		$http.delete('/person/delete/'+ id)
		.success(function(data){
			//return "Removido com sucesso";
		})
		.catch(function(error){
			console.log(error);
			//return "Erro ao remover";
		});
	}
	return service;
});	