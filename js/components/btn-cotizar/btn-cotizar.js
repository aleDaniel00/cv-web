angular.module("alexApp").
	component("btnCotizar",{
		templateUrl: './js/components/btn-cotizar/btn-cotizar.html',
		controller: function($scope){
			$scope.mostrarPanelCotizacion = function ($event){
				$event.stopPropagation();	
				var aside = document.querySelector( '#aside_plus' );
				var main = document.getElementsByTagName('main')[0];
				var requests = document.querySelector( '#requests' );
				var menu = document.querySelector('#content-menu').querySelectorAll('nav')[0].querySelectorAll('ul')[0];
				var btn_menu = document.querySelector('#caja');
					
					aside.style.overflowY = 'scroll';
					aside.className = 'activo';	
					
					if(main.style.width === "100%"){
						main.style.transform = 'translate3d(-1020px, 0px, 0px)';
						main.style.padding = '0';
					}else {
						main.style.transform = 'translate3d(-747px, 0px, 0px)';
						main.style.padding = '0 29px';
					}

					/*if(){

					}*/

					btn_menu.style.zIndex = '-2';
					obtID('content-menu').style.zIndex = '0';
					menu.style.height = '0';
					main.style.cursor = '-webkit-grab';	
					main.style.opacity = '0.7';
					main.style.position = 'fixed';
					requests.style.width = '100%';
					requests.style.padding = '0';
					requests.style.opacity = '';   
					window.scrollTo(0, 0);
					
					addEvent(menu,'click', cerrarPanelCotizacion,false);
					addEvent(obtID('cajaCerrar'),'click', cerrarPanelCotizacion,false);
					addEvent(main,'click',cerrarPanelCotizacion,false);	
			}
		}
	});

function cerrarPanelCotizacion (){
	var aside = document.querySelector( '#aside_plus' );
	var main = document.getElementsByTagName('main')[0];
	var requests = document.querySelector( '#requests' );
	var menu = document.querySelector('#content-menu').querySelectorAll('nav')[0].querySelectorAll('ul')[0];
	var btn_menu = document.querySelector('#caja');	

		main.style.opacity = '1';
		aside.style.overflowY = 'hidden';
		aside.className = 'menu_inactivo';	
		if(menu.style.width === "4em"){
			c(main.style.transform);
			main.style.transform = 'translate3d(0px, 0px, 0px)';
				main.style.padding = '0 29px';

		}else{
			main.style.transform = 'translate3d(273px, 0px, 0px)';
				main.style.padding = '0 0';
		}
		
		
		var mediaquery = window.matchMedia("(min-width: 1224px)");
		if (mediaquery.matches) {
		  	
		  	menu.style.height = '0%';
		  	menu.style.background = 'red';
		  	console.info(main.style.width);
		} else {
		 	menu.style.height = '4.46em';
		 	menu.style.background = 'blue';
		 	if(screen.width < 1050){
		 		menu.style.background = 'green';
		 	}
console.info(main.style.width);
		}
		var mediaquery = window.matchMedia("(max-width: 1050px)");
		if (mediaquery.matches) {
		  	
		  	menu.style.height = '4.46em';
		  	menu.style.background = 'pink';
		  	if(screen.width > 1050){
		  		menu.style.background = 'lightblue';
		  	}

console.info(main.style.width);
		} else {
		 	menu.style.height = '100%';
		 	menu.style.background = 'gray';

		 	console.info(main.style.width);
		}
		btn_menu.style.zIndex = '2';
		obtID('content-menu').style.zIndex = '1';
		main.style.position = '';
		main.style.cursor = 'default';
		requests.style.opacity = '0';

	
	removeEvent(main,'click',cerrarPanelCotizacion,false)
}