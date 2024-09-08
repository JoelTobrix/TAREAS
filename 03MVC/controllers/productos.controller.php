<?php

//TODO: controlador de productos

require_once('../models/productos.model.php');
//error_reporting(0);
$productos = new Productos;

switch ($_GET["op"]) {
        //TODO: operaciones de productos

    case 'todos': 
        $datos = array(); 
        $datos = $productos->todos(); 
        while ($row = mysqli_fetch_assoc($datos)) 
        {
            $todos[] = $row;
        }
        echo json_encode($todos);
        break;
        //TODO: procedimeinto para obtener un registro de la base de datos
    case 'uno':
        $idProductos = $_POST["idProductos"];
        $datos = array();
        $datos = $productos->uno($idProductos );
        $res = mysqli_fetch_assoc($datos);
        echo json_encode($res);
        break;
        //TODO: Procedimeinto para insertar un registro en la base de datos
    case 'insertar':
        $Codigo_Barras = $_POST["Codigo_Barras"];
        $Nombre_Producto = $_POST["Nombre_Producto"];
        $Graba_IVA = $_POST["Graba_IVA"];
        

        $datos = array();
        $datos = $productos->insertar($Codigo_Barras, $Nombre_Producto, $Graba_IVA);
        echo json_encode($datos);
        break;
        //TODO: Procedimeinto para actualziar un producto en la base de datos
    case 'actualizar':
        $Codigo_Barras = $_POST["Codigo_Barras"];
        $Nombre_Producto = $_POST["Nombre_Producto"];
        $Graba_IVA = $_POST["Graba_IVA"];
        
        $datos = array();
        $datos = $productos->actualizar($Codigo_Barras, $Nombre_Producto, $Graba_IVA);
        echo json_encode($datos);
        break;
        //TODO: Procedimeinto para eliminar un producto en la base de datos
    case 'eliminar':
        $idProductos = $_POST["idProductos"];
        $datos = array();
        $datos = $productos->eliminar($idProductos);
        echo json_encode($datos);
        break;
}
