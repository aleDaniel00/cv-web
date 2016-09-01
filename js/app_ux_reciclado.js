

//funciones cross browser

//detectar ie 11
function GetIEVersion() {
  var sAgent = window.navigator.userAgent;
  var Idx = sAgent.indexOf("MSIE");
  // If IE, return version number.
  if (Idx > 0)
    return parseInt(sAgent.substring(Idx+ 5, sAgent.indexOf(".", Idx)));

  // If IE 11 then look for Updated user agent string.
  else if (!!navigator.userAgent.match(/Trident\/7\./))
    return 11;

  else
    return 0; //It is not IE

}
//detectar ie 11

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
function obtId(str){ return document.getElementById(str); }
function crear(str){ return document.createElement(str);} 
//_______________________________________


// esta porcion de codigo pinta las cajas .. mas especificamente el lis-item padre del link del menu oculto,


 /* var article = document.getElementsByTagName('article');
 
 for( var i = 0 ; i < article.length; i++){
	
	addEvent(article[i],'mouseenter',opacar);
	function opacar (){
		c('o');
		c(this);
		obtId('content-menu').className = 'opaco';
		
		removeEvent(this,"mouseenter",opacar);
		
		
		addEvent(this,'mouseleave',desopacar);
		
	}
	function desopacar (){
		c('d')
		obtId('content-menu').className = 'desopaco';
		c(this);
		removeEvent(this,"mouseleave",desopacar);
		
		addEvent(this,'mouseenter',opacar);
		
	} 
} */
// animacion  al menu principal

if( obtId('cotizar')){
	var btn_cotizar = obtId('cotizar');	
	console.log(btn_cotizar)
	console.log(obtId('cotizar'))
	var btn_menu = obtId('caja');	
	addEvent(btn_cotizar,'click',mostrarPanelCotizacion);
	addEvent(btn_menu,'click',mostrarMenu);

}

