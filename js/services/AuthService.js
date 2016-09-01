angular.module('alexApp')
    .service('AuthService', [
        '$http',
        function ($http) {
            this.login = function (user) {
                return $http.post('api/login.php', user);
            };
            
            this.logout = function () {
                // TODO: Implementar.
            };
        }
    ]);