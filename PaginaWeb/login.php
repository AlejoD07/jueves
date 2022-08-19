<?php
$nombre=$_POST["nombre"];
$clave=$_POST["clave"];
$conexion=mysqli_connect("localhost","root","","usuarios");
$consulta="select * from registro where usuario='$nombre' and clave='$clave'"; //Consulta
$resultado=mysqli_query($conexion,$consulta);

    if($resultado->num_rows>0){//si encontro en la base de datos, cargue la pagina bienvenidos.
        header("location:bienvenido.html");
    }
    else{
        echo "Error en Datos de Autenticacion"; //echo es para imprimir
    }
    ?>