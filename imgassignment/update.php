<?php 
require 'dbconfig/config.php';
$courses=$_POST["courses"];
$dname=$_POST["dname"];
$downloads=$_POST["downloads"];
$query= " update coursetable set downloads = $downloads WHERE coursename='$courses' AND displayname='$dname'";
$query_run=mysqli_query($con,$query);
echo "done";




 ?>