<?php
// Herramienta.php
__autoload('DBConnection');

class Herramienta{
	private $id_herramientas;
	private $nombre;
	private $habilidades_id_habilidades;
	private $intro;
	private $descripcion;
	private $icono;
	
	public function __construct($id = null) {
		if(!is_null($id)) {
			// DB
			$query = "SELECT * FROM herramientas
					WHERE id_herramientas = ?";
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
		$query = "SELECT * FROM herramientas";
		$stmt = DBConnection::getStatement($query);
		
		$stmt->execute();
		
		return $stmt->fetchAll(PDO::FETCH_ASSOC);
	}
	public static function cargarPorHabilidad($id) {
		$query = "SELECT * FROM herramientas WHERE habilidades_id_habilidades = :id";
		$stmt = DBConnection::getStatement($query);
		
		$exito = $stmt->execute(
			array(
				':id' => $id
			)
		);
		return $stmt->fetchAll();
		
		
			
	}
	public function grabar() {
		$query = "INSERT INTO 
					herramientas(nombre,habilidades_id_habilidades,intro,descripcion,icono
					)
				VALUES (:nom,:des,:niv,:des,:ico)";
		$stmt = DBConnection::getStatement($query);
		$exito = $stmt->execute(
			array(
				':nom' => $this->nombre,
				':hab' => $this->habilidades_id_habilidades,
				':int' => $this->intro,
				':des' => $this->descripcion,
				':ico' => $this->icono
			)
		);
		if($exito) {
		echo json_encode([
			'status' => 1,
			'message' => 'La Herramienta, se ha Modificado exitosamente! :D'
		]);
		} else {
			echo json_encode([
				'status' => 0,
				'message' => 'La Herramienta no existe, No se realizaron cambios! :´('
			]);
		}
		
			
	}
	public static function cargarDeArrayModif($id) {
		$query = "SELECT * FROM herramientas WHERE id_herramientas = ?";
		$stmt = DBConnection::getStatement($query);
		$stmt->execute(array($id));
		return $stmt->fetchAll();
	}
	
	public function actualizar() {
		$query = "UPDATE herramientas
						SET 
							nombre=:nom,
							habilidades_id_habilidades=:des,
							intro=:niv,
							descripcion=:des							
							icono=:ico							
						WHERE id_herramientas = :cod
					;";
		$stmt = DBConnection::getStatement($query);
		$exito = $stmt->execute(
			array(
				':nom' => $this->nombre,
				':des' => $this->habilidades_id_habilidades,
				':niv' => $this->intro,
				':des' => $this->descvripcion,
				':ico' => $this->icono,
				':cod' => $this->id_herramientas
			)
		);
		if($exito) {
		echo json_encode([
			'status' => 1,
			'message' => 'La Herramienta, se ha Modificado exitosamente! :D'
		]);
		} else {
			echo json_encode([
				'status' => 0,
				'message' => 'La Herramienta no existe, No se realizaron cambios! :´('
			]);
		}
		
			
	}
	
	
	
	public static function borrar($id) {
		$query = "DELETE FROM herramientas WHERE id_herramientas = ?;";
		$stmt = DBConnection::getStatement($query);
		$stmt->fetch(PDO::FETCH_ASSOC);
		$exito = $stmt->execute(array($id));
		if($exito) {
		echo json_encode([
			'status' => 1,
			'message' => 'Herramienta borrado exitosamente! :D'
		]);
		} else {
			echo json_encode([
				'status' => 0,
				'message' => 'Error... :('
			]);
		}
		//return $stmt->fetchAll();
		
		
	}
	function setid_herramientas($cod) {
		$this->id_herramientas = $cod;
	}
	
	function getid_herramientas() {
		return $this->id_herramientas;
	}
	function setnombre($nom) {
		$this->nombre = $nom;
	}
	
	function getnombre() {
		return $this->nombre;
	}
	function sethabilidades_id_habilidades($des) {
		$this->habilidades_id_habilidades = $des;
	}
	
	function gethabilidades_id_habilidades() {
		return $this->habilidades_id_habilidades;
	}
	function setintro($niv) {
		$this->intro = $niv;
	}
	
	function getintro() {
		return $this->intro;
	}

	function getdescripcion() {
		return $this->descripcion;
	}
	function geticono() {
		return $this->icono;
	}
	
}