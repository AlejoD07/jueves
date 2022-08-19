<?php
$mysqli = new mysqli("localhost", "root", "", "usuarios");
if ($mysqli->connect_errno) {
    echo "Fallo al conectar: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;
}
echo $mysqli->host_info . "\n";

$mysqli = new mysqli("127.0.0.1", "root", "", "usuarios", 3306);
if ($mysqli->connect_errno) {
    echo "Fallo al conectar: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;
}
echo $mysqli->host_info . "\n";
?>