function mostrarMenu(){

	var array = obtId('caja').getElementsByTagName("div");
		obtId('caja').className = 'masoFlotar';
	
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
		
		if(obtId('content-menu')){
			var width = 100;
			var menu = obtId('content-menu');
				menu.getElementsByTagName("nav")[0].getElementsByTagName("ul")[0].style.width = '0em' ;
			var logo = obtId('logo');
				logo.style.top = '0';
				logo.style.left = '0';
			var btn_menu = obtId('caja');
				btn_menu.style.left = '1%';
			var arrayDLinks = menu.getElementsByTagName("nav")[0].getElementsByTagName("ul")[0].getElementsByTagName("li");
					

			obtId('logo').getElementsByTagName('a')[0].style.width = '53px';	
			obtId('logo').getElementsByTagName('a')[0].style.padding = '14px 7px';
			obtId('logo').getElementsByTagName('a')[0].style.backgroundSize = '91% 100%';		
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
	obtId('caja').className = 'menu_activi';
	
		
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
		
		if(obtId('content-menu')){
			var width = 100;
			var menu = obtId('content-menu');
			var reds = obtId('red_social');
				menu.getElementsByTagName("nav")[0].getElementsByTagName("ul")[0].style.width = '10em' ;
			var logo = obtId('logo');
				logo.style.top = '20px'
				logo.style.left = '45px';
			var btn_menu = obtId('caja');
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
		obtId('aside_plus').style.overflowY = 'scroll';
		ev.stopPropagation();	
		obtId('aside_plus').className = 'activo';	
		document.getElementsByTagName('main')[0].style.transform = ' translate3d(-1100px, 0px, 0px)';
		obtId('login_cv').style.transform = ' translate3d(-1100px, 0px, 0px)';
		obtId('main').style.cursor = '-webkit-grab';	
		//obtId('main').style.opacity = '0.7';
		obtId('main').style.position = 'fixed';
		/*obtId('menu_oculto').id = 'menu_activo';*/
		//obtId('requests').style.width = '56%';
		obtId('requests').style.opacity = '';   
		 window.scrollTo(0, 0);
		//animar_hover(obtId("asterisco"),'Campo Obligatorio')
		/*obtId('nav_plus').appendChild(obtId('menu_activo'));
		if(obtId('menu_activo')){
			c("esta activo")
			var array_menu_oculto = obtId('menu_activo').getElementsByTagName('a');
			for(var j = 0 ; j < array_menu_oculto.length; j++ ){
				addEvent(array_menu_oculto[j],'click', cerrarPanelCotizacion,false);
			}
		}*/
		removeEvent(btn_cotizar,'click',mostrarPanelCotizacion,false);	
		addEvent(btn_cotizar,'click', cerrarPanelCotizacion,false);	
		addEvent(obtId('cajaCerrar'),'click', cerrarPanelCotizacion,false);
		addEvent(obtId('main'),'click',cerrarPanelCotizacion,false);	
}
if(obtId('openLogin')){
	addEvent(obtId('openLogin'),'click', mostrarLogin,false);
}

function cerrarLogin (){
	obtId('main').style.opacity = '1';
	obtId('login_cv').style.overflowY = 'hidden';
	obtId('login_cv').className = 'login_inactivo';	
	
	document.getElementsByTagName('main')[0].style.transform = ' none';
	obtId('login_cv').style.transform = 'none';
	obtId('main').style.position = '';
	// alert(); 
	//obtId('login_cv').style.opacity = '0';
	/*obtId('menu_activo').id = 'menu_oculto';*/
	removeEvent(obtId('main'),'click',cerrarLogin,false)
	obtId('main').style.cursor = 'default';
	removeEvent(obtId('cajaCerrar'),'click',cerrarLogin,false);
	addEvent(obtId('openLogin'),'click', mostrarLogin,false);
}

/////////////
function mostrarLogin (ev){
		obtId('login_cv').style.overflowY = 'hidden';
		ev.stopPropagation();	
		obtId('login_cv').className = 'activo';	
		document.getElementsByTagName('main')[0].style.transform = 'translate3d(0, 737px, 0)';
		obtId('login_cv').style.transform = 'none';
		obtId('main').style.cursor = '-webkit-grab';	
		//obtId('main').style.opacity = '0.7';
		obtId('main').style.position = 'fixed';
		/*obtId('menu_oculto').id = 'menu_activo';*/
		//obtId('requests').style.width = '56%';
		//obtId('requests').style.opacity = '';   
		 window.scrollTo(0, 0);
		//animar_hover(obtId("asterisco"),'Campo Obligatorio')
		/*obtId('nav_plus').appendChild(obtId('menu_activo'));
		if(obtId('menu_activo')){
			c("esta activo")
			var array_menu_oculto = obtId('menu_activo').getElementsByTagName('a');
			for(var j = 0 ; j < array_menu_oculto.length; j++ ){
				addEvent(array_menu_oculto[j],'click', cerrarPanelCotizacion,false);
			}
		}*/
		removeEvent(openLogin,'click',mostrarLogin,false);	
		addEvent(openLogin,'click', cerrarLogin,false);	
		addEvent(obtId('cajaCerrar'),'click', cerrarLogin,false);
		addEvent(obtId('main'),'click',cerrarLogin,false);	
}
function cerrarPanelCotizacion (){
	//obtId('main').style.opacity = '1';
	obtId('aside_plus').style.overflowY = 'hidden';
	obtId('aside_plus').className = 'menu_inactivo';	
	
	document.getElementsByTagName('main')[0].style.transform = ' none';	
	obtId('main').style.position = '';
	// alert(); 
	obtId('requests').style.opacity = '0';
	/*obtId('menu_activo').id = 'menu_oculto';*/
	removeEvent(obtId('main'),'click',cerrarPanelCotizacion,false)
	obtId('main').style.cursor = 'default';
	removeEvent(btn_cotizar,'click',cerrarPanelCotizacion,false);
	addEvent(btn_cotizar,'click', mostrarPanelCotizacion,false);
}

///////////TRABAJEMOS EL SCROOLLLLL EEE LOCO /////////////////

var header = document.getElementsByTagName("main")[0].getElementsByTagName("header")[0];
var section_header = obtId('header');

if(section_header){
	var link_mas = section_header.getElementsByTagName('button')[0];
	//addEvent(link_mas,'click',moverScroll);
	//'hola')
}

//c(document.body.scrollTop)
if(document.body.scrollTop != 0){
//c(document.body.scrollTop)
}
var pos = document.documentElement.scrollTop || pageYOffset;
//console.log(pos);

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

function onload_header(){

	var fx=setInterval( function(){
		if ((GetIEVersion() > 0) || (navigator.userAgent.toLowerCase().indexOf('firefox') > -1)){
			var opacity = 0;
			do{
			
				opacity += 0.01;
				obtId('header').getElementsByTagName('h2')[0].style.opacity = opacity;
				
			}while(opacity <= 1);
			var opacity = 0;
			do{
				var array_lis = obtId('content-menu').getElementsByTagName('li');
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
				obtId('header').getElementsByTagName('p')[0].style.opacity = opacity;
				obtId('header').getElementsByTagName('p')[0].className = 'transform_p_header' ;
			
				
			}while(opacity <= 1);
			/* var opacity = 0;
			do{
				var array_lis = obtId('content-menu').getElementsByTagName('li');
				for (var i = 0 ; i < array_lis.length ; i++ ){
					opacity += 0.1;
					array_lis[i].style.opacity = opacity;
					
				} 
			}while(opacity <= 1); */
			var opacity = 0;
			do{
				var nav_redes = obtId('red_social')
				
				opacity += 0.01;
				nav_redes.style.opacity = opacity;
				
				
			}while(opacity <= 1);
			var opacity = 0;
			do{
			//	var section_bio = obtId('biography')
				var section_inicio = obtId('inicio')
				
				opacity += 0.01;
			//	section_bio.style.opacity = opacity;
				section_inicio.style.opacity = opacity;
				
				
			}while(opacity <= 1);
			var height = 0;
			do{
				var sub_header = obtId('header').getElementsByTagName('div')[0];
				
					height += 0.1;
					sub_header.style.height = height+'%';
				
			}while(height <= 50);
			
			clearInterval(fx);
							
		}		
	}, 10 );
	mostrarMenu();

}
	/*
}*/
console.log(document.URL);


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
console.log(document.getElementById('content-menu'));
var array_links = obtId('content-menu').getElementsByTagName('a');

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
		/*if(document.documentElement.scrollTop > 3400 && document.documentElement.scrollTop < 4300){
			var array_links = obtId('content-menu').getElementsByTagName('a');
			for(var i = 0 ; i < array_links.length ; i++){
				array_links[i].className = '';
				if(array_links[i].textContent == 'habilidades'){
					array_links[i].className = 'active';
				}
			}	
					
		}else if(document.documentElement.scrollTop > 4400 && document.documentElement.scrollTop < 5000){
			var array_links = obtId('content-menu').getElementsByTagName('a');
			for(var i = 0 ; i < array_links.length ; i++){
				array_links[i].className = '';
				if(array_links[i].textContent == 'estudios'){
					array_links[i].className = 'active';
				}
			}	
					
		}
		else if(document.documentElement.scrollTop > 5000 && document.documentElement.scrollTop < 5500){
			var array_links = obtId('content-menu').getElementsByTagName('a');
			for(var i = 0 ; i < array_links.length ; i++){
				array_links[i].className = '';
				if(array_links[i].textContent == 'contacto'){
					array_links[i].className = 'active';
				}
			}	
					
		}else if(document.documentElement.scrollTop >= 0 && document.documentElement.scrollTop < 2900){
			
			
			var array_links = obtId('content-menu').getElementsByTagName('a');
			for(var i = 0 ; i < array_links.length ; i++){
				array_links[i].className = '';
				if(array_links[i].textContent == 'inicio'){
					array_links[i].className = 'active';
				}
			}	
		}*///
		alert('es firefox o IE');
		
	}else {
		
		//alert('no es firefox ni IE debe ser chrome');
		if(document.body.scrollTop < 2500 || document.body.scrollTop > 3600){
			//alert('que es esto');
			obtId('header-1').style.position = 'initial';
			obtId('menu-habilidades').className  = 'neutro';
			var nst = obtId('header-1').getElementsByTagName('div')[0];
				nst.getElementsByTagName('h2')[0].style.display = 'block';
			var tools_img = nst.getElementsByTagName('figure')[0].getElementsByTagName('img')[0];	  
				tools_img.style.visibility  = 'hidden';
				tools_img.style.top = '0';
				tools_img.style.width  = '10%';
				tools_img.style.padding  = '35px 10px';
				tools_img.style.zIndex  = '0';
				tools_img.style.backgroundColor  = 'transparet';
				tools_img.style.borderBottom  = 'none';

			obtId('descripcion').style.paddingTop = '0px';
			//obtId('menu-habilidades').parentNode.getElementsByTagName('h3')[0].style.position = 'initial';
				
		}
			
		if(document.body.scrollTop > 2700 && document.body.scrollTop < 3600){
			//alert('mi parada');
			c('1')
			var array_links = obtId('content-menu').getElementsByTagName('a');
			
			for(var i = 0 ; i < array_links.length ; i++){
				array_links[i].className = '';
				if(array_links[i].textContent == 'habilidades'){
					array_links[i].className = 'active';
					c('2')
				}else if(document.body.scrollTop >  2700 && document.body.scrollTop < 3600){
					//alert('en realidad es esta ');
					c('3')
					
					
					obtId('header-1').className = 'header-1';
					var nst = obtId('header-1').getElementsByTagName('div')[0];
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
   

						

					obtId('descripcion').style.paddingTop = '182px';
					obtId('menu-habilidades').className  = 'off';
					obtId('menu-habilidades').className  = 'on';
					//obtId('menu-habilidades').parentNode.getElementsByTagName('h3')[0].style.position = 'fixed';
					
					//obtId('menu-habilidades').parentNode.getElementsByTagName('h3')[0].className = '';
					//alert(document.body.scrollHei
					//alert(obtId('ficha').scrollHeight)
				}else{
					//obtId('descripcion').style.paddingTop = '0'

				}
					c('4')
			}	
		}			
		else if(document.body.scrollTop >= 0 && document.body.scrollTop < 2700){
			
			var array_links = obtId('content-menu').getElementsByTagName('a');
			for(var i = 0 ; i < array_links.length ; i++){
				array_links[i].className = '';
				if(array_links[i].textContent == 'inicio'){
					array_links[i].className = 'active';
				}
		}	}	
						
		else if(document.body.scrollTop > 3400){
			var array_links = obtId('content-menu').getElementsByTagName('a');
			for(var i = 0 ; i < array_links.length ; i++){
				array_links[i].className = '';
				if(array_links[i].textContent == 'contacto'){
					array_links[i].className = 'active';
				}
			}
			//obtId('header-1').style.position = 'initial';
			//obtId('menu-habilidades').className  = 'neutro';
			//var nst = obtId('header-1').getElementsByTagName('div')[0];
				//nst.getElementsByTagName('h2')[0].style.display = 'block';
			/*var tools_img = nst.getElementsByTagName('figure')[0].getElementsByTagName('img')[0];	  
				tools_img.style.position  = '';
				tools_img.style.top = '0';
				tools_img.style.width  = '10%';
				tools_img.style.padding  = '35px 10px';
				tools_img.style.zIndex  = '0';
				tools_img.style.backgroundColor  = 'transparet';
				tools_img.style.borderBottom  = 'none';*/

			//obtId('descripcion').style.paddingTop = '0px';	
						
		}
		console.log(document.documentElement.scrollTop || pageYOffset)
	
	}	
}
/*function scroll_move(){
	var x = document.documentElement.scrollTop || pageYOffset;
	//if ( ){c('es mayor que 100 ');}else{c('es diferente');}
	/* if(x > 350){
		console.log('es mas de 500 haga la animacion')
		if ((GetIEVersion() > 0) || (navigator.userAgent.toLowerCase().indexOf('firefox') > -1)){
			var opacity = 0;
			do{
				var section_bio = obtId('biography')
				opacity += 0.01;
				section_bio.style.opacity = opacity;
			}while(opacity <= 1); 
			clearInterval(fx);
		}else {
			var opacity = 0;
			do{
				var section_bio = obtId('biography')
				opacity += 0.01;
				section_bio.style.opacity = opacity;
			}while(opacity <= 1); 
			//clearInterval(fx);
			//return false;
		}	
		
	} */		
	
	/*var fx=setInterval( function(){
		//
		
			/* if ((GetIEVersion() > 0) || (navigator.userAgent.toLowerCase().indexOf('firefox') > -1)){
				if(x == 100){
					do{
						alert();
						//var section_bio = obtId('biography')
						document.documentElement.scrollTop += 5;
						//document.documentElement.scrollTop  = x;
					//	section_bio.style.opacity = opacity;
					}while(document.documentElement.scrollTop > 800);
							
					clearInterval(fx);
				}
			}else { */
				/*if(document.body.scrollTop == 400){
					
				var opacity = 1;						
					var height = 1100;
					var padding = 14;
					do{
						var intro3 = obtId('intro3');
						var div_soon = obtId('intro3').getElementsByTagName('div')[0];
					
							
							while(!padding == 0){
								padding -= 1;
								div_soon.style.paddingTop = padding+'%';
							}
						
							height -= 1;
							intro3.style.height = height+'px';
							//console.log(intro3.style.height);
							
							opacity -= 0.01;
							intro3.style.opacity = opacity;
					
					}while(height != 0 );
				
						
				}
				if(document.body.scrollTop == 300){
					
					//obtId('header-1').getElementsByTagName('h2')[0].style.position = 'absolute';
					//obtId('menu-habilidades').style.position = 'initial';
					//obtId('menu-habilidades').parentNode.getElementsByTagName('h3')[0].style.position = 'initial';
					
					var padding = 0;						
					var height = 1000;
					var height_x = 1100;
					var opacity_x = 1;
					var opacity = 0;
					do{
						var intro2 = obtId('intro2');
						var intro3 = obtId('intro3');
						var div_soon = obtId('intro3').getElementsByTagName('div')[0];
						
							height -= 1;
							intro2.style.height = height+'px';
					//		console.log(intro2.style.height);
								
							while(height_x <= 1100){
								height_x += 1;
								intro3.style.height = height_x+'px';
								
							}
							
							//console.log(intro3.style.height);
							
							 while(padding <= 16){
								padding += 0.01;
								div_soon.style.paddingTop = padding+'%';
							} 
							opacity_x -= 0.01;
							intro2.style.opacity = opacity_x;
							
							opacity += 0.01;
							intro3.style.opacity = opacity;
							
					}while(height != 0 );
				
						
				}
				if(document.body.scrollTop == 200){
//					obtId('header-1').getElementsByTagName('h2')[0].style.position = 'absolute';
	//				obtId('menu-habilidades').style.position = 'initial';
	//				obtId('menu-habilidades').parentNode.getElementsByTagName('h3')[0].style.position = 'initial';
					
					/*var height_y = 1000;
					var height = 900;
					var opacity = 1;
					var opacity_x = 0;
					do{
						
						var intro = obtId('intro');
						var intro2 = obtId('intro2');
					
							while(height_y <= 1000){
								height_y += 1;
							intro2.style.height = height_y+'px';
								
							}
							
							height -= 1;
							intro.style.height = height+'px';
						//	console.log(intro.style.height);
						
							opacity -= 0.01;
							intro.style.opacity = opacity;
							
							opacity_x += 0.01;
							intro2.style.opacity = opacity_x;
					
					}while(height != 0);
				
						
				}
				/*if(document.body.scrollTop == 100){
					obtId('header-1').getElementsByTagName('h2')[0].style.position = 'absolute';
					obtId('menu-habilidades').style.position = 'initial';
					obtId('menu-habilidades').parentNode.getElementsByTagName('h3')[0].style.position = 'initial';
				
					var height_x = 900;	
					var height = 100;
					var opacity_x = 0;
					var opacity = 1;
					do{
						var sub_header = obtId('header').getElementsByTagName('div')[0];
						var intro = obtId('intro');
						var p = obtId('header').getElementsByTagName('div')[0].getElementsByTagName('p')[0];
						var p2 = obtId('header').getElementsByTagName('div')[0].getElementsByTagName('p')[1];
						var btn = obtId('header').getElementsByTagName('div')[0].getElementsByTagName('div')[0].getElementsByTagName('button')[0];
						
						
							while(height_x <= 900){
								height_x += 1;
								intro.style.height = height_x+'px';
								
							}
							
							height -= 1;
							sub_header.style.height = height+'%';
							
							opacity -= 0.01;
							p.style.opacity = opacity;
							p2.style.opacity = opacity;
							btn.style.opacity = opacity;
							
							opacity_x += 0.01;
							intro.style.opacity = opacity_x;
							
							
							
					
					}while(height != 0 /* && padding != 0) */ 
				
						
				/*}
				/*if(document.body.scrollTop == 0){
					obtId('header-1').getElementsByTagName('h2')[0].style.position = 'absolute';
					obtId('menu-habilidades').style.position = 'initial';
					obtId('menu-habilidades').parentNode.getElementsByTagName('h3')[0].style.position = 'initial';
						
					var height_x = 901;
					var height = 0;
					var opacity = -7;
					do{
						
						var sub_header = obtId('header').getElementsByTagName('div')[0];
						var p = obtId('header').getElementsByTagName('div')[0].getElementsByTagName('p')[0];
						var p2 = obtId('header').getElementsByTagName('div')[0].getElementsByTagName('p')[1];
						var btn = obtId('header').getElementsByTagName('div')[0].getElementsByTagName('div')[0].getElementsByTagName('button')[0];
						var intro = obtId('intro');
							
							height += 1;
							opacity += 0.01;
							sub_header.style.height = height+'px';
							p.style.opacity = opacity;
							p2.style.opacity = opacity;
							btn.style.opacity = opacity;
							
							if(obtId('intro')){
								
								while(height_x != 0){
									height_x -= 1;
									intro.style.height = height_x+'px';
									
								}
							}
							
							
					
					}while(height <= 800 ) ;
				
						
				}*/
		/* 		if(document.body.scrollTop == 800){
					
				}	 */
			//}		
	//	}	/*
				/*		clearInterval(fx);
	}, 100 );
}
*/
/*function moverScroll3(){
	
	var fx=setInterval( function(){
		var pos = document.documentElement.scrollTop || pageYOffset;
		if ((GetIEVersion() > 0) || (navigator.userAgent.toLowerCase().indexOf('firefox') > -1)){
			if(document.documentElement.scrollTop <= 3352){
				document.documentElement.scrollTop += 10;
			}else {
				clearInterval(fx);
			
			};
		}else {
			if(document.body.scrollTop <= 3352){
				document.body.scrollTop += 10;
				
			}else {
				clearInterval(fx);
			}
		}		
	}, 10 );
	

}*/

