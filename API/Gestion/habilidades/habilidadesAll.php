<?php
//linskAll.php
require_once '../../config.php';
__autoload('Habilidad');
__autoload('DBConnection');

//echo json_encode($stmt->fetchAll(PDO::FETCH_ASSOC));
echo json_encode($habilidades = Habilidad::getAll());