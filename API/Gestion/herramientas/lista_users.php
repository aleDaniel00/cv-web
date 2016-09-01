<?php
require_once '../config.php';
__autoload('Usuario');
__autoload('DBConnection');
?>

<!--<li class="tituloDos"><h2>Tabla-lista de Usuarios y formulario de alta</h2></li>-->
<li id="list_table_users">
	<div id="msg_user"></div>
	<table border="1">
		<thead>
			<tr>
			  <th>Usuario</th>
			  <th>Modificar</th>
			  <th>Borrar</th>
			</tr>
		</thead>
		<?php
			$usrs = Usuario::getAll();
			foreach($usrs as $fila) {
				?>
				<tr>
					<td>
						
						<?php echo $fila["NOMBRE"]; ?>
					</td>
					<td>
						<button class='botonModificar' title='Modificar' name="<?php echo $fila["ID_USUARIO"];?>">
						modificar	
						</button>
					</td>
					<td>
						<button class='botonBorrar'  title='Borrar' name="<?php echo $fila["ID_USUARIO"];?>">
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
						if( isset($_GET['nuevoUser'])){
						echo '<div id="grabado_exitoso">Nuevo usuario ha sido agregado exitosamente!</div>';
						unset( $_GET['nuevoUser'] );
						}
						?>
						<?php
						if( isset($_GET['error'])){
						echo '<div id="error_uno">Usuario ya existente, intente registrarse  una vez mas!</div>';
						unset( $_GET['error'] );
						}
						?>
			<button id="interruptor_add_user" class="text_btn" name='0'>
			Nuevo Usuario
			
			</button>
		<div id="subcaja"></div>
		</li>
		<li id="list_modif"></li>