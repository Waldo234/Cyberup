<?php 
  header('Access-Control-Allow-Origin: *'); 
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
  
  require("conexion.php");
  $con=retornarConexion();

  $registros=mysqli_query($con,"select clave_p from producto where clave_p=$_GET[clave_p]");

  if ($reg=mysqli_fetch_array($registros))  
  {
    $vec[]=$reg;
  }
  $cad=json_encode($vec);
  echo $cad;
  header('Content-Type: application/json');
?>