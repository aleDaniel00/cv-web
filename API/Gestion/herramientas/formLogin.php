<form id="formLogin" method="post" action="login.php">
	<?php
	if( isset($_SESSION['error'])){
	echo '<div style="color: red">'.$_SESSION['error'].'</div>';
	unset( $_SESSION['error'] );
	}
	?>
	<div>
		<input type="text" name="NOMBRE" placeholder="NOMBRE">
	</div>
	<div>
		<input type="password" name="PASSWORD" placeholder="PASSWORD">
	</div>
	 <div>
		<input type="submit" value="Entrar">
		<!--<a id="botonRegistrarme" href="index.php?seccion=registro">Registrarme</a> -->
	</div>
</form>