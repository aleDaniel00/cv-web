<?php 
require_once '../../config.php';
__autoload('Link');
//__autoload('Validator');

if($_SERVER['REQUEST_METHOD'] == "POST") {

	$link = new Link();
	//$usr->cargarDatosDeForm();
	$link->cargarDeArray($_POST);

	$link->actualizar();
	//if($usr->validate()) {
	//if() {

		//header("Location:modificarUsr.php?ID_USUARIO=$id");
	//}
	//}
	
	//$params = array(
	//	'nombre' => array('required', 'minLength' => 4),
	//	'precio' => array('required', 'isNumber'),
	//	'cantidad' => array('required', 'isNumber')
	//);

	//$val = new Validator('post', $params);
	
	//echo "<pre>";
	//print_r($val->errores);
	//echo "</pre>";
	
	//var_dump($val->esValido());
	
	//$errores = $val->errores;
}