
function $(id) {
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
    .controller('menuContaineController', [
		'$scope',
		'$routeParams',
		'LinksService',
		function($scope,$routeParams,LinksService) {
			$scope.links = [];
			$scope.loading = true;
			LinksService.traerTodas().then(
				function(rta) {
					// Éxito
					$scope.links = rta.data;
					for (var i = 0; i < rta.data.length; i++) {
						rta.data[i].estado =0;
						if($routeParams.id){
						 	rta.data[1].estado =1;
						}else{
					  	 	rta.data[0].estado =1;
						}
					}
					$scope.consultarRuta = function (id){
						for (var i = 0; i < $scope.links.length; i++) {
							$scope.links[i].estado = 0;
								if($scope.links[i].id_links == id.id_links){
								id.estado = 1;
							}
						}
					}
					
					
					
					$scope.loading = false;
				}, function(rta) {
					// Error
					console.log(":(");
				});
		}
	])   
	.controller('buttonsNavigator', [
		'$scope',
		function($scope) {
			$scope.loading = false;
			var btn_menu = $('caja');
			addEvent(btn_menu,'click',mostrarMenu);
			$scope.mostrarPanelCotizacion = function ($event){
				$event.stopPropagation();	
				var aside = document.querySelector( '#aside_plus' );
				var main = document.getElementsByTagName('main')[0];
				var requests = document.querySelector( '#requests' );
			
					aside.style.overflowY = 'scroll';
					aside.className = 'activo';	
				
					//$('login_cv').style.transform = ' translate3d(-1100px, 0px, 0px)';
					main.style.transform = ' translate3d(-1100px, 0px, 0px)';
					main.style.cursor = '-webkit-grab';	
					main.style.opacity = '0.7';
					main.style.position = 'fixed';
				
					requests.style.width = '74%';
					requests.style.opacity = '';   
				
				window.scrollTo(0, 0);
				//console.log(asterisco);
				//animar_hover(asterisco,'Campo Obligatorio')
				//removeEvent($('btn_cotizar'),'click',mostrarPanelCotizacion,false);	
				//addEvent($('btn_cotizar'),'click', cerrarPanelCotizacion,false);	
				addEvent($('cajaCerrar'),'click', cerrarPanelCotizacion,false);
				addEvent(main,'click',cerrarPanelCotizacion,false);	
			};
			// Traer todas las películas por Ajax.
			// $http.get() retorna una promesa que es thenable.
           /* LinksService.traerTodas().then(
				function(rta) {
					// Éxito
					//console.log(rta.data);
					$scope.links = rta.data;
					$scope.loading = false;
				}, function(rta) {
					// Error
					console.log(":(");
				});*/
		}
	])
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
			
		console.log($scope.$parent);
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
			/*$scope.something = function (){
				lobulis($scope);
			}*/
			
		}
	])
	.controller('btnMenuController', [
		'$scope',
		function($scope, LinksService) {
			addEvent( $('caja'),'click', mostrarMenu,false);
			animar_hover($("caja"),'Menu')
			cerrarMenu();
		}	
	])
	


	//__________________________________________








function animar_hover (objeto,text_modal){
	
	var x = objeto;
		x.className = 'begin';
		
	addEvent(x,'mouseenter',transformar);
	
	

	function transformar(){
			
			if(text_modal != 'vacio'){
			
				var modal = crear('div');
				var parrafoModal = crear('p');
					modal.id = 'ventana_modal';
					parrafoModal.id = 'p_modal';
					parrafoModal.textContent = text_modal ;
					modal.appendChild(parrafoModal);
					modal.style.position = 'absolute';
					x.appendChild(modal);
		
			}
				x.className = 'end';
				//removeEvent(x,'mouseenter',this);
				addEvent(x,'mouseleave',transformar2);
				removeEvent(x,'mouseleave',transformar);
			var modal = $('ventana_modal');
			var anchoModal = modal.offsetWidth;
		
			
		
					
					anchoModal =  200;
					modal.style.width = anchoModal+'px';
					
			
		function transformar2(){
				if($('ventana_modal')){
					x.removeChild($('ventana_modal'))
				}
				x.className = 'begin';
				
				addEvent(x,'mouseenter',transformar);
			
		}

	}
}
function cerrarPanelCotizacion (){
	var aside = document.querySelector( '#aside_plus' );
	var main = document.getElementsByTagName('main')[0];
	var requests = document.querySelector( '#requests' );

		main.style.opacity = '1';
		
		aside.style.overflowY = 'hidden';
		aside.className = 'menu_inactivo';	
	
		main.style.transform = ' none';	
		main.style.position = '';
		main.style.cursor = 'default';

		requests.style.opacity = '0';
	/*$('menu_activo').id = 'menu_oculto';*/
	removeEvent(main,'click',cerrarPanelCotizacion,false)
}

