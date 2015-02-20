<!--Projects Page
		Author: Kelvin Lau
-->

<html>

		<head>
		
		<link rel="stylesheet" href="../style.css" type="text/css">
		<script src="//ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js" type="text/javascript"></script>
		</head>
		
		<body>
		
			<?php include ('../header.php'); ?>

			<div id="content">
				<h1>Projects</h1>
				
					<div class="leftContent">
						<p> The Google Chrome NextBus Extension allows users to quickly and easily view bus times
								without having to open a website. The application runs in the background and provides 
								a small badge to show the next bus arrival time without having to open the program for maximum convenience. 
								This extension also includes a link to a google map of live updated bus locations and stops. </p>
								
						<p> Currently the extension supports Guelph Transit, Thunder Bay Transit, and the Toronto Transit Commission.
								There are no future plans for support additional stops for now, but the stops listed on the NextBus can be
								added to the extension. </p>
								
								
						<p>The extension utilizes the 
						<a href="http://www.nextbus.com/xmlFeedDocs/NextBusXMLFeed.pdf">
								nextbus api</a> to retrieve xml formatted data which is then interpreted 
								by the program through AJAX calls.</p>
								
						<p>Unfortunately due to a change in the API, the extension is no longer active. However some transit systems 
								still utilizes the nextbus API so I may revisit it in the future if it becomes updated.</p>

								
						<a href="https://github.com/infinityloop/Nextbus-Google-Extension">
						Source Code on GitHub</a>
					</div>
						
					<div class="rightContent">
						<img src="../images/smallscreenshot.png" alt="Google Chrome NextBus Extension"> </img>						
					</div>
				
			</div>
			
			<?php include ('../footer.php'); ?>	
		</body>
		
		
</html>