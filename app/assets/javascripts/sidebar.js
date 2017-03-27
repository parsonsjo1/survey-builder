// TODO: Attach survey id to the survey as an id and use that instead of the url
//			 Implement Multiple Selection Checkbox Update
//			 Refactor sidebar update on question selection

// Update question required
$('#sidebar').on('click', '#question-required', function(event) {

	// If there is an active question selected then update it's required
	if($('.active-question').length > 0) {
		let baseUri = event.currentTarget.baseURI;
		let surveyId = getSurveyId(baseUri);
		let questionId = $('.active-question')["0"].id;
		let questionRequired = event.currentTarget.checked;
		updateQuestionRequired(surveyId, questionId.split("-")[1], questionRequired);
	}
});

// Update question type
$('#sidebar').on('click', '#question-type', function(event) {

	// If there is an active question selected then update it's type
	if($('.active-question').length > 0) {
		let baseUri = event.currentTarget.baseURI;
		let surveyId = getSurveyId(baseUri);
		let questionId = $('.active-question')["0"].id;
		let questionTypeIndex = event.currentTarget.options.selectedIndex;
		let questionType = event.currentTarget.options[questionTypeIndex].text;
		updateQuestionType(surveyId, questionId.split("-")[1], questionType);
	}
});

// Update multiple selection
$('#sidebar').on('click', '#question-allow-multiple-answers', function(event) {

	// If there is an active question selected then update it's multi answers
	if($('.active-question').length > 0) {
		let baseUri = event.currentTarget.baseURI;
		let surveyId = getSurveyId(baseUri);
		let questionId = $('.active-question')["0"].id;
		let allowMultipleAnswers = event.currentTarget.checked;
		updateAllowMultipleAnswers(surveyId, questionId.split("-")[1], allowMultipleAnswers);
	}
});

// Functions in alphabetical order

var updateAllowMultipleAnswers = function(surveyId, questionId, allowMultipleAnswers) {
	$('#question-type-content').empty();
	$('.question-logic').empty();
	$('#question-' + questionId).find('.question-content').first().empty();
	let dataToSend = { question: { allow_multiple_answers: allowMultipleAnswers }};

	$.ajax({
		url: '/surveys/' + surveyId + '/questions/' + questionId, 
		method: "PUT",
		data: dataToSend,
		dataType: "script"
	}).success(function(response) {
			console.log("success question multi answer updated");
			//console.log(response);
	}).error(function(error) {
			console.log("error updating question multi answer");
			console.log(error);
	});
}


var updateQuestionRequired = function(surveyId, questionId, questionRequired) {

	let dataToSend = { question: { is_required: questionRequired }};

	$.ajax({
		url: '/surveys/' + surveyId + '/questions/' + questionId, 
		method: "PUT",
		data: dataToSend,
		dataType: "json"
	}).success(function(questionTypeHtml) {
			console.log("success question required updated");
	}).error(function(error) {
			console.log("error updating question required");
			console.log(error);
	});
}

var updateQuestionType = function(surveyId, questionId, questionType) {

	// Clear the question box content and sidebar content and question logic
	$('#question-type-content').empty();
	$('.question-logic').empty();
	$('#question-' + questionId).find('.question-content').first().empty();

	// Add sidebar type content and question content if question type is not empty
	if (questionType !== "Free Response" && questionType !== "Mutliple Choice") {

		let dataToSend = { question: { question_type: questionType }};

		// Update Question Type
		$.ajax({
			url: '/surveys/' + surveyId + '/questions/' + questionId, 
			method: "PUT",
			data: dataToSend,
			dataType: "script"
		}).success(function(data) {
				console.log("success question type updated");
				//console.log(data);
		}).error(function(error) {
				console.log("error question type");
				//console.log(error);
		});
	}

}

// Send get request for generated html to append to sidebar
var updateSidebarContent = function(surveyId, questionId) {
	// console.log(surveyId);
	// console.log(questionId);
	// console.log('/surveys/' + surveyId + '/questions/' + questionId);

	$.ajax({
		url: '/surveys/' + surveyId + '/questions/' + questionId, 
		method: "GET",
		dataType: "script"
	}).success(function(response) {
			console.log("success, attached sidebar question content");
	}).error(function(error) {
			console.log("sidebar content error");
			console.log(error);
	});
};

var updateSidebarTitle = function(questionNumber) {
	if(questionNumber) {
		$('#sidebar-question-title').find('h1').first().text('Question ' + questionNumber);
	}
};