function supports_html5_storage() {
	try {
		return 'localStorage' in window && window['localStorage'] !== null;
	} catch (e) {
		return false;
		}
}

function openOptions () {
	$("#mainArea").slideToggle('slow');
	$("#optionArea").slideToggle('slow');
	//$("#boxArea").slideToggle('slow');
}

function setHomeConfirm() {

	  if ($('#mainArea:visible').length > 0) {
		$("#predictionArea").slideToggle('slow');
		$("#homeArea").slideToggle('slow');
	}
}

function resetLocalData() {
	if (supports_html5_storage) {
		localStorage.route = 0;
		localStorage.direction = 0;
		localStorage.stop = 0;
	}
}

function setNewLocalData() {
	if (supports_html5_storage) {
		localStorage.route = document.boxForm.routeBox.options.selectedIndex;
		localStorage.direction = document.boxForm.directionBox.options.selectedIndex;
		localStorage.stop = document.boxForm.stopBox.options.selectedIndex;
	}
} 

function setAgency(agency) {

	localStorage.busAgency = agency;

	if(localStorage.busAgency=="guelph") {
		document.getElementById("agencyName").innerHTML="Guelph";
	}
	
	else if(localStorage.busAgency=="thunderbay") {
		document.getElementById("agencyName").innerHTML="Thunder Bay";
	}
	
	else if(localStorage.busAgency=="ttc") {
		document.getElementById("agencyName").innerHTML="TTC";
	}
			
}

function setHome() {
	if(supports_html5_storage) {
				localStorage.homeAgency = localStorage.busAgency;
				localStorage.homeRoute = localStorage.route;
				localStorage.homeDirection = localStorage.direction;
				localStorage.homeStop = localStorage.stop;
				document.getElementById('homeIcon').style.visibility='visible';		
				document.getElementById('nohomeIcon').style.visibility='hidden';
				
	/*				alert("Agency: " + localStorage.homeAgency +
						"Route: " + localStorage.homeRoute +
						"Direction: " + localStorage.homeDirection +
						"Stop: " + localStorage.homeStop); */
	}

}

function goHome (route) {
	if (supports_html5_storage) {		
			setAgency(localStorage.homeAgency);
			localStorage.busAgency = localStorage.homeAgency;
			localStorage.route = localStorage.homeRoute;
			localStorage.direction = localStorage.homeDirection
			localStorage.stop = localStorage.homeStop
			getRoute(route, localStorage.homeRoute, localStorage.homeDirection, localStorage.homeStop);
	}	
}

function clearHome() {

	localStorage.homeAgency = "";
	localStorage.homeRoute = "";
	localStorage.homeDirection = "";
	localStorage.homeStop = "";
	openOptions();
	
	document.getElementById('homeIcon').style.visibility='hidden';		
	document.getElementById('nohomeIcon').style.visibility='visible';
	
}


