//TODO: Attach survey id to survey page and get it from that instead of the url



// Edit survey title by changing element to input
$('.survey').on('click', '#survey-title-box', function() {
	$isEditable = $('#survey-color').is('input');

	if(!$isEditable) {
		$('#survey-color').replaceWith('<input class="fill-width" id="survey-color" value="' + $('#survey-color').text() + '"></input>');
		$('#survey-color').focus().val($('#survey-color').val());
	}
});

// If survey color loses focus
$('.survey').on('blur', '#survey-title-box', function(event) {
	//console.log('blur');
	$('#survey-color').replaceWith('<div class="highlight" id="survey-color">' + $('#survey-color').val() + '</div>');

	//Update survey color
	let baseUri = event.currentTarget.baseURI;
	let userId = getUserId(baseUri);
  let surveyId = $('.survey')[0].id.split('-')[1];
	updateSurveyColor(userId, surveyId, $('#survey-color').text());

});


// Functions ordered alphabetical

var getSurveyId = function(baseUri) {
	let surveyRegex = /surveys\/([0-9]+)/;
	let surveyMatch = surveyRegex.exec(baseUri);
	return surveyMatch[1];
}

var getUserId = function(baseUri) {
	let userRegex = /users\/([0-9]+)/;
	let userMatch = userRegex.exec(baseUri);
	return userMatch[1];
}

//update survey title by calling controller with put method
var updateSurveyColor = function(userId, surveyId, newSurveyColor) {
	//console.log("Update survey color " + newSurveyColor);
	let dataToSend = { id: surveyId, user_id: userId, survey: { color: newSurveyColor }};

	$.ajax({
		url: '/users/' + userId + '/surveys/' + surveyId, 
		method: "PUT",
		data: dataToSend,
		dataType: "json"
	}).success(function(data) {
			console.log("success survey color updated");
			$('#survey-title-box').css('background-color', newSurveyColor);
			$('.active-question').css('border', 'solid ' + newSurveyColor);
			//console.log(data);
	}).error(function(error) {
			console.log("error survey color");
			console.log(error);
	});

};

$('.survey').on('click', '#survey-description', function(event) {
	$isEditable = $('#survey-description').is('input');

	if(!$isEditable) {
		$('#survey-description').replaceWith('<input class="fill-width" id="survey-description" type="text" name="description" placeholder="Description" value="' + $('#survey-description').text() + '"></input>');
		$('#survey-description').focus().val($('#survey-description').val());
	}
});

$('.survey').on('blur', '#survey-description', function(event) {
	console.log('blur');

	$('#survey-description').replaceWith('<div class="fill-width highlight" id="survey-description">' + $('#survey-description').val() + '</div>');

	let baseUri = event.currentTarget.baseURI;
	let userId = getUserId(baseUri);
  let surveyId = $('.survey')[0].id.split('-')[1];
	updateSurveyDescription(userId, surveyId, $('#survey-description').text());

});

var updateSurveyDescription = function(userId, surveyId, newSurveyDescription) {

	let dataToSend = { id: surveyId, user_id: userId, survey: { description: newSurveyDescription }};

	$.ajax({
		url: '/users/' + userId + '/surveys/' + surveyId, 
		method: "PUT",
		data: dataToSend,
		dataType: "json"
	}).success(function(data) {
			console.log("success survey description updated");
			console.log(data);
	}).error(function(error) {
			console.log("error survey survey-description not updated");
			console.log(error);
	});

};

