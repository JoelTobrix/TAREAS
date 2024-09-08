<?php
//TODO: Clase de Productos
require_once('../config/config.php');
class Productos
{
public function todos() //select * from clientes
{
    $con = new ClaseConectar();
    $con = $con->ProcedimientoParaConectar();
    $cadena = "SELECT * FROM `productos`";
    $datos = mysqli_query($con, $cadena);
    $con->close();
    return $datos;
}
public function uno($idProductos) //select * from productos where id = $id
{
    $con = new ClaseConectar();
    $con = $con->ProcedimientoParaConectar();
    $cadena = "SELECT * FROM `productos` WHERE `idProductos)`=$idProductos)";
    $datos = mysqli_query($con, $cadena);
    $con->close();
    return $datos;
}
public function insertar($Codigo_Barras, $Nombre_Producto, $Graba_IVA) //insert into productos
{
    try {
        $con = new ClaseConectar();
        $con = $con->ProcedimientoParaConectar();
        $cadena = "INSERT INTO `productos` ( `Codigo_Barras`, `Nombre_Producto`, `Graba_IVA `) VALUES ('$Codigo_Barras','$Nombre_Producto','$Graba_IVA')";
        if (mysqli_query($con, $cadena)) {
            return $con->insert_id;
        } else {
            return $con->error;
        }
    } catch (Exception $th) {
        return $th->getMessage();
    } finally {
        $con->close();
    }
}
 
public function actualizar($idProductos, $Codigo_Barras, $Nombre_Producto, $Graba_IVA) 
{
    try {
        $con = new ClaseConectar();
        $con = $con->ProcedimientoParaConectar();
        $cadena = "UPDATE `productos` SET `Codigo_Barras`='$Codigo_Barras',`Nombre_Producto	`='$Nombre_Producto	',`Graba_IVA`='$Graba_IVA'";
        if (mysqli_query($con, $cadena)) {
            return $idProductos;
        } else {
            return $con->error;
        }
    } catch (Exception $th) {
        return $th->getMessage();
    } finally {
        $con->close();
    }
}
//cambiar
public function eliminar($idProductos) 
{
    try {
        $con = new ClaseConectar();
        $con = $con->ProcedimientoParaConectar();

        // Validar que $idClientes sea un entero
        $idClientes = (int)$idProductos;

        $cadena = "DELETE FROM `productos` WHERE `idProductos`= $idProductos";
        
        if (mysqli_query($con, $cadena)) {
            return "Registro eliminado correctamente"; // O simplemente return 1;
        } else {
            return "Error al eliminar el registro: " . mysqli_error($con);
        }
    } catch (Exception $th) {
        return "Excepción capturada: " . $th->getMessage();
    } finally {
        $con->close();
    }
}
}

?>