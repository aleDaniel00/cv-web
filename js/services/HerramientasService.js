// Vamos a crear en este archivo un Service
angular.module('alexApp')
    .service('HerramientasService', [
        '$http',
        function($http) {
            // Asignamos un método al Service.
            this.traerPorId = function(id) {
                console.log(typeof(id));
                if(!id){
                    id=0;
                }
                id=parseInt(id);
                return $http.get('API/Gestion/herramientas/herramientasAll.php?id='+id);
            };
/*
            this.traerPorId = function(id) {
                // Retornamos la promesa.
                return $http.get('api/datos-pelicula.php?id=' + id);
            };

            this.grabar = function(pelicula) {
                return $http.post('api/grabar-pelicula.php', pelicula);
            };

            this.editar = function(id, pelicula) {
                return $http.put('api/editar-pelicula.php?id=' + id, pelicula);
            };

            this.eliminar = function(id) {
                return $http.delete('api/eliminar-pelicula.php?id=' + id);
            }*/
        }
    ]);

    // Variante con Factory
    //.factory('PeliculaService', [
    //    '$http',
    //    function($http) {
    //        // Asignamos un método al Service.
    //        return {
    //            traerTodas: function() {
    //                return $http.get('api/peliculas.php');
    //            },
    //            traerPorId: function(id) {
    //                // Retornamos la promesa.
    //                return $http.get('api/datos-pelicula.php?id=' + id);
    //            },
    //            grabar: function(pelicula) {
    //                return $http.post('api/grabar-pelicula.php', pelicula);
    //            }
    //        }
    //    }
    //]);