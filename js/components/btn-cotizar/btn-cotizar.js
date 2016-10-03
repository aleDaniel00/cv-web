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
					
					aside.style.overflowY = 'scroll';
					aside.className = 'activo';	
					
					if(main.style.width === "100%"){
						main.style.transform = 'translate3d(-1020px, 0px, 0px)';
						//main.style.padding = '0';
					}else {
						main.style.transform = 'translate3d(-1200px, 0px, 0px)';
						//main.style.padding = '0 29px';
					}

					
					obtID('content-menu').style.zIndex = '0';
					menu.style.height = '0';
					main.style.cursor = '-webkit-grab';	
					main.style.opacity = '0';
					main.style.position = 'fixed';
					requests.style.width = '100%';
					requests.style.padding = '0';
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
	
	//var btn_menu = document.querySelector('#caja');	
		
			$('#box_menu').css("height","100%")
		
		main.style.opacity = '1';
		aside.style.overflowY = 'hidden';
		aside.className = 'menu_inactivo';	
		main.style.transform = 'translate3d(0px, 0px, 0px)';
		//main.style.padding = '0 29px';

		
		
		
		
		
		obtID('content-menu').style.zIndex = '1';
		main.style.position = '';
		main.style.cursor = 'default';
		requests.style.opacity = '0';

	
	removeEvent(main,'click',cerrarPanelCotizacion,false)
}