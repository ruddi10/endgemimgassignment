<?php
require 'dbconfig/config.php';

?>
<!DOCTYPE html>
<html>
<head>
	<title>ADD MATERIAL changes</title>
	<link rel="stylesheet" type="text/css" href="style.css">
	<meta name="viewport" content="width=device-width,initial-scale=1.0">

	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
	
	<div class="topnav">
	<img class="logo" src="logo.jpg">
	<div></div>
</div>
</head>
<body>
<div class="wrap">
	<div>Add Material</div>
 	<form class="myform" action="addition.php" method="POST" enctype="multipart/form-data">
		 <select class="inputvalue" name="courses" required>
    <option value="Course1">Course 1</option>
    <option value="Course2">Course 2</option>
    <option value="Course3">Course 3</option>
    <option value="Course4">Course 4</option>
  </select><br>
  <input class="inputvalue" type="text" name="dname" placeholder="Display Name" required/><br>
  <input class="upload" type="file" name="myFile" required /><br>
  <input name="submit" class="submitbutton" type="submit" value="SUBMIT" /><br>
  <a href="index.php"><input class="backbutton" type="button" value="Back to Home"/></a><br>
	</form>
</div>
<?php
if(isset($_POST['submit']))

{
	$courses=$_POST["courses"];
	$dname=$_POST["dname"];
	$myFile=$_FILES["myFile"];
	$myFile_name=$_FILES["myFile"]['name'];
	$myFile_type=$_FILES["myFile"]["type"];
	$myFile_temploc=$_FILES["myFile"]["tmp_name"];
	$myFile_stor="upload/".$myFile_name;
	$ext=explode('.', $myFile_name);
	$actualExt=strtolower(end($ext));
	echo "<script >console.log('".$myFile."')</script>";
	$query="Select * from coursetable WHERE coursename='$courses' AND displayname='$dname'";
	$query_run=mysqli_query($con,$query);
	if(mysqli_num_rows($query_run)>0){
		echo "<script >alert('Display name already exist kindly change')</script>";
	}
	else
	{		if($actualExt!=='pdf')
		{
			echo "<script >alert('File choosen is not a pdf ')</script>";
		}
		else
		{

			move_uploaded_file($myFile_temploc, $myFile_stor);
			$query="insert into coursetable values('$courses','$dname','$myFile_stor',0)";
			$query_run=mysqli_query($con,$query);
			if($query_run){
			echo "<script >alert('Successfully Added')</script>";
			$conn->close();
			}
			else
			{
			echo "<script >alert('Error Try Again')</script>";
			}
		}
	
}
}
?>
</body>
</html>