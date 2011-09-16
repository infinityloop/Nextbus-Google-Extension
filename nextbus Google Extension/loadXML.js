function loadXMLDoc(dname) {

	if (window.XMLHttpRequest)
	{
		xhttp=new XMLHttpRequest();  
	}
	else
	{
		xhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	
	xhttp.addEventListener("load", onTransferComplete, false);  
	xhttp.addEventListener("error", onTransferFailed, false);  
	xhttp.addEventListener("abort", onTransferFailed, false);
	
	xhttp.open("GET",dname,false);
	xhttp.send();
	return xhttp.responseXML;
}


function onTransferFailed(e) { 
	$("#mainArea").unmask();
	document.getElementById("status").innerHTML = "Unable to Connect";
	document.getElementById("predictionFirst").innerHTML = "";		
//	alert("Error: Unable to establish connection with nextbus.");  
}  

function onTransferComplete(e) {  
	$("#mainArea").unmask();
} 