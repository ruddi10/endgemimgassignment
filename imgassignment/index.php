<?php
require 'dbconfig/config.php';

?>
<!DOCTYPE html>
<html>
<head>
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
	<link rel="stylesheet" type="text/css" href="style.css">
	<meta name="viewport" content="width=device-width,initial-scale=1.0">

	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
	
	<title>HOME</title>
	<div class="topnav">
	<img class="logo" src="logo.jpg">
  <div class="course">
  <span  id="C1" class=" ck1 active">Course 1</span>
  <span  id="C2" class="ck2" >Course 2</span>
  <span id="C3" class="ck3">Course 3</span>
  <span id="C4" class="ck4">Course 4</span>
</div>
<div class="dropdown">
    <button class=" k btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown"><span id="mc">Course 1</span>
    <i class="down"> </i></button>
    <ul class="dropdown-menu">
      <li><a href="#" class="cm1">Course 1</a></li>
      <li><a href="#" class="cm2">Course 2</a></li>
      <li><a href="#" class="cm3">Course 3</a></li>
      <li><a href="#" class="cm4">Course 4</a></li>
    </ul>
  </div>
<div class="side">
	<a href="addition.php" ><button class="add"><b>+</b></button></a>
	<span style="font-size:30px;cursor:pointer" onclick="openNav()" class="ham">&#9776;</span>
</div>
</div>
</head>
<body>
<div id="mySidenav" class="sidenav">
 <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
 <h2 class="text">TOP GEMS</h2>
 <div class="cs1">

</div>
<div class="cs2  ">
</div>
<div class="cs3 ">

</div>
<div class="cs4">

</div>
</div>
<?php
$query = "SELECT * from coursetable where coursename='Course1'";
$query_run=mysqli_query($con,$query);
echo "<div class=\"Course1\">";
 while($row = mysqli_fetch_assoc($query_run)){
 	
	echo "<div class=\"c1\">
	<div class=\"fa fa-file-pdf-o\" style=\"font-size:2.2rem\"><h6>".$row['displayname']."</h6></div>
	<div class=\"download\">
		<span>Total Downloads:<span class=\"num\">".$row['downloads']."</span></span>
		<a href=\"".$row['uploadedfile']."\" download onclick=\"doinc()\" class=\"btn fa fa-download\"> </a>
	</div>
</div>";
 }
 echo "</div>";

 $query = "SELECT * from coursetable where coursename='Course2'";
$query_run=mysqli_query($con,$query);
echo "<div class=\"Course2 hidden\">";
 while($row = mysqli_fetch_assoc($query_run)){
 	
	echo "<div class=\"c1\">
	<div class=\"fa fa-file-pdf-o\" style=\"font-size:2.2rem\"><h6>".$row['displayname']."</h6></div>
	<div class=\"download\">
		<span>Total Downloads:<span class=\"num\">".$row['downloads']."</span></span>
		<a  href=\"".$row['uploadedfile']."\" download onclick=\"doinc()\" class=\"btn fa fa-download\"> </a>
	</div>
</div>";
 }
 echo "</div>";

 $query = "SELECT * from coursetable where coursename='Course3'";
$query_run=mysqli_query($con,$query);
echo "<div class=\"Course3 hidden\">";
 while($row = mysqli_fetch_assoc($query_run)){
 	
	echo "<div class=\"c1\">
	<div class=\"fa fa-file-pdf-o\" style=\"font-size:2.2rem\"><h6>".$row['displayname']."</h6></div>
	<div class=\"download\">
		<span>Total Downloads:<span class=\"num\">".$row['downloads']."</span></span>
		<a  href=\"".$row['uploadedfile']."\" download onclick=\"doinc()\" class=\"btn fa fa-download\"> </a>
	</div>
</div>";
 }
 echo "</div>";

 $query = "SELECT * from coursetable where coursename='Course4'";
$query_run=mysqli_query($con,$query);
echo "<div class=\"Course4 hidden\">";
 while($row = mysqli_fetch_assoc($query_run)){
 	
	echo "<div class=\"c1\">
	<div class=\"fa fa-file-pdf-o\" style=\"font-size:2.2rem\"><h6>".$row['displayname']."</h6></div>
	<div class=\"download\">
		<span>Total Downloads:<span class=\"num\">".$row['downloads']."</span></span>
		<a  href=\"".$row['uploadedfile']."\" download onclick=\"doinc()\" class=\"btn fa fa-download\"> </a>
	</div>
</div>";
 }
 echo "</div>";

?>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<script src="main.js"></script>

</body>
</html> 
