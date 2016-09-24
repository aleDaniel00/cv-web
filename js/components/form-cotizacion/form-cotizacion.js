angular.module("alexApp")
  .component("formCotizacion", {
    templateUrl: "./js/components/form-cotizacion/form-cotizacion.html",
    controller: function ($scope){
    	$scope.org = {
    		text: "",
    		word: /^[a-zA-Z áéíóúAÉÍÓÚÑñ]+$/
    	};
    	$scope.rub = {
    		text: "",
    		word: /^[a-zA-Z áéíóúAÉÍÓÚÑñ]+$/
    	};
    	$scope.nom = {
    		text: "",
    		word: /^[a-zA-Z áéíóúAÉÍÓÚÑñ]+$/
    	};
    	$scope.tel = {
    		num: "+54-",
    		tele: /^\+?\d{1,3}?[- .]?\(?(?:\d{2,3})\)?[- .]?\d\d\d[- .]?\d\d\d\d$/
    	};

    	$scope.mail = {
    		correo: "",
    		path: /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/
    	};
    	$scope.ur = {
    		text: "",
    		path: /(https?:\/\/(?:www\.|(?!www))[^\s\.]+\.[^\s]{2,}|www\.[^\s]+\.[^\s]{2,})/
    	};

    	/// chechebox 

    	$scope.checkboxModel = {
    		value1 : false,
	        value2 : false,
	        value3 : false,
	        value4 : false,
	        value5 : false,
	        value6 : false,
	        value7 : false,
	        value8 : false,
	        value9 : false,
	        valuea : false,
	        valueb : false,
	        valuec : false
	    };
	    
	   
	   // textarea

	   $scope.des = {
    		text: "",
    		path: /[^A-Za-z0-9 .'?!,@$#-_]/
    	};
    	$scope.selectM = {
    		option : 1
    	};
    	$scope.selectP = {
    		option : 1
    	};

    	$scope.checkboxPrivacidad = {
    		value : false,
    	}


		var inputsText = [];
		var inputs = $('input');
			inputsText = $('.container_text_inputs').find(inputs);
			inputsText.each(function( index ) {
			    $(this).focus(function() {
			    	inputsText.neutro = true;
				  	inputsText.css('opacity','0.3');
				  	$(this).css('opacity','1');
				});
			});
		inputsText.blur(function(){
			inputsText.css('opacity','1');
		});
	}
    
  });