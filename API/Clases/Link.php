<?php
// Link.php
__autoload('DBConnection');

class Link{
	private $id_links;
	private $href;
	private $title;
	private $icono;
	private $fecha;
	
	public function __construct($id = null) {
		if(!is_null($id)) {
			// DB
			$query = "SELECT * FROM links
					WHERE id_links = ?";
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
		$query = "SELECT * FROM links";
		$stmt = DBConnection::getStatement($query);
		
		$stmt->execute();
		
		return $stmt->fetchAll(PDO::FETCH_ASSOC);
	}
	
	public function grabar() {
		$query = "INSERT INTO 
					links(href,title,icono,fecha
					)
				VALUES (:href,:tit,:ico,:fec)";
		$stmt = DBConnection::getStatement($query);
		$exito = $stmt->execute(
			array(
				':href' => $this->href,
				':tit' => $this->title,
				':ico' => $this->icono,
				':fec' => $this->fecha
			)
		);
		if($exito) {
		echo json_encode([
			'status' => 1,
			'message' => 'El Link, se ha Modificado exitosamente! :D'
		]);
		} else {
			echo json_encode([
				'status' => 0,
				'message' => 'El Link no existe, No se realizaron cambios! :´('
			]);
		}
		
			
	}
	public static function cargarDeArrayModif($id) {
		$query = "SELECT * FROM links WHERE id_links = ?";
		$stmt = DBConnection::getStatement($query);
		$stmt->execute(array($id));
		return $stmt->fetchAll();
	}
	
	public function actualizar() {
		$query = "UPDATE 
							links
						SET 
							href=:href,
							title=:tit,
							icono=:ico,
							fecha=:fec							
						WHERE id_links = :cod
					;";
		$stmt = DBConnection::getStatement($query);
		$exito = $stmt->execute(
			array(
				':href' => $this->href,
				':tit' => $this->title,
				':ico' => $this->icono,
				':fec' => $this->fecha,
				':cod' => $this->id_links
			)
		);
		if($exito) {
		echo json_encode([
			'status' => 1,
			'message' => 'El Link, se ha Modificado exitosamente! :D'
		]);
		} else {
			echo json_encode([
				'status' => 0,
				'message' => 'El Link no existe, No se realizaron cambios! :´('
			]);
		}
		
			
	}
	
	
	
	public static function borrar($id) {
		$query = "DELETE FROM links WHERE id_links = ?;";
		$stmt = DBConnection::getStatement($query);
		$stmt->fetch(PDO::FETCH_ASSOC);
		$exito = $stmt->execute(array($id));
		if($exito) {
		echo json_encode([
			'status' => 1,
			'message' => 'Link borrado exitosamente! :D'
		]);
		} else {
			echo json_encode([
				'status' => 0,
				'message' => 'Error... :('
			]);
		}
		//return $stmt->fetchAll();
		
		
	}
	function setid_links($cod) {
		$this->id_links = $cod;
	}
	
	function getid_links() {
		return $this->id_links;
	}
	function sethref($href) {
		$this->href = $href;
	}
	
	function gethref() {
		return $this->href;
	}
	function settitle($tit) {
		$this->title = $tit;
	}
	
	function gettitle() {
		return $this->title;
	}
	function seticono($mar) {
		$this->icono = $ico;
	}
	
	function geticono() {
		return $this->icono;
	}

	function getfecha() {
		return $this->fecha;
	}
	
}