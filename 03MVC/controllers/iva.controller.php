<?php

//TODO: controlador de iva

require_once('../models/iva.model.php');
//error_reporting(0);
$iva = new Iva;

switch ($_GET["op"]) {
        //TODO: operaciones de productos

    case 'todos': 
        $datos = array(); 
        $datos = $iva->todos(); 
        while ($row = mysqli_fetch_assoc($datos)) 
        {
            $todos[] = $row;
        }
        echo json_encode($todos);
        break;
    }
        ?>
        