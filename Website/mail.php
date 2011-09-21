<?php

		$to = "kelvin.lau222@gmail.com";
		$subject = $_REQUEST['subjectBox'];
		$message = $_REQUEST['messageBox'];
		$from = $_REQUEST['nameBox'];
		$header = "From: " . $from;
		$sent = mail($to,$subject,$message,$headers);
		if($sent)
			{print "Your mail was sent successfully"; }
		else
			{print "We encountered an error sending your mail"; }
?>