
angular
	.module('alexApp', ['ngRoute'])

	// Configuramos las rutas
	.config([
		'$routeProvider',
		function($routeProvider) {
			$routeProvider
				// Cada when define una ruta en nuestra aplicación.
				.when('/buenas', {
					// Le indicamos el template que queremos usar.
					'templateUrl': 'views/buenas.html',
					'controller': 'buenasController'
				})
				/*.when('/buenas/herramientas', {
					// Le indicamos el template que queremos usar.
					'templateUrl': 'views/herramientas.html',
					'controller': 'listarHerramientasController'
				})*/
				.when('/herramientas/habilidades/:id', {
					'templateUrl': 'views/herramientas.html',
					'controller': 'listarHerramientasController'
				})
				/*.when('/habilidades', {
					'templateUrl': 'views/main-container.html',
					'controller': 'listarHerramientasController'
				})
				/*.when('/#herramientas', {
					'template': '<h1>hola</h1>'
				})*/
				/*.when('/peliculas/:id', {
					'templateUrl': 'views/ver-pelicula.html',
					'controller': 'verPeliCtrl'
				})
				.when('/peliculas/:id/editar', {
					'templateUrl': 'views/nueva-pelicula.html',
					'controller': 'editarPeliCtrl'
				})
				.when('/peliculas/:id/eliminar', {
					'templateUrl': 'views/ver-pelicula.html',
					'controller': 'eliminarPeliCtrl'
				})
				/*.when('/peliculas/:id/eliminar', {
					'templateUrl': 'views/eliminar-pelicula.html',
					'controller': 'eliminarPeliCtrl'
				})*/
				// Definimos una ruta por defecto, en caso que la que
				// pida el usuario no exista.
				.otherwise('/buenas');
		}
	]);