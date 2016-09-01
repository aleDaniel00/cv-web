<?php 
require_once '../config.php';
__autoload('Usuario');
//__autoload('Validator');

if($_SERVER['REQUEST_METHOD'] == "POST") {

	$usr = new Usuario();
	//$usr->cargarDatosDeForm();
	$usr->cargarDeArray($_POST);

	$usr->actualizar();
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