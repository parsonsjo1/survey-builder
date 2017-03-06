// Add a new choice on click
$('#sidebar').on('click', '#add-new-choice-button', function(event) {

	//console.log(event);
	// Post a new choice to the server
	let className = event.currentTarget.closest('#sidebar-choice-list').className;
	//console.log(className);
	let questionId = getQuestionId(className);
	addNewChoice(questionId);

});

// // Delete a choice on click
// $('#survey-questions').on('click', '#delete-question-button', function(event) {
// 	//console.log(event.currentTarget.closest('.question-box').id);
// 	// Delete question from the server
// 	let baseUri = event.currentTarget.baseURI;
// 	let surveyId = getSurveyId(baseUri);
// 	let questionId = event.currentTarget.closest('.question-box').id;
// 	deleteQuestion(surveyId, questionId);

// });

// Functions in alphabetical order

var addNewChoice = function(questionId) {
	console.log("Add new Choice");
	console.log('/questions/' + questionId + '/choices');
	let dataToSend = { choice: { question_id: questionId, value: "New Choice" }};

	$.ajax({
		url: '/questions/' + questionId + '/choices', 
		method: "POST",
		data: dataToSend,
		dataType: "json"
	}).success(function(newChoiceHtml) {
			console.log("success choice added");
			console.log(newChoiceHtml);
			//$('#add-new-choice-button').before(newChoiceHtml);
	}).error(function(error) {
			console.log("error adding choice");
			console.log(error);
	});
}

var getQuestionId= function(className) {
	let questionRegex = /question-([0-9]+)/;
	let questionMatch = questionRegex.exec(className);
	if(questionMatch) {
		return questionMatch[1];
	}
	else {
		console.log(questionMatch)
	}
}
