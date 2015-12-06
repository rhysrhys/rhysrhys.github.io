$(function(){

$('img').on('click', askQuestions);

var firstName = prompt('What is your first Name?');
var lastName = prompt('What is your last name'); 

var fullName = firstName + ' ' + lastName;
console.log('User\'s name is: ' + fullName);
$('h2').text('Hello '+fullName);

var age = prompt('How old are you?');
age = parseInt(age);

	// if the request is true then the JS will be executed. If they are over 18 then the sign will be displayed. 
	if (age>=18) {
		console.log('User is an adult');
		alert('Welcome, adult!');
	} 
	//else if is an otherwise command. if the user is not over 18 then run this. 
	else if(age >=13) {
		console.log('User is a teenager');
		alert('come back in a few years!');
	}
	else {
		console.log('User is a child');
		alert('Go away, Child!');
	}

	if(firstName.toLowerCase() == 'general' && lastName.toLowerCase() != 'assembly'){
		console.log('Rhys is here');
		alert('Morning General');
		
	}

	var faveColour=prompt('What is your favourite colour?').toLowerCase();

	if(faveColour == 'red' ||
		faveColour == 'green' ||
		faveColour == 'blue' ||
		favourColour == 'yellow'){

		$('h1').css('color', faveColour);
	}

	if(firstName == 'Rhys'){
		window.confirm('piss off');
	}
	
}b






/* JS comment */
// JS line comment
//when the page has loaded. function means do this stuff, then put it between curly brackets. 
$(function() {

	//hide all the things
	$('h3').next().hide();

	//when the user clicks on an h3
	$('h3').on('click', function() {

			//close all the sections
			$('h3').not(this).next().slideUp(100);

			// .hide the next element. .toggle the next element. add time in miliseconds for the slide time. 
			$(this).next().slideToggle(200);
			//this means which ever h3 has been clicked on, then hide the next property. know as dom traversal
	});

});

