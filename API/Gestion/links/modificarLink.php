<?php 
require_once '../../config.php';
__autoload('Link');

$id = $_GET['id_links'];
$nuevoLink = Link::cargarDeArrayModif($id);
		
foreach($nuevoUsr as $fila) { 
	?>
	<h2>Modificar <strong><?php echo $fila["title"]?></strong></h2>
					
	<div id="formModif">
		<div>
			<label>href</label>
			<input id="modifLinkHref" type="text" name="href" value="<?php echo $fila["id_links"];?>">
		</div>
		
		<div>
			<input type="hidden" id="id_links" name="id_links" value="<?php echo $fila["id_links"];?>">
		</div>
		
		<div>
			<label>title</label>
			<input id="modifLinkTitle" type="text" name="title" value="<?php echo $fila["title"];?>">
		</div>
		<div>
			<label>icono</label>
			<input id="modifLinkIco" type="text" name="icono" value="<?php echo $fila["icono"];?>">
		</div>
		<div>
			<label>Fecha</label>
			<input id="modifLinkFecha" type="date" name="href" value="<?php echo $fila["fecha"];?>">
		</div>
		
	
		
		
		
		<button id="botonModificarLink" name="<?php echo $fila["id_links"];?>">Aplicar cambios</button>
		
	
	</div>
		
	<?php 
} 
?>