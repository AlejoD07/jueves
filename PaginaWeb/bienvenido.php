<?php
session_start();
if(!isset($_SESSION["sesion_username"])){
    header("location:login.php");
}else{
    ?>
    <div id="Bienvenido">
    <h2>Bienvenido, <span><?php echo $_SESSION['session_username'];?>!</span></h2>
    <p><a href="logout.php">Finalice</a> sesión aquí!</p>
    </div>
    <?php
}
?>