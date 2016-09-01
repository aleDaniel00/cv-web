
<?php
require_once '../../config.php';
__autoload('Link');
__autoload('DBConnection');


$id = $_GET['id_links'];
Link::borrar(intval($id));
