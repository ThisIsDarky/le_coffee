<?php

$nombre = $_POST['nombre'];
$clave = $_POST['clave'];
$mesa = $_POST['mesa'];


session_start();

$_SESSION['cliente'] = $nombre;
$_SESSION['mesa'] = $mesa;



