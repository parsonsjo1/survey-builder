
// Update question type
$('#question-type').click(function(event) {
	//console.log($('.active-question').length);

	// If there is an active question selected then update it's type
	if($('.active-question').length > 0) {
		let baseUri = event.currentTarget.baseURI;
		let surveyId = getSurveyId(baseUri);
		let questionId = $('.active-question')["0"].id;
		let questionTypeIndex = event.currentTarget.options.selectedIndex;
		let questionType = event.currentTarget.options[questionTypeIndex].text;
		updateQuestionType(surveyId, questionId, questionType);
	}
});

// Functions in alphabetical order

var updateQuestionType = function(surveyId, questionId, questionType) {

	let dataToSend = { question: { survey_id: surveyId, is_required: false, question_type: questionType }};

	$.ajax({
		url: '/surveys/' + surveyId + '/questions/' + questionId, 
		method: "PUT",
		data: dataToSend,
		dataType: "html"
	}).success(function(questionTypeHtml) {
			console.log("success question type updated");
			// Update html in sidebar according to question type
			//$('#add-new-question-box').before(questionBoxHtml);
	}).error(function(error) {
			console.log("error add");
			console.log(error);
	});
}