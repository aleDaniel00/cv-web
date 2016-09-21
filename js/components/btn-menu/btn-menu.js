angular.module("alexApp").
	component("btnMenu",{
		templateUrl: "./js/components/btn-menu/btn-menu.html",
		controller: function(){
			var btn_menu = obtID('caja');
			c(btn_menu);
			addEvent(btn_menu,'click',mostrarMenu);
			c(obtID("caja"))
			animar_hover(obtID("caja"),'Menu')
			cerrarMenu();
		}
	});

function mostrarMenu(){
				
	var btn_menu = obtID('caja');
	if(document.getElementsByTagName('main')[0]){
		var main = document.getElementsByTagName('main')[0];
			
			main.style.transform = ' none';	
			main.style.width = '100%';	
			main.style.padding = '0 33px';	
			
			
	}
				
			
	var array = obtID('caja').getElementsByTagName("div");
		obtID('caja').className = 'masoFlotar';
	
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
		
		if(obtID('content-menu')){
			var width = 100;
			var menu = obtID('content-menu');
				menu.getElementsByTagName("nav")[0].getElementsByTagName("ul")[0].style.width = '4em' ;
				menu.getElementsByTagName("nav")[0].getElementsByTagName("ul")[0].className = 'close' ;
				menu.getElementsByTagName("nav")[0].getElementsByTagName("ul")[0].style.transition = 'all cubic-bezier(0.4, 0, 1, 1) 200ms' ;
			var logo = obtID('logo');
				logo.style.top = '0';
				logo.style.left = '0';
			var btn_menu = obtID('caja');
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
	removeEvent( obtID('caja'),'click',mostrarMenu);
	addEvent( obtID('caja'),'click', cerrarMenu,false);
}
function cerrarMenu(){

	//el menu empieza abierto.  si se hace click en la caja se cierra
	var array = obtID('caja').getElementsByTagName("div");
	obtID('caja').className = 'menu_activi';
	if(document.getElementsByTagName('main')[0]){
		var main = document.getElementsByTagName('main')[0];
		main.style.transform = ' translate3d(273px, 0px, 0px)';
		main.style.width = '83%';	
		main.style.padding = '0';	
		
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
		
		if(obtID('content-menu')){
			var width = 100;
			var menu = obtID('content-menu');
			var reds = obtID('red_social');
				menu.getElementsByTagName("nav")[0].getElementsByTagName("ul")[0].style.width = '17em' ;
				menu.getElementsByTagName("nav")[0].getElementsByTagName("ul")[0].className = 'open' ;
				menu.getElementsByTagName("nav")[0].getElementsByTagName("ul")[0].style.transition = 'all cubic-bezier(0.4, 0, 1, 1) 400ms' ;
			var logo = obtID('logo');
				logo.style.top = '64px'
				logo.style.left = '24px';
			var btn_menu = obtID('caja');
				btn_menu.style.left = '17em';
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
	removeEvent(obtID('caja'),'click',cerrarMenu);
	addEvent(obtID('caja'),'click', mostrarMenu,false);
}
function animar_hover (objeto,text_modal){
	
	//console.log(objeto);
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
				removeEvent(x,'mouseenter',this);
				addEvent(x,'mouseleave',transformar2);
				removeEvent(x,'mouseenter',transformar);
			var modal = obtID('ventana_modal');
			var anchoModal = modal.offsetWidth;
				anchoModal =  200;
				modal.style.width = anchoModal+'px';
					
			
		function transformar2(){
			if(obtID('ventana_modal')){
				x.removeChild(obtID('ventana_modal'))
			}
			x.className = 'begin';
			addEvent(x,'mouseenter',transformar);
		}

	}
}