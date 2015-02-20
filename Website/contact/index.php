<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="en" xml:lang="en">
    
		<head>
			<title>Contact Me</title>
			<link rel="stylesheet" href="../style.css" type="text/css"/>
			<link rel="stylesheet" href="contact_style.css" type="text/css"/>
			<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js" type="text/javascript"></script>
			<script src="../js/validator.jquery.js" type="text/javascript"></script>
			<meta http-equiv="Content-Type" content="text/html"/>
		</head>
		
		<body>
		
			<script type="text/javascript">

						
			</script>
		
			<?php include ('../header.php'); ?>
				
			<div id="content">
	
				<h1>Contact Me</h1>
				
				
				<table class = "contentTable">
					<tr> 
						<td>
							<form name="contact" id="contactForm"  method="post" action="mail.php">
								<div>
									<label>Name:</label></br>
									<input type="text" id="name" name="name" size="50" ></input>
									<span id="nameInfo"></span> </p>
								</div>
								
								<div>
									<label>E-mail:</label></br>
									<input type="text" id="email" name="email" size="50" ></input>
									<span id="emailInfo"></span> </p>
								</div>
								
								<div>
									<label>Subject:</label></br>
									<input type="text" id="subject" name="subject" size="50" ></input>
									<span id="subjectInfo"></span> </p>
								</div>
								
								<div>
									<label>Message:</label></br>
									<textarea id="message" name="message" cols="50" rows="7"></textarea>
									<span id="messageInfo"></span> </p>
								</div>
								
								<input type="submit" class="sendButton" value="Submit", id="submit", name="submit"></input>
							</form>
						</td>
						
						<td id = "contactInfo">
							<div class = "contactText">
								<p style="font-weight:bold;">Contact Information:</p>
								<p>Kelvin Lau </br>
										Toronto, Ontario</br>
										Canada</br>
										Phone: +1(905)-947-0888</br>
										Email: 
										<a href="mailto:Kelvin@infinityloop.ca" title="[GMCP] Compose a new mail to Kelvin@infinityloop.ca" 
										onclick="window.open('https://mail.google.com/mail/u/0/?view=cm&amp;fs=1&amp;tf=1&amp;to=Kelvin@infinityloop.ca',
										'Compose new message','width=640,height=480');return false" rel="noreferrer">Kelvin@infinityloop.ca</a> </br> </p>
								<p style="font-weight:bold;">Connect with me: </p>
								<a href="https://www.facebook.com/kelvinlooplau"><img src="../images/facebook.png" alt="Facebook" style="padding-left:5px;"></img></a>
								<a href="http://www.gplus.to/kelvinlau"><img src="../images/GooglePlus.png" alt="Google+" style="padding-left:5px;"></img></a>
								<a href="http://twitter.com/loopcow"><img src="../images/twitter.png" alt="Twitter" style="padding-left:5px;"></img></a>								
								<a href="http://ca.linkedin.com/in/laukelvin"><img src="../images/linkedin.png" alt="LinkedIn" style="padding-left:5px;"></img></a>							
							</div>
						</td>
					</tr>
				</table>		
			</div>
			
			<?php include ('../footer.php'); ?>
		</body>
		
		
</html>