angular.module("alexApp").
	component("btnCotizar",{
		templateUrl: './js/components/btn-cotizar/btn-cotizar.html',
		controller: function($scope){
			$scope.mostrarPanelCotizacion = function ($event){

				$event.stopPropagation();	
				var aside = document.querySelector( '#aside_plus' );
				var main = document.getElementsByTagName('main')[0];
				var requests = document.querySelector( '#requests' );
			
					aside.style.overflowY = 'scroll';
					aside.className = 'activo';	
					if(main.style.width === "100%"){
						main.style.transform = ' translate3d(-1020px, 0px, 0px)';
					}else {
						main.style.transform = ' translate3d(-747px, 0px, 0px)';
					}
					main.style.cursor = '-webkit-grab';	
					main.style.opacity = '0.7';
					main.style.position = 'fixed';
					requests.style.width = '74%';
					requests.style.opacity = '';   
					window.scrollTo(0, 0);
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
		
		main.style.opacity = '1';
		
		aside.style.overflowY = 'hidden';
		aside.className = 'menu_inactivo';	
		if(menu.style.width === "4em"){
			main.style.transform = 'translate3d(0px, 0px, 0px)';
		}else{
			main.style.transform = 'translate3d(273px, 0px, 0px)';
		}
		
		
		
		main.style.position = '';
		main.style.cursor = 'default';

		requests.style.opacity = '0';
	/*obtID('menu_activo').id = 'menu_oculto';*/
	removeEvent(main,'click',cerrarPanelCotizacion,false)
}