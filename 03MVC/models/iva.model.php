<?php
//TODO: Clase de iva
require_once('../config/config.php');
class Iva
{
public function todos() //select * from iva
{
    $con = new ClaseConectar();
    $con = $con->ProcedimientoParaConectar();
    $cadena = "SELECT idIVA FROM iva";
    $datos = mysqli_query($con, $cadena);
    $con->close();
    return $datos;
}
}
?>