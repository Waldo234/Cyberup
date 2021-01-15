<?php
function retornarConexion() {
  $con=mysqli_connect("localhost","root","","cyberup");
  return $con;
}
?>