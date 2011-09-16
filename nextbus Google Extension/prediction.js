function getRoute(route, index, directionIndex, stopIndex) {
	
	clearSelectBox("routeBox");
	$("#mainArea").mask("loading...");


//	alert(localStorage.busAgency);

	if (localStorage.busAgency != "ttc") {
		var xmlDoc = new loadXMLDoc(
			"http://www.nextbus.com/s/COM.NextBus.Servlets.XMLFeed?"+
			"command=routeList"+
			"&a=" +
			localStorage.busAgency);
	}
	
/* For TTC http://webservices.nextbus.com/service/publicXMLFeed?command=routeList&a=ttc */	
	else {	
		var xmlDoc = new loadXMLDoc(
			"http://webservices.nextbus.com/service/publicXMLFeed?" +
			"command=routeList"+
			"&a=" +
			localStorage.busAgency);
	}	
	
	var routes = xmlDoc.getElementsByTagName("route");
	
	for(var i=0; i<routes.length; i++) {
		route.title[i] = routes[i].getAttribute("title");
		route.tag[i] = routes[i].getAttribute("tag");
		document.boxForm.routeBox.options[document.boxForm.routeBox.options.length] = new Option(route.title[i]);
	}
	
	document.boxForm.routeBox.options[index].selected=true;
	getDirection(route, route.tag[index], directionIndex, stopIndex);

}

function getDirection(route, routeID, index, stopIndex) {

		clearSelectBox("directionBox");
		
	if (localStorage.busAgency != "ttc") {
	var xmlDoc = new loadXMLDoc(
			"http://www.nextbus.com/s/COM.NextBus.Servlets.XMLFeed?" +
			"command=routeConfig" +
			"&a=" +
			localStorage.busAgency +
			"&r=" +
			routeID);
	}					
				
	
	else if (localStorage.busAgency == "ttc") {		
		var xmlDoc = new loadXMLDoc(
			"http://webservices.nextbus.com/service/publicXMLFeed?" +
			"command=routeConfig" +
			"&a=" +
			localStorage.busAgency +
			"&r=" +
			routeID);
	}

	var directions = xmlDoc.getElementsByTagName("direction");					
						
	for(var i=0; i<directions.length; i++) {
		route.direction[i] = directions[i].getAttribute("title");
		document.boxForm.directionBox.options[document.boxForm.directionBox.options.length] = new Option(route.direction[i]);
	}
	
	document.boxForm.directionBox.options[index].selected=true;
	getStop(route, route.tag[document.boxForm.routeBox.options.selectedIndex], index, stopIndex);
		

}

function getStop(route, routeID, directionIndex, index) {
	
	clearSelectBox("stopBox");
	for(y=0; y<route.stop.length; y++) {
		route.stopName[y]=null;
		route.stop[y]=null;
	}

	if (localStorage.busAgency != "ttc") {
		var xmlDoc = new loadXMLDoc(
			"http://www.nextbus.com/s/COM.NextBus.Servlets.XMLFeed?" +
			"command=routeConfig" +
			"&a=" +
			localStorage.busAgency +
			"&r=" +
			routeID);
	}

	else if (localStorage.busAgency == "ttc") {		
		var xmlDoc = new loadXMLDoc(
			"http://webservices.nextbus.com/service/publicXMLFeed?" +
			"command=routeConfig" +
			"&a=" +
			localStorage.busAgency +
			"&r=" +
			routeID);
	}		

	var directions = xmlDoc.getElementsByTagName("direction");
	var stops = directions[directionIndex].childNodes;
	var j = 0;
	
	for (var i=1; i<stops.length; i+=2) {
	
		route.stop[j] = stops[i].getAttribute("tag") ;
//			document.write(route.stop[j] + "<br/>");
//			document.boxForm.stopBox.options[document.boxForm.stopBox.options.length] = new Option(route.stop[j]);
		j++;
	}
	
	var stops = xmlDoc.getElementsByTagName("stop");
	var count=0;
	var x=0;
	for (var z=0; z<j; z++) {
		x=0;
		while ( route.stop[z] != stops[x].getAttribute("tag") && x<stops.length-1) {
				x++;
		}
			route.stopName[z] = stops[x].getAttribute("title") ;
			document.boxForm.stopBox.options[document.boxForm.stopBox.options.length] = new Option(route.stopName[z]);
	} 
	
	document.boxForm.stopBox.options[index].selected=true;
	getPrediction(route, routeID, route.stop[document.boxForm.stopBox.options.selectedIndex]);
}

function getPrediction (route, routeID, stop) {

	if (localStorage.busAgency != "ttc") {		
		var xmlDoc = new loadXMLDoc(
			"http://www.nextbus.com/s/COM.NextBus.Servlets.XMLFeed?" +
			"command=predictions" +
			"&a=" +
			localStorage.busAgency +
			"&r=" +
			routeID +
			"&s=" +
			stop);
	}
	
	else if (localStorage.busAgency == "ttc") {		
		var xmlDoc = new loadXMLDoc(
			"http://webservices.nextbus.com/service/publicXMLFeed?" +
			"command=predictions" +
			"&a=" +
			localStorage.busAgency +
			"&r=" +
			routeID +
			"&s=" +
			stop);
	}
	
	var predictions = xmlDoc.getElementsByTagName("prediction");
	
	for(var i=0; i<route.prediction.length; i++) {
		route.prediction[i] = null;
	}
	
	for (var i=0; i<predictions.length; i++) {

		if(predictions[i].getAttribute("minutes")) {
			route.prediction[i] = predictions[i].getAttribute("minutes");
		}

	}
	
//		document.write(route.prediction[0]);
	if(route.prediction[1]) {
		changePredictions("predictionSecond", route.prediction[1], false);
	}
	changePredictions("predictionFirst", route.prediction[0], true);

}

function changePredictions (element, prediction, first) {

	if (prediction==null) {
		document.getElementById("status").innerHTML="Predictions Unavailabe";
		document.getElementById(element).innerHTML = "";
		document.getElementById("predictionSecond").innerHTML = "";
		document.getElementById("predictionFirstMinute").innerHTML = "";
		document.getElementById("predictionSecondMinute").innerHTML = "";
		chrome.browserAction.setBadgeText({text: ''});
	}
	
	else if (prediction!=0 && prediction>0) {
		document.getElementById("status").innerHTML = "";
		document.getElementById(element).innerHTML = prediction;
		if (prediction!=1) {
			document.getElementById("predictionFirstMinute").innerHTML = "Minutes";
		}
		
		else {
			document.getElementById("predictionFirstMinute").innerHTML = "Minute";			
		}
		
		if(first) {
			if (prediction <= 5) {
				chrome.browserAction.setBadgeBackgroundColor({color:[200, 0, 0, 255]});
			}
			
			else {
				chrome.browserAction.setBadgeBackgroundColor({color:[0, 90, 0, 255]});
			}

			
			chrome.browserAction.setBadgeText({text: prediction});
		}
						
		else {
				document.getElementById("predictionSecondMinute").innerHTML = "Minutes";
		}		
	}
	
	else {
				document.getElementById("status").innerHTML = "Arriving";
				document.getElementById(element).innerHTML = "";
				document.getElementById("predictionFirstMinute").innerHTML = "";
				document.getElementById("predictionSecondMinute").innerHTML = "Minutes";
				if(first) {
					chrome.browserAction.setBadgeBackgroundColor({color:[230, 0, 0, 255]});
					chrome.browserAction.setBadgeText({text: "Arrv"});
				}
	}
}

function clearSelectBox (element) {
	document.getElementById(element).innerHTML="";
}