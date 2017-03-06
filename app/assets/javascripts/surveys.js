
// Edit survey title by changing element to input
$('#survey-title-box').on('click', '#survey-title', function() {
	$isEditable = $('#survey-title').is('input');
	//console.log($isEditable);
	if(!$isEditable) {
		$('#survey-title').replaceWith('<input id="survey-title" value="' + $('#survey-title').text() + '">' + '</input>');
		$('#survey-title').focus().val($('#survey-title').val());
	}
});

// If survey title loses focus
$('#survey-title-box').on('blur', '#survey-title', function(event) {
	//console.log('blur');
	$('#survey-title').replaceWith('<h1 id="survey-title">' + $('#survey-title').val() + '</h1>');

	//Update survey title
	//console.log(event.currentTarget.baseURI);
	let baseUri = event.currentTarget.baseURI;
	let userId = getUserId(baseUri);
	let surveyId = getSurveyId(baseUri);

	//console.log(userId);
	//console.log(surveyId);W
	updateSurveyTitle(userId, surveyId, $('#survey-title').text());

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
var updateSurveyTitle = function(userId, surveyId, newSurveyTitle) {
	console.log("Update survey title " + newSurveyTitle);
	let dataToSend = { id: surveyId, user_id: userId, survey: { title: newSurveyTitle }};
	//console.log('/users/' + userId + '/surveys/' + surveyId);
	//console.log(dataToSend);
	$.ajax({
		url: '/users/' + userId + '/surveys/' + surveyId, 
		method: "PUT",
		data: dataToSend,
		dataType: "json"
	}).success(function(data) {
			console.log("success");
			console.log(data);
	}).error(function(error) {
			console.log("error");
			console.log(error);
	});

};



