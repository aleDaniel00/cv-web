<?php

//herramientasAll.php

require_once '../../config.php';
__autoload('Herramienta');
__autoload('DBConnection');

//echo json_encode($stmt->fetchAll(PDO::FETCH_ASSOC));
echo json_encode($herramientas = Herramienta::cargarPorHabilidad($_GET['id']));