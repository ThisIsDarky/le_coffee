<?php

session_start();

$dataUser = array (

    "usuario" => $_SESSION['cliente'],
    "mesa" => $_SESSION['mesa']

);

$var = json_encode($dataUser);
echo $var;