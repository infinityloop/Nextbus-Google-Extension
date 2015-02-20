/***************************/
//@Author: Adrian "yEnS" Mato Gondelle & Ivan Guardado Castro
//@website: www.yensdesign.com
//@email: yensamg@gmail.com
//@license: Feel free to use it, but keep this credits please!	
//@editor: Kelvin Lau				
/***************************/

$(document).ready(function(){
	//global vars
	var form = $("#contactForm");
	var name = $("#name");
	var nameInfo = $("#nameInfo");
	var email = $("#email");
	var emailInfo = $("#emailInfo");
	var subject = $("#subject");
	var subjectInfo = $("#subjectInfo");
/*	var pass1 = $("#pass1");
	var pass1Info = $("#pass1Info");
	var pass2 = $("#pass2");
	var pass2Info = $("#pass2Info");*/
	var message = $("#message");
	
	//On blur
	name.blur(validateName);
	email.blur(validateEmail);
	subject.blur(validateSubject);
/*	pass1.blur(validatePass1);
	pass2.blur(validatePass2);*/
	
	//On key press
	name.keyup(validateName);
/*	pass1.keyup(validatePass1);
	pass2.keyup(validatePass2);*/
	message.keyup(validateMessage);
	
	//On Submitting
	form.submit(function(){
//		if(validateName() & validateEmail() & validatePass1() & validatePass2() & validateMessage())
		if(validateName() & validateEmail() & validateSubject() & validateMessage())
			return true
		else
			return false;
	});
	
	//validation functions
	function validateEmail(){
		//testing regular expression
		var a = $("#email").val();
		var filter = /^[a-zA-Z0-9]+[a-zA-Z0-9_.-]+[a-zA-Z0-9_-]+@[a-zA-Z0-9]+[a-zA-Z0-9.-]+[a-zA-Z0-9]+.[a-z]{2,4}$/;
		//if it's valid email
		if(filter.test(a)){
			email.removeClass("error");
			emailInfo.text("");
			emailInfo.removeClass("error");
			return true;
		}
		//if it's NOT valid
		else{
			email.addClass("error");
			emailInfo.text("How can I get in touch with you?");
			emailInfo.addClass("error");
			return false;
		}
	}
	function validateName(){
		//if it's NOT valid
		if(name.val().length < 1){
			name.addClass("error");
			nameInfo.text("What's your name?");
			nameInfo.addClass("error");
			return false;
		}
		//if it's valid
		else{
			name.removeClass("error");
			nameInfo.text("");
			nameInfo.removeClass("error");
			return true;
		}
	}
	
	function validateSubject(){
		//if it's not valid
		if(subject.val().length<1) {
			subject.addClass("error");
			subjectInfo.text("Why are you contacting me?");
			subjectInfo.addClass("error");
		}
		//If it is valid
		else{
			subject.removeClass("error");
			subjectInfo.text("");
			subjectInfo.removeClass("error")
			return true;
		}
	}
/*	function validatePass1(){
		var a = $("#password1");
		var b = $("#password2");

		//it's NOT valid
		if(pass1.val().length <5){
			pass1.addClass("error");
			pass1Info.text("Ey! Remember: At least 5 characters: letters, numbers and '_'");
			pass1Info.addClass("error");
			return false;
		}
		//it's valid
		else{			
			pass1.removeClass("error");
			pass1Info.text("At least 5 characters: letters, numbers and '_'");
			pass1Info.removeClass("error");
			validatePass2();
			return true;
		}
	}
	function validatePass2(){
		var a = $("#password1");
		var b = $("#password2");
		//are NOT valid
		if( pass1.val() != pass2.val() ){
			pass2.addClass("error");
			pass2Info.text("Passwords doesn't match!");
			pass2Info.addClass("error");
			return false;
		}
		//are valid
		else{
			pass2.removeClass("error");
			pass2Info.text("Confirm password");
			pass2Info.removeClass("error");
			return true;
		}
	}*/
	function validateMessage(){
		//it's NOT valid
		if(message.val().length < 1){
			message.addClass("error");
			return false;
		}
		//it's valid
		else{			
			message.removeClass("error");
			return true;
		}
	}
});