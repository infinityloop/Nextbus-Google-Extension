function setAlarm() {

	if (supports_html5_storage) {
	
		if (localStorage.alarm=="true") {
			document.iconArea.alarm.src="/image/alarmOff.png";
			localStorage.alarm = false;
		}
		
		else {
			if (localStorage.alarmTime == null) {
				localStorage.alarmTime = 0;
			}
			
			alarmTime = prompt("Set Alarm: Minutes before bus arrives:");
			
			if (alarmTime==null || alarmTime==0) {
				localStorage.alarm = false;
				return;
			}
			
			if (numCheck(alarmTime)) {
				localStorage.alarmTime = alarmTime;
			}
			
			else {
				setAlarm();
				return;
			}

			document.iconArea.alarm.src="/image/alarmOn.png";
			localStorage.alarm = true;
			
			}
	}
	
	else {
		alert("Nextbus Alarm is only available in HTML 5 Compatible Browsers");
	}

}
function getAlarm(route) {

//	alert(localStorage.alarm +" --- " + localStorage.alarmTime);
	if (supports_html5_storage) {
		if (localStorage.alarm == null){
			localStorage.alarm = false;
		}

		else if (localStorage.alarm=="true") {

			if (localStorage.alarmTime!=null && localStorage.alarmTime==route.prediction[0]) {
				alert("Alert: Bus is arriving in " + route.prediction[0] + " minutes");
				setAlarm();
			}

			document.iconArea.alarm.src="/image/alarmOn.png";
		
		}
		
		else if (localStorage.alarm==false) {
			
			document.iconArea.alarm.src="/image/alarmOff.png";
		}
	}
}

function numCheck (string) {
	
	n = parseInt(string);
	
	if (isNaN(string)) {
	   alert("Error: Alarm must be a number");
	   return false;
	}
	
	else {
		return true;
	}
	
}