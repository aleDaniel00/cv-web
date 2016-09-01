<?php
require '../vendor/autoload.php';

use Emarref\Jwt\Claim;

// Indicamos que estamos devolviendo un json.
header('Content-Type: application/json; charset=utf-8');

$db = new PDO('mysql:host=localhost;dbname=tecno4;charset=utf8', 'root', '');

$query = "SELECT * FROM usuarios
          WHERE usuario = ?
          AND   password = ?";

$postData = json_decode(file_get_contents('php://input'), true);

$stmt = $db->prepare($query);

$stmt->execute([
    $postData['usuario'],
    $postData['password'],
]);

//sleep(2);

if($stmt->fetch(PDO::FETCH_ASSOC)) {
    // Usuario válido.
    // Creamos el Payload para el JWT.
    $payload = new Emarref\Jwt\Token();

    // Asignamos las claims (afirmaciones) al payload.
    $payload->addClaim(new Claim\Issuer('Da Vinci'));
    $payload->addClaim(new Claim\Expiration(new \DateTime('1 week')));
    $payload->addClaim(new Claim\PrivateClaim('id', 1));
    $payload->addClaim(new Claim\PrivateClaim('rol', 'admin'));
    $payload->addClaim(new Claim\PrivateClaim('user', 'sarazaPepitoPerez'));

    // Creamos el Token (este incluye el header).
    $jwt = new Emarref\Jwt\Jwt();

    // Ahora armamos la firma con la encriptación.
    // Primero, definimos el algoritmo de encriptación.
    // Luego, con ese algoritmo, generamos en encriptador.
    // Y finalmente, firmamos nuestro Token!
    $algorithm = new Emarref\Jwt\Algorithm\Hs256('f2389fh89sdfnhoh89');
    $encryption = Emarref\Jwt\Encryption\Factory::create($algorithm);
    $serializedToken = $jwt->serialize($payload, $encryption);

    echo json_encode([
        'status' => 1,
        'token' => $serializedToken
    ]);
} else {
    // Error.
    echo json_encode([
        'status' => 0,
        'message' => "ERROR!"
    ]);
}
