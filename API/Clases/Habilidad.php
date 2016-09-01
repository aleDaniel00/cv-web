<?php
// Habilidad.php
__autoload('DBConnection');

class Habilidad{
	private $id_habilidades;
	private $nombre;
	private $descripcion;
	private $nivel;
	private $icono;
	
	public function __construct($id = null) {
		if(!is_null($id)) {
			// DB
			$query = "SELECT * FROM habilidades
					WHERE id_habilidades = ?";
			$stmt = DBConnection::getStatement($query);
			$stmt->execute(array($id));
			$fila = $stmt->fetch(PDO::FETCH_ASSOC);
			$this->cargarDeArray($fila);
		}
	}
	
	
	public function cargarDeArray($fila) {
	
		foreach($fila as $prop => $valor) {
			$this->$prop = $valor;
		}
	}
	
	public static function getAll() {
		$query = "SELECT * FROM habilidades";
		$stmt = DBConnection::getStatement($query);
		
		$stmt->execute();
		
		return $stmt->fetchAll(PDO::FETCH_ASSOC);
	}
	
	public function grabar() {
		$query = "INSERT INTO 
					habilidades(nombre,descripcion,nivel,icono
					)
				VALUES (:nom,:des,:niv,:ico)";
		$stmt = DBConnection::getStatement($query);
		$exito = $stmt->execute(
			array(
				':nom' => $this->nombre,
				':des' => $this->descripcion,
				':niv' => $this->nivel,
				':ico' => $this->icono
			)
		);
		if($exito) {
		echo json_encode([
			'status' => 1,
			'message' => 'La habilidad, se ha Modificado exitosamente! :D'
		]);
		} else {
			echo json_encode([
				'status' => 0,
				'message' => 'La habilidad no existe, No se realizaron cambios! :´('
			]);
		}
		
			
	}
	public static function cargarDeArrayModif($id) {
		$query = "SELECT * FROM habilidades WHERE id_habilidades = ?";
		$stmt = DBConnection::getStatement($query);
		$stmt->execute(array($id));
		return $stmt->fetchAll();
	}
	
	public function actualizar() {
		$query = "UPDATE 	
					habilidades
				SET 
					nombre=:nom,
					descripcion=:des,
					nivel=:niv,
					icono=:ico							
				WHERE id_habilidades = :cod
		;";
		$stmt = DBConnection::getStatement($query);
		$exito = $stmt->execute(
			array(
				':nom' => $this->nombre,
				':des' => $this->descripcion,
				':niv' => $this->nivel,
				':ico' => $this->icono,
				':cod' => $this->id_habilidades
			)
		);
		if($exito) {
		echo json_encode([
			'status' => 1,
			'message' => 'La Habilidad, se ha Modificado exitosamente! :D'
		]);
		} else {
			echo json_encode([
				'status' => 0,
				'message' => 'La Habilidad no existe, No se realizaron cambios! :´('
			]);
		}
		
			
	}
	
	
	
	public static function borrar($id) {
		$query = "DELETE FROM habilidades WHERE id_habilidades = ?;";
		$stmt = DBConnection::getStatement($query);
		$stmt->fetch(PDO::FETCH_ASSOC);
		$exito = $stmt->execute(array($id));
		if($exito) {
		echo json_encode([
			'status' => 1,
			'message' => 'Habilidad borrado exitosamente! :D'
		]);
		} else {
			echo json_encode([
				'status' => 0,
				'message' => 'Error... :('
			]);
		}
		//return $stmt->fetchAll();
		
		
	}
	function setid_habilidades($cod) {
		$this->id_habilidades = $cod;
	}
	
	function getid_habilidades() {
		return $this->id_habilidades;
	}
	function setnombre($nom) {
		$this->nombre = $nom;
	}
	
	function getnombre() {
		return $this->nombre;
	}
	function setdescripcion($des) {
		$this->descripcion = $des;
	}
	
	function getdescripcion() {
		return $this->descripcion;
	}
	function setnivel($niv) {
		$this->nivel = $niv;
	}
	
	function getnivel() {
		return $this->nivel;
	}

	function geticono() {
		return $this->icono;
	}
	
}