
	// animacion  al menu principal

	if( $('cotizar')){
		var btn_cotizar = $('cotizar');	
		console.log(btn_cotizar)
		console.log($('cotizar'))
		var btn_menu = $('caja');	
		addEvent(btn_cotizar,'click',mostrarPanelCotizacion);
		addEvent(btn_menu,'click',mostrarMenu);

	}

	function mostrarMenu(){

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
				var logo = $('logo');
					logo.style.top = '0';
					logo.style.left = '0';
				var btn_menu = $('caja');
					btn_menu.style.left = '1%';
				var arrayDLinks = menu.getElementsByTagName("nav")[0].getElementsByTagName("ul")[0].getElementsByTagName("li");
						

				$('logo').getElementsByTagName('a')[0].style.width = '53px';	
				$('logo').getElementsByTagName('a')[0].style.padding = '14px 7px';
				$('logo').getElementsByTagName('a')[0].style.backgroundSize = '91% 100%';		
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
		removeEvent(btn_menu,'click',mostrarMenu);
		addEvent(btn_menu,'click', cerrarMenu,false);
	}
	function cerrarMenu(){
		//el menu empieza abierto.  si se hace click en la caja se cierra
		var array = document.getElementById('caja').getElementsByTagName("div");
		$('caja').className = 'menu_activi';
		
			
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
					menu.getElementsByTagName("nav")[0].getElementsByTagName("ul")[0].style.width = '10em' ;
				var logo = $('logo');
					logo.style.top = '20px'
					logo.style.left = '45px';
				var btn_menu = $('caja');
					btn_menu.style.left = '11.2%';
					reds.getElementsByTagName("ul")[0].style.width = '100%' ;
				var arrayDLinks = menu.getElementsByTagName('nav')[0].getElementsByTagName("li");
				var arrayDRedes = reds.getElementsByTagName('ul')[0].getElementsByTagName("li");
					console.log(arrayDLinks);	
		
				for (var j = 0; j < arrayDLinks.length; j++) {
					if(arrayDLinks[j].className === 'nink'){
						console.log(arrayDLinks[j]);
						arrayDLinks[j].getElementsByTagName("a")[0].style.fontSize = '0.8em' ;
					}
				}
				for (var j = 0; j < arrayDRedes.length; j++) {
					if(arrayDRedes[j].className === 'nink'){
						console.log(arrayDRedes[j]);
						arrayDRedes[j].getElementsByTagName("a")[0].style.fontSize = '0.8em' ;
					}
				}
		}
			clearInterval(fx);
		}, 10 );
		removeEvent(btn_menu,'click',cerrarMenu);
		addEvent(btn_menu,'click', mostrarMenu,false);
	}

	//////////////////

	function mostrarPanelCotizacion (ev){
			$('aside_plus').style.overflowY = 'scroll';
			ev.stopPropagation();	
			$('aside_plus').className = 'activo';	
			document.getElementsByTagName('main')[0].style.transform = ' translate3d(-1100px, 0px, 0px)';
			$('login_cv').style.transform = ' translate3d(-1100px, 0px, 0px)';
			$('main').style.cursor = '-webkit-grab';	
			//$('main').style.opacity = '0.7';
			$('main').style.position = 'fixed';
			/*$('menu_oculto').id = 'menu_activo';*/
			//$('requests').style.width = '56%';
			$('requests').style.opacity = '';   
			 window.scrollTo(0, 0);
			//animar_hover($("asterisco"),'Campo Obligatorio')
			/*$('nav_plus').appendChild($('menu_activo'));
			if($('menu_activo')){
				c("esta activo")
				var array_menu_oculto = $('menu_activo').getElementsByTagName('a');
				for(var j = 0 ; j < array_menu_oculto.length; j++ ){
					addEvent(array_menu_oculto[j],'click', cerrarPanelCotizacion,false);
				}
			}*/
			removeEvent(btn_cotizar,'click',mostrarPanelCotizacion,false);	
			addEvent(btn_cotizar,'click', cerrarPanelCotizacion,false);	
			addEvent($('cajaCerrar'),'click', cerrarPanelCotizacion,false);
			addEvent($('main'),'click',cerrarPanelCotizacion,false);	
	}
	if($('openLogin')){
		addEvent($('openLogin'),'click', mostrarLogin,false);
	}

	function cerrarLogin (){
		$('main').style.opacity = '1';
		$('login_cv').style.overflowY = 'hidden';
		$('login_cv').className = 'login_inactivo';	
		
		document.getElementsByTagName('main')[0].style.transform = ' none';
		$('login_cv').style.transform = 'none';
		$('main').style.position = '';
		// alert(); 
		//$('login_cv').style.opacity = '0';
		/*$('menu_activo').id = 'menu_oculto';*/
		removeEvent($('main'),'click',cerrarLogin,false)
		$('main').style.cursor = 'default';
		removeEvent($('cajaCerrar'),'click',cerrarLogin,false);
		addEvent($('openLogin'),'click', mostrarLogin,false);
	}

	/////////////
	function mostrarLogin (ev){
			$('login_cv').style.overflowY = 'hidden';
			ev.stopPropagation();	
			$('login_cv').className = 'activo';	
			document.getElementsByTagName('main')[0].style.transform = 'translate3d(0, 737px, 0)';
			$('login_cv').style.transform = 'none';
			$('main').style.cursor = '-webkit-grab';	
			//$('main').style.opacity = '0.7';
			$('main').style.position = 'fixed';
			/*$('menu_oculto').id = 'menu_activo';*/
			//$('requests').style.width = '56%';
			//$('requests').style.opacity = '';   
			 window.scrollTo(0, 0);
			//animar_hover($("asterisco"),'Campo Obligatorio')
			/*$('nav_plus').appendChild($('menu_activo'));
			if($('menu_activo')){
				c("esta activo")
				var array_menu_oculto = $('menu_activo').getElementsByTagName('a');
				for(var j = 0 ; j < array_menu_oculto.length; j++ ){
					addEvent(array_menu_oculto[j],'click', cerrarPanelCotizacion,false);
				}
			}*/
			removeEvent(openLogin,'click',mostrarLogin,false);	
			addEvent(openLogin,'click', cerrarLogin,false);	
			addEvent($('cajaCerrar'),'click', cerrarLogin,false);
			addEvent($('main'),'click',cerrarLogin,false);	
	}
	function cerrarPanelCotizacion (){
		//$('main').style.opacity = '1';
		$('aside_plus').style.overflowY = 'hidden';
		$('aside_plus').className = 'menu_inactivo';	
		
		document.getElementsByTagName('main')[0].style.transform = ' none';	
		$('main').style.position = '';
		// alert(); 
		$('requests').style.opacity = '0';
		/*$('menu_activo').id = 'menu_oculto';*/
		removeEvent($('main'),'click',cerrarPanelCotizacion,false)
		$('main').style.cursor = 'default';
		removeEvent(btn_cotizar,'click',cerrarPanelCotizacion,false);
		addEvent(btn_cotizar,'click', mostrarPanelCotizacion,false);
	}

	///////////TRABAJEMOS EL SCROOLLLLL EEE LOCO /////////////////
