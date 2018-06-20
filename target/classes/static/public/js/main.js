angular.module('main', ['ngRoute','ngResource','usuarioService'])
.config(function($routeProvider,$locationProvider) {
	
	 $routeProvider.when('/home', {
         templateUrl: 'public/partials/harpio-home.html',
         controller: 'homeController'
     });
	 
	 $routeProvider.when('/usuario', {
         templateUrl: 'public/partials/harpio-usuario.html',
         controller: 'usuarioController'
     });
	 
	 $routeProvider.when('/usuario/novo', {
         templateUrl: 'public/partials/harpio-usuario-novo.html',
         controller: 'usuarioController'
     });
	 
	 $routeProvider.otherwise({redirectTo:'/home'});
})