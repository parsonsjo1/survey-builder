//TODO: Attach survey id to survey page and get it from that instead of the url

// Edit survey title by changing element to input
$('#survey-title-box').on('click', '#survey-title', function() {
	$isEditable = $('#survey-title').is('input');

	if(!$isEditable) {
		$('#survey-title').replaceWith('<input class="fill-width" id="survey-title" value="' + $('#survey-title').text() + '">' + '</input>');
		$('#survey-title').focus().val($('#survey-title').val());
	}
});

// If survey title loses focus
$('#survey-title-box').on('blur', '#survey-title', function(event) {
	//console.log('blur');
	$('#survey-title').replaceWith('<div id="survey-title">' + $('#survey-title').val() + '</div>');

	//Update survey title
	let baseUri = event.currentTarget.baseURI;
	let userId = getUserId(baseUri);
	let surveyId = getSurveyId(baseUri);
	updateSurveyTitle(userId, surveyId, $('#survey-title').text());

});

// Edit survey title by changing element to input
$('.survey').on('click', '#survey-title-box', function() {
	$isEditable = $('#survey-color').is('input');

	if(!$isEditable) {
		$('#survey-color').replaceWith('<input class="fill-width" id="survey-color" value="' + $('#survey-color').text() + '">' + '</input>');
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
	let surveyId = getSurveyId(baseUri);
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

//update survey title by calling controller with put method
var updateSurveyTitle = function(userId, surveyId, newSurveyTitle) {
	//console.log("Update survey title " + newSurveyTitle);
	let dataToSend = { id: surveyId, user_id: userId, survey: { title: newSurveyTitle }};

	$.ajax({
		url: '/users/' + userId + '/surveys/' + surveyId, 
		method: "PUT",
		data: dataToSend,
		dataType: "json"
	}).success(function(data) {
			console.log("success survey title updated");
			//console.log(data);
	}).error(function(error) {
			console.log("error survey title not updated");
			console.log(error);
	});

};



