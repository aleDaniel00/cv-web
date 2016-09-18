
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
				c($scope.links)
				/*$scope.links[i].animarHover = function (){
					$scope.links[i].eventoHover = true;
					c('hola');
					//document.querySelector(".ventana_modal").className = "ventana_modal active"

				}
				$scope.links[i].animarLeave = function (){
					$scope.links[i].eventoHover = false;c('hola2');
					$scope.links[i].eventoLeave = true;
				}*/
				$scope.consultarRuta = function (id){
					for (var i = 0; i < $scope.links.length; i++) {
						$scope.links[i].estado = 0;
						if($scope.links[i].id_links == id.id_links){
							id.estado = 1;

						}

					}
				}
				$scope.loading = false;
			},function(rta) {
				// Error
				console.log(":(");
			}
		);
		
		

    }
  });


