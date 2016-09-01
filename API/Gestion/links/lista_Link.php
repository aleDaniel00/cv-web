<?php
require_once '../../config.php';
__autoload('Link');
__autoload('DBConnection');
?>

<!--<li class="tituloDos"><h2>Tabla-lista de Usuarios y formulario de alta</h2></li>-->
<li id="list_table_links">
	<div id="msg_user"></div>
	<table border="1">
		<thead>
			<tr>
			  <th>herf</th>
			  <th>title</th>
			  <th>icono</th>
			  <th>fecha</th>
			</tr>
		</thead>
		<?php
			$links = Link::getAll();
			foreach($link as $fila) {
				?>
				<tr>
					<td>
						
						<?php echo $fila["title"]; ?>
					</td>
					<td>
						<button class='botonModificar' title='Modificar' name="<?php echo $fila["id_links"];?>">
						modificar	
						</button>
					</td>
					<td>
						<button class='botonBorrar'  title='Borrar' name="<?php echo $fila["id_links"];?>">
							BORRAR
						</button>
					</td>
				</tr>
				<?php
			} 
				?> 
	</table>
</li>
		<li id="form_load">
			<?php
						if( isset($_GET['nuevoLink'])){
						echo '<div id="grabado_exitoso">Nuevo link ha sido agregado exitosamente!</div>';
						unset( $_GET['nuevoLink'] );
						}
						?>
						<?php
						if( isset($_GET['error'])){
						echo '<div id="error_uno">Link ya existente, intente registrarse  una vez mas!</div>';
						unset( $_GET['error'] );
						}
						?>
			<button id="interruptor_add_link" class="text_btn" name='0'>
			Nuevo Link
			
			</button>
		<div id="subcaja"></div>
		</li>
		<li id="list_modif"></li>