/*function moverScrollup(){

	var fx=setInterval( function(){

		var pos = document.documentElement.scrollTop || pageYOffset;
			
		if( pos > 0 ){
			window.scrollTo( 0 , pos - 40)
		}else{
			clearInterval(fx);
		}
	
	}, 10 );
		
}
	*/
	
	//////////ocullltemos el scrolllll panaaaa////////////////////
	
	
//.info(document.getElementsByTagName('html')[0]);
	
	
// modal -- aviso que hace cada boton 
//obtId("next"))
//console.log(obtId("red_social").getElementsByTagName('button')[0])

/*animar_hover(obtId("red_social").getElementsByTagName('a')[0],'Sigueme en Twitter');
animar_hover(obtId("red_social").getElementsByTagName('a')[1],'Ver perfil LinkedIN');*/
animar_hover(obtId("caja"),'Menu')

/*animar_hover(obtId("content-menu").getElementsByTagName('a')[1],'Home');

animar_hover(obtId("content-menu").getElementsByTagName('a')[2],'Habilidades');
animar_hover(obtId("content-menu").getElementsByTagName('a')[3],'Estudios');
animar_hover(obtId("content-menu").getElementsByTagName('a')[4],'Contactar');
if(obtId("back")){
	animar_hover(obtId("back"),'Click para ir a la anterior seccion');
} */
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
			var modal = obtId('ventana_modal');
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
		if(obtId('ventana_modal')){
			x.removeChild(obtId('ventana_modal'))
		}
		x.className = 'begin';
		
		addEvent(x,'mouseenter',transformar);
	//	removeEvent(x,'click',transformar);
	}
	//, 10 );	
	
}