c(document)
	var header = $('header-menu');
	var section_header = $('header');

	

	/*//c(document.body.scrollTop)
	if(document.body.scrollTop != 0){
	//c(document.body.scrollTop)
	}
	var pos = document.documentElement.scrollTop || pageYOffset;
	//console.log(pos);
*//*
	function moverScroll(){
		var fx=setInterval( function(){
			if ((GetIEVersion() > 0) || (navigator.userAgent.toLowerCase().indexOf('firefox') > -1)){
				if(document.documentElement.scrollTop <=600){
					document.documentElement.scrollTop += 10;
				
				}else {
					clearInterval(fx);
				
				};
			}else {
				if(document.body.scrollTop <= 600){
					document.body.scrollTop += 10;
				}else {
					clearInterval(fx);
				}
			}
			
		}, 10 );
	}
*/

	function onload_header(){

		var fx=setInterval( function(){
			if ((GetIEVersion() > 0) || (navigator.userAgent.toLowerCase().indexOf('firefox') > -1)){
				var opacity = 0;
				do{
				
					opacity += 0.01;
					$('header').getElementsByTagName('h2')[0].style.opacity = opacity;
					
				}while(opacity <= 1);
				var opacity = 0;
				do{
					var array_lis = $('content-menu').getElementsByTagName('li');
					for (var i = 0 ; i < array_lis.length ; i++ ){
						opacity += 0.1;
						array_lis[i].style.opacity = opacity;
					} 
				}while(opacity <= 1);
				clearInterval(fx);
								
				
				
			}else {
				var opacity = 0;
				
				do{
					opacity += 0.01;
					$('header').getElementsByTagName('p')[0].style.opacity = opacity;
					$('header').getElementsByTagName('p')[0].className = 'transform_p_header' ;
				
					
				}while(opacity <= 1);
				/* var opacity = 0;
				do{
					var array_lis = $('content-menu').getElementsByTagName('li');
					for (var i = 0 ; i < array_lis.length ; i++ ){
						opacity += 0.1;
						array_lis[i].style.opacity = opacity;
						
					} 
				}while(opacity <= 1); */
				var opacity = 0;
				do{
					var nav_redes = $('red_social')
					
					opacity += 0.01;
					nav_redes.style.opacity = opacity;
					
					
				}while(opacity <= 1);
				var opacity = 0;
				do{
				//	var section_bio = $('biography')
					var section_inicio = $('inicio')
					
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
								
			}		
		}, 10 );
		mostrarMenu();

	}


	

	function ValidarUrl(txtCampoActual){
		var g = 'inicio'  
		strExpReg = /(wev\/)?.[a-z]/;
		//alert(strExpReg);
	  if (!strExpReg.test(txtCampoActual.value)){
		strMensaje = 'La página web no es válida,\ncontiene carácteres ';
		strMensaje += 'no válidos o no empieza por "cv-web/#"';
	   // alert(strMensaje);
	   
		return false;
	  }

	  return true;
	}
	console.log(angular.element( document.querySelector( '#content-menu' ) ));
	var array_links = angular.element( document.querySelector( '#content-menu' ) ).getElementsByTagName('a');


	for(var i = 0 ; i < array_links.length ; i++){
		//alert();

		addEvent(array_links[i],'click',function(){
			array_links[i].className = "p";
		//	alert('se supone q aqui debo quitar los estilos')
			var elClickeado = this;
			var r = ValidarUrl(document.URL);
			if(r===true){
				this.className = "active"
			}else{
				//alert('creo q la pagina q buscas no existe... Fijate en q la estas cagando, boludo');
			}

		});
	}
	
	function cambiar_menu(){
		
		if ((GetIEVersion() > 0) || (navigator.userAgent.toLowerCase().indexOf('firefox') > -1)){
			
			alert('es firefox o IE');
			
		}else {
			
			//alert('no es firefox ni IE debe ser chrome');
			if(document.body.scrollTop < 2500 || document.body.scrollTop > 3600){
				//alert('que es esto');
				$('header-1').style.position = 'initial';
				$('menu-habilidades').className  = 'neutro';
				var nst = $('header-1').getElementsByTagName('div')[0];
					nst.getElementsByTagName('h2')[0].style.display = 'block';
				var tools_img = nst.getElementsByTagName('figure')[0].getElementsByTagName('img')[0];	  
					tools_img.style.visibility  = 'hidden';
					tools_img.style.top = '0';
					tools_img.style.width  = '10%';
					tools_img.style.padding  = '35px 10px';
					tools_img.style.zIndex  = '0';
					tools_img.style.backgroundColor  = 'transparet';
					tools_img.style.borderBottom  = 'none';

				$('descripcion').style.paddingTop = '0px';
				//$('menu-habilidades').parentNode.getElementsByTagName('h3')[0].style.position = 'initial';
					
			}
				
			if(document.body.scrollTop > 2700 && document.body.scrollTop < 3600){
				//alert('mi parada');
				c('1')
				var array_links = $('content-menu').getElementsByTagName('a');
				
				for(var i = 0 ; i < array_links.length ; i++){
					array_links[i].className = '';
					if(array_links[i].textContent == 'habilidades'){
						array_links[i].className = 'active';
						c('2')
					}else if(document.body.scrollTop >  2700 && document.body.scrollTop < 3600){
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
					}else{
						//$('descripcion').style.paddingTop = '0'

					}
						c('4')
				}	
			}			
			else if(document.body.scrollTop >= 0 && document.body.scrollTop < 2700){
				
				var array_links = $('content-menu').getElementsByTagName('a');
				for(var i = 0 ; i < array_links.length ; i++){
					array_links[i].className = '';
					if(array_links[i].textContent == 'inicio'){
						array_links[i].className = 'active';
					}
			}	}	
							
			else if(document.body.scrollTop > 3400){
				var array_links = $('content-menu').getElementsByTagName('a');
				for(var i = 0 ; i < array_links.length ; i++){
					array_links[i].className = '';
					if(array_links[i].textContent == 'contacto'){
						array_links[i].className = 'active';
					}
				}
				
							
			}
			console.log(document.documentElement.scrollTop || pageYOffset)
		
		}	
	}

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
			
				
				// var fx=setInterval( function(){
				//	if(anchoModal < 1440){
						
						
						anchoModal =  200;
						modal.style.width = anchoModal+'px';
						
				/* 	}else{
						
						clearInterval(fx);
					} 
				}, 0.1 ); */
		}
	//var fx=setInterval(
		function transformar2(){
			if($('ventana_modal')){
				x.removeChild($('ventana_modal'))
			}
			x.className = 'begin';
			
			addEvent(x,'mouseenter',transformar);
		//	removeEvent(x,'click',transformar);
		}
		//, 10 );	
		
	}

	// modal -- aviso que hace cada boton 



	if($('menu-habilidades')){
		var boton_kills = $('menu-habilidades').getElementsByTagName('a');
		
		for(var i = 0 ; i < boton_kills.length ; i++){
				

			addEvent(boton_kills[i],'click',function (){
				
				var p = this.getElementsByTagName('em')[0].textContent;
				
				traerDatos(p);

				 return false;
				
			});
		} 
	}

	function traerDatos(q){
		
		var links_kills = $('menu-habilidades').getElementsByTagName('a');
		q = q.toLowerCase();

		switch(q){
			case 'diseño':
				
				diseño.mostrarFicha();
				
				for(var i = 0 ; i < links_kills.length ; i++){
					links_kills[i].className = 'kills';
				}
				links_kills[0].className = 'kills-active';
				
			 break;	
			case 'html5':
				html5.mostrarFicha();
				for(var i = 0 ; i < links_kills.length ; i++){
					links_kills[i].className = 'kills';
				}
				links_kills[1].className = 'kills-active';
			 break;	
			case 'mobile':
				mobile.mostrarFicha();
				for(var i = 0 ; i < links_kills.length ; i++){
					links_kills[i].className = 'kills';
				}
				links_kills[2].className = 'kills-active';
			 break;	
			/*case 'ux/ui':
				ux.mostrarFicha();
				for(var i = 0 ; i < links_kills.length ; i++){
					links_kills[i].className = 'kills';
				}
				links_kills[3].className = 'kills-active';
			 break;	*/
			case 'cms':
				cms.mostrarFicha();
				for(var i = 0 ; i < links_kills.length ; i++){
					links_kills[i].className = 'kills';
				}
				links_kills[3].className = 'kills-active';
			 break;	
			case 'linux':
				linux.mostrarFicha();
				for(var i = 0 ; i < links_kills.length ; i++){
					links_kills[i].className = 'kills';
				}
				links_kills[4].className = 'kills-active';
			 break;	
		default: diseño.mostrarFicha()	
		}
		return false;
	}	



	function agregarDatosFicha(){
	//	$('descripcion').getElementsByTagName('h3')[0].textContent = 'Sobre '+this.nombre+':'
		$('descripcion').getElementsByTagName('div')[0].innerHTML = this.descripcion
		 //$('nivel').getElementsByTagName('span')[0].innerHTML = this.nivel+"%";
		
		


		function vaciar (){
			var her = $('herramientas');
			
			if(her.getElementsByTagName('ul')[0]){
				her.removeChild(her.getElementsByTagName('ul')[0])
				
			}else{return false;}
		}
		vaciar();
		for(var i = 0 ; i < this.elementos.length ; i++){
			
					if(!$('herramientas').getElementsByTagName('ul')[0]){
						var ul = crear('ul');					
					}
					var list_item = crear('li');
						list_item.id = 'list';
					var span = crear('span');
					list_item.appendChild(span);
					ul.appendChild(list_item);
					$('herramientas').appendChild(ul);
					span.textContent = this.elementos[i];
		}			
		return false;
	}
	function Habilidad (nombre,descripcion,nivel,color,programas){
		this.nombre = nombre;
		this.descripcion = descripcion;
		this.nivel = nivel;
		this.color = color;
		this.elementos = programas
		this.mostrarFicha = agregarDatosFicha;

	}



	var diseño = new Habilidad ('UX','<div id="one" class="desenfocar"><h4><span class="border_lie">_</span>Experiencia de Usuario</h4><h5>Diseño de Interfaces </h5><p>Tambien bocetos hechos a lapiz, bocetos digitales, paletas de estilos y prototipos junto a otras herramientas que nacen en el camino para obtener optimos resultados en pruebas de usabilidad, aumentando la evolucion del proyecto con el minimo de retrocesos.</p><figure><img src="estilo/img/no-clickable/wireframe.png" alt="" /></figure></div><div id="two" class=""><h4><span class="border_lie">_</span>Usabilidad</h4><h5>Testing constante </h5><p>Pruebas de usuarios reales y Fundamentos en ideas modernas sobre la interaccion y en leyes heuristicas sobre usabilidad son impresindibles en cada proyecto para tener al usuario el mayor tiempo posible en nuestra web, y que se no olvide su funcionamiento.</p><figure><img src="estilo/img/no-clickable/test_usabilidad.svg" alt="" /></figure></div><div id="three" class="desenfocar"><h4><span class="border_lie">_</span>Accesibilidad</h4><h5>Diseño resposive</h5><p>Lectura de nuestra web desde distintos dispositivos, ajustando resolucion y diseño para una interpretacion correcta del sitio, ya que para nadie es un secreto que la mayoria de usuarios  utilizan telefonos "smart", cambiando interaccion y arquitectura del contenido.</p><figure><img src="estilo/img/no-clickable/accesibilidad.svg" alt="" /></figure></div>','80','blue',programas = ['lapiz y mucho papel','photoshop','illustrator','balsamiq','fireworks']);
	var html5 = new Habilidad ('html5','<div id="one"><h4><span class="border_lie">_</span>HTML5 Valido</h4><h5>Una introduccion al la experiencia de usuario que se note mas q cualquier cosa ;)</h5><p>Desarrollo sitios con calidad semantica y que por ende se posicionen bien en buscadores.</p><p>Aplico Apis de HTML5, Geolocation, Video, LocalStorage, Canvas, entre otras, para enriquecer los contenidos y funcionabilidad del sitio.</p><figure><img src="estilo/img/no-clickable/html5.png" alt="" /></figure></div><div id="two"><h4><span class="border_lie">_</span>Feedback inteligente</h4><p>Brindo en mis apps formularios retrospectivos al instante, con interfaces atractivas e inductivas, centrado en una probabilidad maxima de exito </p><figure><img src="estilo/img/no-clickable/feedback.jpg" alt="" /></figure></div><div id="three"><h4><span class="border_lie">_</span>Compatible y Escalable</h4><p>HTML5 nos da la posibilidad de una visualizacion correcta en dispositivos moviles, siendo el lenguaje mobile estandar, acompañado de Tecnologias como AngularJS de Google, y frameworcks estandar en la industria como Boostrap de Twitter, se logran resultados optimos en la interaccion.</p><p> Ademas estos estandares en la industria nos permiten mejorar nuestras aplicaciones mas rapidamente.</p><figure><img src="estilo/img/no-clickable/escalable.png" alt="" /></figure></div>','70','blue',programas = ['XHTML','HTML5','Bootstrap','SVG']);

	var mobile = new Habilidad ('Mobile','<div id="one"><h4><span class="border_lie">_</span>JQuery Mobile</h4><p>Desarrollo aplicaciones hibridas empaquetadas en phonegap basadas en Jquery Mobile para todos los sistemas operativos mobile, IOS, Android, WindowsPhone, BlackBerry OS.</p><p>Este framework y tipo de aplicaciones las recomiendo para soluciones rapidas y con poco flujo de trafico que integra una interface e interaccion completamente mobile.</p><figure><img src="estilo/img/no-clickable/mobile_devices.png" alt="" /></figure></div><div id="two"><h4><span class="border_lie">_</span>AngularJS</h4><p>Herramienta para la creacion de aplicaciones escalables, agiles y con gran fluido de datos, ideal para empresas posicionadas en el rubro que deseen actualizar su tecnologia para tener mejores resultados en el rendimiento de su Aplicacion Web o Mobile.</p><p>Adicionalmente brinda soporte mobile completo, empaquetada en phonegap, para su uso en casi todos los dispositivos mobiles.</p><figure><img src="estilo/img/no-clickable/AngularJS_logo.svg.png" alt="" /></figure></div><div id="three"><h4><span class="border_lie">_</span>JSON</h4><p>JSON es un formato creado para el intercambio de datos, que  consigue juntar sencillez y potencia. Sencillez en su código, de fácil lectura por parte del desarrollador y del ordenador, con una increíble ligereza en comunicación para el intercambio de datos. </p><figure><img src="estilo/img/no-clickable/json.png" alt="" /></figure></div>','60','blue',programas = ['JQuery Mobile','Ajax','Json','Phonegap']);

	var cms = new Habilidad ('CMS','<div id="one"><h4>APIS</h4><p>Desarrollo aplicaciones e-commerce autoadministrables, con bases de datos basadas en MySQL y programadas en PHP7. Tambien aplicaciones sociales donde interaccionan muchos usuarios a distintos niveles de seguridad.</p><figure><img src="estilo/img/no-clickable/api.png" alt="" /></figure></div><div id="two"><h4>Datos</h4><p>Diseño bases de datos avanzadas, basadas en diagramas UML, escritas en MySQL</p><p>Asesoro y administro blogs, en wordpress, dada su gran versatibilidad, resulta ser una herramienta util para proyectos pequeños y medianos</p><figure><img src="estilo/img/no-clickable/datos.png" alt="" /></figure></div><div id="three"><h4>Seguridad</h4><p>Realizo validacion de formularios con espresiones regulares para datos sencibles.</p><p>Utilizo laravel, una aplicacion muy versatil para el desarrollo de aplicaciones web, obteniendo resultados increibles en niveles de seguridad en el servidor, y un crecimiento ilimitado de la aplicacion web.</p><figure><img src="estilo/img/no-clickable/seguridad.jpg" alt="" /></figure> </div>','95','blue',programas = ['PHP5+','MYSQL','Laravel MVC']);

	var linux = new Habilidad ('Linux','<div id="one"><h4>Redes </h4><p>Conocimientos Basicos de Administracion de redes, hardware, topologia de redes , construccion y deteccion de errores. </p><p>Simulacion con PackerTracer, protocolos OSI, enfasis en IP , TCP y UDP, dispositivos de intercambio de datos.</p><p>Conocimientos avanzados en hardware </p><figure><img src="estilo/img/no-clickable/redes.jpg" alt="" /></figure></div><div id="two"><h4>Fedora</h4><p>Simulacion de redes Ethernet </p><p>Conocimietos basicos de apache y servidores basados en linux, Administrador de servidor Apache - Configuracion de SendMail, thunderbird, Configuracion de Dovecot, Instalacion de Web Min, configuracion de servidores.</p><figure><img src="estilo/img/no-clickable/fedora.png" alt="" /></figure></div><div id="three"><h4>Servidores Apache - http.conf</h4><p> Alta de dominios y nombres de alias, host BIND DNS, alta de Ips -Administracion MySQL desde consola para servidores linux, Importacion de bases de datos CRON HTACCESS – Administracion de contraseñas y documentos por defecto– Tambien url&apos;s amigables.</p><figure><img src="estilo/img/no-clickable/apache.png" alt="" /></figure></div>','80','blue',programas = ['Fedora','Ubuntu','PackerTracer']);
	var p = 'diseño';
	 traerDatos(p);


