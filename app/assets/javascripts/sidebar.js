
// Update question required
$('#sidebar').on('click', '#question-required', function(event) {
	//console.log($('.active-question').length);
	//console.log(event);
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
	//console.log($('.active-question').length);

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

// Functions in alphabetical order


var updateQuestionRequired = function(surveyId, questionId, questionRequired) {

	let dataToSend = { question: { is_required: questionRequired }};

	$.ajax({
		url: '/surveys/' + surveyId + '/questions/' + questionId, 
		method: "PUT",
		data: dataToSend,
		dataType: "html"
	}).success(function(questionTypeHtml) {
			console.log("success question required updated");
			// Update html in sidebar according to question type
			//$('#add-new-question-box').before(questionBoxHtml);
	}).error(function(error) {
			console.log("error add");
			console.log(error);
	});
}

var updateQuestionType = function(surveyId, questionId, questionType) {

	let dataToSend = { question: { question_type: questionType }};

	$.ajax({
		url: '/surveys/' + surveyId + '/questions/' + questionId, 
		method: "PUT",
		data: dataToSend,
		dataType: "html"
	}).success(function(sidebarContent) {
			console.log("success question type updated");
			//console.log(sidebarContent);
			$('#question-type-content').empty();
			$('#question-type-content').append(sidebarContent);

	}).error(function(error) {
			console.log("error question type");
			console.log(error);
	});
}

// Send get request for generated html to append to sidebar
var updateSidebarContent = function(surveyId, questionId) {
	// console.log(surveyId);
	// console.log(questionId);
	// console.log('/surveys/' + surveyId + '/questions/' + questionId);

	$.ajax({
		url: '/surveys/' + surveyId + '/questions/' + questionId, 
		method: "GET",
		dataType: "html"
	}).success(function(sidebarHtml) {
			//console.log(sidebarHtml);
			// Append sidebarhtml underneath the question title
			$('#sidebar-question-content').remove();
			$('#sidebar-question-title').after(sidebarHtml);
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