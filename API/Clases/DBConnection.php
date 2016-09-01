<?php
// DBConnection.php
// Clase para manejar la BBDD en modo singleton.
header("Content-Type: text/html;charset=utf-8");
class DBConnection {
	// dbh => Database Handler
	private static $dbh;
	
	private function __construct() {}
	
	public static function getConnection() {
		if(empty(self::$dbh)) {
			//echo "Abro conexión<br>";
			try {
				self::$dbh = new PDO('mysql:host=localhost;dbname=basecv;charset=utf8;', 'root', '',array(PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES \'UTF8\''));
				
				
			} catch(Exception $e) {
				echo "Error al conectar con la BBDD: " . $e->getMessage();
			}
		}
		
		return self::$dbh;
		
	}
	
	public static function getStatement($query) {
		/*$db = self::getConnection();
		return $db->prepare($query);*/
		return self::getConnection()->prepare($query);
	}
}
