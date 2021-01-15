<?php header('Access-Control-Allow-Origin: *'); 
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept"); 
$json = file_get_contents('php://input');
 $params = json_decode($json); require("conexion.php"); 
 $con=retornarConexion(); 
 $nombreArchivo = $params->foto;
    $archivo = $params->base64textString;
    $archivo = base64_decode($archivo);

    //ruta a la cual se ba a guardar la imagen
    $filePath = $_SERVER['DOCUMENT_ROOT']."/Conexion/src/assets/Productos".$nombreArchivo;
    //ruta que se mostrara
    $path = "assets/Productos/".$nombreArchivo;
    //Movimiento de imagena la carpeta
    file_put_contents($filePath, $archivo);
 
 mysqli_query($con,"insert into articulos(nombre, descripcion, precio, stock) values ('$params->nombre','$params->descripcion',$params->precio,$params->stock, '$path')"); 
 class Result {} $response = new Result(); 
 $response->resultado = 'OK'; 
 $response->mensaje = 'datos grabados'; 
 header('Content-Type: application/json'); 
 echo json_encode($response); 
 ?> 