<html>

		<head>
		
		<link rel="stylesheet" href="style.css" type="text/css/">
<!--		<script src="//ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js" type="text/javascript"></script> -->

		</head>
		
		<body>
		
			<?php include ('header.php'); ?>
				
			<div id="content">
	
				<h1>Contact Me</h1>
				
				<table class = "contentTable">
					<tr> 
						<td class ="contactForm">
							<form name="contact"  method="post" action="mail.php">
								<p>Name:</br>
								<input type="text" class="contactInput" name="nameBox" size="50" ></input></p>
								
								<p>E-mail:</br>
								<input type="text" class="contactInput" name="emailBox" size="50" ></input></p>

								<p>Subject:</br>
								<input type="text" class="contactInput" name="subjectBox" size="50" ></input></p>

								<p>Message:</br>
								<textarea class="contactInput" name="messageBox" cols="50" rows="7"></textarea></p>
								
								<input type="submit" class="sendButton" value="Send"></input>
							</form>
						</td>
						
						<td class = "contactInfo">
							<div class = "contactText">
								<p>Contact Information:</p>
								<p>Kelvin Lau </br>
										Guelph, Ontario</br>
										Canada</br>
										Phone: +1(519)-546-8343</br>
										Email: kelvin@klau.ca </br> </p>
								<p>Find me on:
								
								
								</p>
							
							</div>
						</td>
					</tr>
				
			</div>
				
		</body>
		
		
</html>