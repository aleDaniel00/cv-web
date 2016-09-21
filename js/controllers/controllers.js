
function obtID(id) {
	return document.getElementById(id);
}
function removeEvent(elemento,evento,funcion) {
 if (elemento.removeEventListener) 
    elemento.removeEventListener (evento,funcion,false);
 if (elemento.detachEvent)
    elemento.detachEvent ('on'+evento,funcion); 
}

function addEvent(elemento, evento, funcion){
	if(elemento.addEventListener){
		elemento.addEventListener(evento, funcion);
	} else if(elemento.attachEvent){
		elemento.attachEvent('on'+evento, funcion);
	}
}
function insertAfter(newNode, referenceNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

//otras funciones 
function c(str){return console.log(str);}
//
function crear(str){ return document.createElement(str);} 
//_______________________________________

angular.module('alexApp')
    .controller('loginCtrl',[
        '$scope',
        'AuthService',
        function ($scope, AuthService) {
            $scope.user = {};

            $scope.ingresar = function (user) {
                AuthService.login(user)
                    .then(
                        function (rta) {
                            console.log(rta);
                        },
                        function (rta) {
                            console.log(rta);
                        }
                    );
            };
        }
    ])
    .controller('detectorScrollController', function($scope,$location, $anchorScroll, $window ) {
	   angular.element($window).bind("scroll", function(e) {
	      var pos = document.documentElement.scrollTop || pageYOffset;
	    // cambiar_menu(pos);
	   })
	   addEvent(window,'DOMContentLoaded',function(){
	   		//onload_header();
	   });
	})
    
	.controller('listarHabilidadesController', [
		'$scope',
		'$routeParams',
		'HabilidadesService',
		function($scope, $routeParams, HabilidadesService) {
			$scope.habilidades = [];
			
			$scope.loading = false;
			// Traer todas las películas por Ajax.
			// $http.get() retorna una promesa que es thenable.
            HabilidadesService.traerTodas().then(
				function(rta) {
					// Éxito
					
					for (var i = 0; i < rta.data.length; i++) {
						if(rta.data[i].id_habilidades == $routeParams.id) {
							rta.data[i].estado = 1;
						}
					};
					//$scope.habilidades.estado = 1;
					//console.log($scope);
					$scope.habilidades = rta.data;

					$scope.loading = false;
				}, function(rta) {
					console.log(":(");
				}
			);   		
		}
	])	
	.controller('listarHerramientasController', [
		'$scope',
		'$routeParams',
		'HerramientasService',
		function($scope,$routeParams,HerramientasService) {
			$scope.herramientas = [];
			$scope.loading = false;
			
		
            HerramientasService.traerPorId($routeParams.id).then(
				function(rta) {
					// Éxito
					
					$scope.herramientas = rta.data;
					$scope.loading = false;
					
				}, function(rta) {
					// Error
					console.log(":(");
				}
			);   
		}
	])
	





/*
function onload_header(){
		//alert();
		var fx=setInterval( function(){
			
				var opacity = 0;
				
				do{
					opacity += 0.01;
					$('superHeader').getElementsByTagName('p')[0].style.opacity = opacity;
					$('superHeader').getElementsByTagName('p')[0].className = 'transform_p_header' ;
				
					
				}while(opacity <= 1);
				 var opacity = 0;
				do{
					var array_lis = $('content-menu').getElementsByTagName('li');
					for (var i = 0 ; i < array_lis.length ; i++ ){
						opacity += 0.1;
						array_lis[i].style.opacity = opacity;
						
					} 
				}while(opacity <= 1); 
				var opacity = 0;
				do{
					var nav_redes = $('red_social')
					
					opacity += 0.01;
					nav_redes.style.opacity = opacity;
					
					
				}while(opacity <= 1);
				var opacity = 0;
				do{
				//	var section_bio = $('biography')
					var section_inicio = $('buenas')
					
					opacity += 0.01;
				//	section_bio.style.opacity = opacity;
					section_inicio.style.opacity = opacity;
					
					
				}while(opacity <= 1);
				var height = 0;
				do{
					var sub_header = $('header').getElementsByTagName('div')[0];
					
						height += 0.1;
						sub_header.style.height = height+'%';
					
				}while(height <= 50);
				
				clearInterval(fx);
								
					
		}, 10 );
		//addEvent( $('caja'),'click', mostrarMenu,false);
		//mostrarMenu();
}*/

		