// modal -- aviso que hace cada boton 



if(obtId('menu-habilidades')){
	var boton_kills = obtId('menu-habilidades').getElementsByTagName('a');
	
	for(var i = 0 ; i < boton_kills.length ; i++){
			

		addEvent(boton_kills[i],'click',function (){
			
			var p = this.getElementsByTagName('em')[0].textContent;
			
			traerDatos(p);

			 return false;
			
		});
	} 
}

function traerDatos(q){
	
	var links_kills = obtId('menu-habilidades').getElementsByTagName('a');
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
/*var circle = new ProgressBar.Circle('#progress', {
	color: '#FCB03C',
	strokeWidth: 3,
	trailWidth: 1,
	duration: 1500,
	text: {
		value: '0'
	},
	step: function(state, bar) {
		bar.setText((bar.value() * 100).toFixed(0));
	}
});*/


function agregarDatosFicha(){
//	obtId('descripcion').getElementsByTagName('h3')[0].textContent = 'Sobre '+this.nombre+':'
	obtId('descripcion').getElementsByTagName('div')[0].innerHTML = this.descripcion
	 //obtId('nivel').getElementsByTagName('span')[0].innerHTML = this.nivel+"%";
	
	


	function vaciar (){
		var her = obtId('herramientas');
		// var avance = obtId('avance');
		// if(avance.getElementsByTagName('div')[0].getElementsByTagName('div')[0]){
			// avance.getElementsByTagName('div')[0].removeChild(obtId('progress'));
			
		// }
		if(her.getElementsByTagName('ul')[0]){
			her.removeChild(her.getElementsByTagName('ul')[0])
			
		}else{return false;}
	}
	vaciar();
	for(var i = 0 ; i < this.elementos.length ; i++){
		
				if(!obtId('herramientas').getElementsByTagName('ul')[0]){
					var ul = crear('ul');					
				}
				var list_item = crear('li');
					list_item.id = 'list';
				var span = crear('span');
				list_item.appendChild(span);
				ul.appendChild(list_item);
				obtId('herramientas').appendChild(ul);
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

/*var ux = new Habilidad ('ux/ui','<div id="one"><h4>Esperiencia de usuario(UX)</h4><p></p><figure><img src="estilo/img/no-clickable/wireframe.png" alt="" /></figure></div><div id="two"><h4>Leyes de Usabilidad</h4><p>Manipulo DOM y XML de SVG para hacer animaciones redimensionables y precisas, fluidas e intuitivas.</p><p>Combino diferentes tecnicas de programacion con Javascript, procedural y Oreintada a objetos, este ultimo es solo un modo de decir ya que este lenguaje es de prototipos.</p><figure><img src="estilo/img/no-clickable/test_usabilidad.svg" alt="" /></figure></div><div id="three"><h4>Mayor Accesibilidad</h4><p> Entiendo y se declarar una "clase" en Javascript, de hecho se llama funcion constructora, esto convierte el codigo escalable y entendible para que otros programadores lo puedan manipular para un posterior crecimiento de la aplicacion y/o una documentacio mas clara de los objetivos.</p><figure><img src="estilo/img/no-clickable/accesibilidad.svg" alt="" /></figure></div>','50','blue',programas = ['JavaScript','JQuery (en lo posible lo evito)']);*/

var cms = new Habilidad ('CMS','<div id="one"><h4>APIS</h4><p>Desarrollo aplicaciones e-commerce autoadministrables, con bases de datos basadas en MySQL y programadas en PHP7. Tambien aplicaciones sociales donde interaccionan muchos usuarios a distintos niveles de seguridad.</p><figure><img src="estilo/img/no-clickable/api.png" alt="" /></figure></div><div id="two"><h4>Datos</h4><p>Diseño bases de datos avanzadas, basadas en diagramas UML, escritas en MySQL</p><p>Asesoro y administro blogs, en wordpress, dada su gran versatibilidad, resulta ser una herramienta util para proyectos pequeños y medianos</p><figure><img src="estilo/img/no-clickable/datos.png" alt="" /></figure></div><div id="three"><h4>Seguridad</h4><p>Realizo validacion de formularios con espresiones regulares para datos sencibles.</p><p>Utilizo laravel, una aplicacion muy versatil para el desarrollo de aplicaciones web, obteniendo resultados increibles en niveles de seguridad en el servidor, y un crecimiento ilimitado de la aplicacion web.</p><figure><img src="estilo/img/no-clickable/seguridad.jpg" alt="" /></figure> </div>','95','blue',programas = ['PHP5+','MYSQL','Laravel MVC']);

var linux = new Habilidad ('Linux','<div id="one"><h4>Redes </h4><p>Conocimientos Basicos de Administracion de redes, hardware, topologia de redes , construccion y deteccion de errores. </p><p>Simulacion con PackerTracer, protocolos OSI, enfasis en IP , TCP y UDP, dispositivos de intercambio de datos.</p><p>Conocimientos avanzados en hardware </p><figure><img src="estilo/img/no-clickable/redes.jpg" alt="" /></figure></div><div id="two"><h4>Fedora</h4><p>Simulacion de redes Ethernet </p><p>Conocimietos basicos de apache y servidores basados en linux, Administrador de servidor Apache - Configuracion de SendMail, thunderbird, Configuracion de Dovecot, Instalacion de Web Min, configuracion de servidores.</p><figure><img src="estilo/img/no-clickable/fedora.png" alt="" /></figure></div><div id="three"><h4>Servidores Apache - http.conf</h4><p> Alta de dominios y nombres de alias, host BIND DNS, alta de Ips -Administracion MySQL desde consola para servidores linux, Importacion de bases de datos CRON HTACCESS – Administracion de contraseñas y documentos por defecto– Tambien url&apos;s amigables.</p><figure><img src="estilo/img/no-clickable/apache.png" alt="" /></figure></div>','80','blue',programas = ['Fedora','Ubuntu','PackerTracer']);
var p = 'diseño';
 traerDatos(p);

//<p>Poseo experiencia en analisis metodologico de requerimientos, actores, tiempos de ejecucion de proyectos, diagramas UML, ciclos de vida, planificacion y programacion de proyectos, casos de uso, DER y su posterior diseño en bases de datos.</p>
/*gogle maps

var divMapa = obtId('mapa-ubicacion');
navigator.geolocation.getCurrentPosition(fn_ok, fn_mal);
function fn_mal(){}
function fn_ok(rta){
	var lat = rta.coords.latitude;
	var lon = rta.coords.longitude;
	
	var glatLon = new google.maps.LatLng(lat,lon);
	var objConfig = {
		zoom: 12,
		center: glatLon
		
	}
	var gMapa = new google.maps.Map(divMapa,objConfig);
	var objConfigMarker = {
		position: glatLon,
		animation: google.maps.Animation.DROP,
		map: gMapa,
		title: 'Usted esta aca'
	}
	var gMarker = new google.maps.Marker(objConfigMarker);
	
	var gCoder = new google.maps.Geocoder();
	var objInformacion = {
		address: 'montevideo 76, san nicolas, Buenos Aires'		
	}
	gCoder.geocode( objInformacion , fn_coder);
	
	function fn_coder( datos){
		var coodernadas = datos[0].geometry.location;
		var config = {
			map:gMapa,
			animation: google.maps.Animation.DROP,
			position:coodernadas,
			title: 'Alex esta aca',
			
		}
		var gMarkerA = new google.maps.Marker(config);
			gMarkerA.setIcon('estilo/img/ico-boton/pin67.png')
		var objHTML = {
			content:'<div id="g-info-win" ><h2>Alex Daniel Perez</h2> <h3>Tienes una idea de negocio web, comunicate conmigo, concertemos una cita y tomemonos un cafe.</h3></div>'
		}	
		var gIW = new google.maps.InfoWindow(objHTML);
		
		google.maps.event.addListener(gMarkerA,'click',function(){
			gIW.open(gMapa,gMarkerA);			
		});
	}
	var obConfigDR ={
		map:gMapa
	}
	var obConfigDS ={
		origin:glatLon,//latitud o lan o string domicilio
		destination:objInformacion.address,
		travelMode:google.maps.TravelMode.DRIVING
	}
	var ds = new google.maps.DirectionsService(); // obtener coordenadas
	var dr = new google.maps.DirectionsRenderer(obConfigDR); // obtener coordenadas a la ruta visible
	
		ds.route(obConfigDS,fnRutear);
	
	function fnRutear( resultados,status){
		
		if(status == 'OK'){
			dr.setDirections(resultados);
		}else{
			alert('Error'+status);
		}
		
		
	}
}
/*gogle maps*/

/*galeria basica*/
//var btn_galeria = obtId('boton_galeria');
//var btn
/*galeria basica
if (pos == 0){
	
	obtId('content-menu').getElementsByTagName('a')[1].className  = 'begin active';
}
if (obtId('progress')){
	//alert('existe');
	c(obtId('progress').getElementsByTagName('p')[0].textContent);
	var x = obtId('progress').getElementsByTagName('p')[0].textContent;
	obtId('progress').getElementsByTagName('p')[0].textContent  = x+'%';
}*/


////////////////////////////////////////////////////////////////7777777777777777
/*
//jQuery is required to run this code
obtId(document).ready(function() {

    scaleVideoContainer();

    initBannerVideoSize('.video-container .poster img');
    initBannerVideoSize('.video-container .filter');
    initBannerVideoSize('.video-container video');

    obtId(window).on('resize', function() {
        scaleVideoContainer();
        scaleBannerVideoSize('.video-container .poster img');
        scaleBannerVideoSize('.video-container .filter');
        scaleBannerVideoSize('.video-container video');
    });

});

function scaleVideoContainer() {

    var height = obtId(window).height() + 5;
    var unitHeight = parseInt(height) + 'px';
    obtId('.homepage-hero-module').css('height',unitHeight);

}

function initBannerVideoSize(element){

    obtId(element).each(function(){
        obtId(this).data('height', obtId(this).height());
        obtId(this).data('width', obtId(this).width());
    });

    scaleBannerVideoSize(element);

}

function scaleBannerVideoSize(element){

    var windowWidth = obtId(window).width(),
    windowHeight = obtId(window).height() + 5,
    videoWidth,
    videoHeight;

    console.log(windowHeight);

    obtId(element).each(function(){
        var videoAspectRatio = obtId(this).data('height')/obtId(this).data('width');

        obtId(this).width(windowWidth);

        if(windowWidth < 1000){
            videoHeight = windowHeight;
            videoWidth = videoHeight / videoAspectRatio;
            obtId(this).css({'margin-top' : 0, 'margin-left' : -(videoWidth - windowWidth) / 2 + 'px'});

            obtId(this).width(videoWidth).height(videoHeight);
        }

        obtId('.homepage-hero-module .video-container video').addClass('fadeIn animated');

    });
}*//*
addEvent(obtId('superHeader'),'mouseenter',animacion_sencilla);
function animacion_sencilla(){
	var x=166,y=64.7;
	var fx=setInterval( function(){
			
			do{
				x = x-2;
				
				console.log(x);
			//	if( y => 0 || y < 10){
					
					obtId('superHeader').style.backgroundPosition = x+'% 64.7%';
			}while(x > 102);
			/*if( x > 102 || x < 166) {
				x -= 1
				console.log(x);
			//	if( y => 0 || y < 10){
					
					obtId('superHeader').style.backgroundPosition = x+'% 64.7%';
			//	}
				

			}
			//'superHeader').style.backgroundPosition = '0 0';

				clearInterval(fx);
			
		}, 1000 );
	//re(obtId('superHeader'),'mouseenter',animacion_sencilla);
	addEvent(obtId('superHeader'),'mouseenter',animacion_sencilla);
}*/
var contError = 0;
if(obtId('error_login')){
	document.body.style.overflow = 'hidden';
	
	addEvent(obtId('cajaCerrar'),'click',function(){
		obtId('error_login').style.display = 'none';
		contError  = contError +1;
		c(contError);
	});
}
// Creamos el módulo de nuestra app.
// El segundo parámetro es indispensable que esté, ya que es el
// que indica que estoy CREANDO el módulo, y no abriendo uno
// ya existente.

// ngRoute incluye el módulo de rutas que incluimos en el index
// con el archivo angular-route.js