angular.module('main', ['ngRoute','ngResource'])
.config(function($routeProvider,$locationProvider) {
	
	 $routeProvider.when('/home', {
         templateUrl: 'public/partials/home.html',
         controller: 'homeController'
     });
	 
	 $routeProvider.when('/usuarios', {
         templateUrl: 'public/partials/database.html',
         controller: 'usuarioController'
     });
	 
	 $routeProvider.when('/usuario/novo', {
         templateUrl: 'public/partials/usuario-novo.html',
         controller: 'userController'
     });
	 
	 
	 //$routeProvider.otherwise({redirectTo:'/home'});
})