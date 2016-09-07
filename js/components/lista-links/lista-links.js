
angular.module("alexApp")
  .component("listaLinks", {
    templateUrl: "./js/components/lista-links/lista-links.html",
    controller: function($scope, $routeParams, LinksService){
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
					
				$scope.animar_hover = function (objeto,text_modal){
	
					console.log(objeto);
					var x = objeto;
						x.className = 'begin';
						
					transformar();
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
								removeEvent(x,'mouseenter',transformar);
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
				$scope.consultarRuta = function (id){
					for (var i = 0; i < $scope.links.length; i++) {
						c($scope.links[i])
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
			}
		);
		
    }
  });


