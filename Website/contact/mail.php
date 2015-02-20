

<?php
	$to = "kelvin@infinityloop.ca"; 
	$name = $_POST["name"];
	$from = $_POST["email"];
	$subject = $_POST["subject"];
	$message = "You have received a message from ".$from."\r\n"."\r\n";
	$message .= "Name: ".$name."\r\n";
	$message .= "Message: "."\r\n";
	$message .= $_POST["message"];

	mail($to, $subject, $message);
	/*
	echo "To: ".$to."\r\n";
	echo "From: ".$from."\r\n";
	echo "Subject: ".$subject."\r\n";
	echo "Message: ".$message."\r\n";
	echo "Success!";*/

?>
<html>
	<head>
		<title>Contact Me</title>
		<link rel="stylesheet" href="../style.css" type="text/css"/>
		<link rel="stylesheet" href="contact_style.css" type="text/css"/>
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js" type="text/javascript"></script>
		<script src="../js/validator.jquery.js" type="text/javascript"></script>
		<meta http-equiv="Content-Type" content="text/html"/>
	</head>

	<body>
		<?php include ('../header.php'); ?>
		 
		<div> 	
			<p id="thanks">Thank you for contacting us. </br>We will be in touch with you very soon.</p>
		</div>
					
		<?php include ('../footer.php'); ?>
	</body>
</html>