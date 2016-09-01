
<?php
require_once '../../config.php';
__autoload('Link');

if($_SERVER['REQUEST_METHOD'] == "POST") {
	$link = new Link();
	//$usr->cargarDatosDeForm();
	$link->cargarDeArray($_POST);
	//if($usr->validate()) {
	$link->grabar();
	
	//}
}

