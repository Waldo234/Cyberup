<?php header('Access-Control-Allow-Origin: *'); 
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept"); 
$json = file_get_contents('php://input');
 $params = json_decode($json); require("conexion.php"); 
 $con=retornarConexion(); 
 
 mysqli_query($con,"insert into carrito (CLAVE_P2) values ($params->clave_p)"); 
 class Result {} $response = new Result(); 
 $response->resultado = 'OK'; 
 $response->mensaje = 'Producto Añadido Al Carrito'; 
 header('Content-Type: application/json'); 
 echo json_encode($response); 
 ?> 