/*function cambiar_menu(pos){
	/*if(pos < 2500 || pos > 3600){
		//$('header-1').style.position = 'initial';
		$('menu-habilidades').className  = 'neutro';
		var nst = $('header-1').getElementsByTagName('div')[0];
			nst.getElementsByTagName('h2')[0].style.display = 'block';
		

		$('descripcion').style.paddingTop = '0px';
		//$('menu-habilidades').parentNode.getElementsByTagName('h3')[0].style.position = 'initial';
			
	}*/
		
	/*if(pos > 2700 && pos < 3600){
		//alert('mi parada');
		c('1')
		var array_links = $('content-menu').getElementsByTagName('a');
		
		for(var i = 0 ; i < array_links.length ; i++){
			array_links[i].className = '';
			if(array_links[i].textContent == 'habilidades'){
				array_links[i].className = 'active';
				c('2')
			}else if(pos >  2700 && document.pos < 3600){
				//alert('en realidad es esta ');
				c('3')
				
				
				$('header-1').className = 'header-1';
				var nst = $('header-1').getElementsByTagName('div')[0];
					nst.getElementsByTagName('h2')[0].style.display = 'none';
										  
				var tools_img = nst.getElementsByTagName('figure')[0].getElementsByTagName('img')[0];	  
					tools_img.style.position  = 'fixed';
					tools_img.style.top  = '0px';
					tools_img.style.left  = '20%';
					tools_img.style.width  = '27px';
					tools_img.style.zIndex  = '2';
					tools_img.style.padding  = '13.4px 14px';
					tools_img.style.backgroundColor  = 'white';
					tools_img.style.borderBottom  = '1px solid #00bcd4';


					

				$('descripcion').style.paddingTop = '182px';
				$('menu-habilidades').className  = 'off';
				$('menu-habilidades').className  = 'on';
				//$('menu-habilidades').parentNode.getElementsByTagName('h3')[0].style.position = 'fixed';
				
				//$('menu-habilidades').parentNode.getElementsByTagName('h3')[0].className = '';
				//alert(document.body.scrollHei
				//alert($('ficha').scrollHeight)
			}
				c('4')
		}	
	}			
	else if(pos >= 0 && pos < 2700){
	
		var array_links = $('content-menu').getElementsByTagName('a');
		for(var i = 0 ; i < array_links.length ; i++){
			array_links[i].className = '';
			if(array_links[i].textContent == 'buenas'){
				array_links[i].className = 'active';
			}
		}	
	}	
					
	else if(pos > 3400){
		var array_links = $('content-menu').getElementsByTagName('a');
		for(var i = 0 ; i < array_links.length ; i++){
			array_links[i].className = '';
			if(array_links[i].textContent == 'contacto'){
				array_links[i].className = 'active';
			}
		}
					
	}
}/*
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
function mostrarMenu(){
				
	var btn_menu = $('caja');
	if(document.getElementsByTagName('main')[0]){
		var main = document.getElementsByTagName('main')[0];
			
			main.style.transform = ' none';	
			main.style.width = '100%';	
			
			
	}
				
			
	var array = $('caja').getElementsByTagName("div");
		$('caja').className = 'masoFlotar';
	
	var i = 0;
	
	var fx=setInterval( function(){
		
		if (i < 2){
			for( i ; i <= 2; i++ ){
				
				switch (i){
					case 0:
						array[0].className = 'link animacion1'; 
						//.log(i)
					break;	
					case 1: 
						array[1].className = 'link animacion2 ';
						//.log(i)
					break;	
					case 2: 
						array[2].className = 'link animacion3'; 
						//.log(i)
					break;
				}	
			}
			
		}
		
		if($('content-menu')){
			var width = 100;
			var menu = $('content-menu');
				menu.getElementsByTagName("nav")[0].getElementsByTagName("ul")[0].style.width = '0em' ;
				menu.getElementsByTagName("nav")[0].getElementsByTagName("ul")[0].style.transition = 'all cubic-bezier(0.4, 0, 1, 1) 200ms' ;
			var logo = $('logo');
				logo.style.top = '0';
				logo.style.left = '0';
			var btn_menu = $('caja');
				btn_menu.style.left = '0%';
			var arrayDLinks = menu.getElementsByTagName("nav")[0].getElementsByTagName("ul")[0].getElementsByTagName("li");
					
	
				for (var j = 0; j < arrayDLinks.length; j++) {
					if(arrayDLinks[j].className === 'nink'){
						arrayDLinks[j].getElementsByTagName("a")[0].style.fontSize = '0em' ;
					}
					
				}
			/*do{
				var main = document.getElementsByTagName('main')[0];
					width -= 0.1;
					main.style.width = width+'%';
					console.log(width);
			}while( width >= 74 );*/
		}


		clearInterval(fx);
		
	}, 10 );
	removeEvent( $('caja'),'click',mostrarMenu);
	addEvent( $('caja'),'click', cerrarMenu,false);
}
function cerrarMenu(){

	//el menu empieza abierto.  si se hace click en la caja se cierra
	var array = document.getElementById('caja').getElementsByTagName("div");
	$('caja').className = 'menu_activi';
	if(document.getElementsByTagName('main')[0]){
		var main = document.getElementsByTagName('main')[0];
		main.style.transform = ' translate3d(273px, 0px, 0px)';
		main.style.width = '83%';	
	
	}
				
	
		
	var i = 0;
	var fx=setInterval( function(){

		if (i < 2){			
			for(i ; i <= 2; i++ ){
				switch (i){
					case 0:
						array[0].className = 'link'; 
					break;	
					case 1: 
						array[1].className = 'link';
					break;	
					case 2: 
						array[2].className = 'link'; 
					break;
				}	
			}
			
		}
		
		if($('content-menu')){
			var width = 100;
			var menu = $('content-menu');
			var reds = $('red_social');
				menu.getElementsByTagName("nav")[0].getElementsByTagName("ul")[0].style.width = '17em' ;
				menu.getElementsByTagName("nav")[0].getElementsByTagName("ul")[0].style.transition = 'all cubic-bezier(0.4, 0, 1, 1) 400ms' ;
			var logo = $('logo');
				logo.style.top = '64px'
				logo.style.left = '8px';
			var btn_menu = $('caja');
				btn_menu.style.left = '17.5%';
				reds.getElementsByTagName("ul")[0].style.width = '100%' ;
			var arrayDLinks = menu.getElementsByTagName('nav')[0].getElementsByTagName("li");
			var arrayDRedes = reds.getElementsByTagName('ul')[0].getElementsByTagName("li");
					
	
			for (var j = 0; j < arrayDLinks.length; j++) {
				if(arrayDLinks[j].className === 'nink'){
				
					arrayDLinks[j].getElementsByTagName("a")[0].style.fontSize = '0.8em' ;
				}
			}
			for (var j = 0; j < arrayDRedes.length; j++) {
				if(arrayDRedes[j].className === 'nink'){
					
					arrayDRedes[j].getElementsByTagName("a")[0].style.fontSize = '0.8em' ;
				}
			}
	}
		clearInterval(fx);
	}, 10 );
	removeEvent($('caja'),'click',cerrarMenu);
	addEvent($('caja'),'click', mostrarMenu,false);
}



		

