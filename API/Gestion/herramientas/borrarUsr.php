
<?php
require_once '../config.php';
__autoload('Usuario');
__autoload('DBConnection');


$id = $_GET['ID_USUARIO'];
Usuario::borrar(intval($id));
