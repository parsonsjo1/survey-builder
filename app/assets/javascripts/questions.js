
// Add a new question on click
$('#add_new_question_button').click(function(event) {

	// Post a new question to the server
	let baseUri = event.currentTarget.baseURI;
	let surveyId = getSurveyId(baseUri);
	addNewQuestion(surveyId);

});

// Delete a question on click
$('#survey-questions').on('click', '#delete-question-button', function(event) {
	//console.log(event.currentTarget.closest('.question-box').id);
	// Delete question from the server
	let baseUri = event.currentTarget.baseURI;
	let surveyId = getSurveyId(baseUri);
	let questionId = event.currentTarget.closest('.question-box').id;
	deleteQuestion(surveyId, questionId);

});

// Edit question title by changing element to input
$('.question-box').on('click', '.question-title', function(event) {
	//console.log('clicked question title');
	id = event.currentTarget.closest('.question-box').id;
	questionTitleElement = $('#' + id).find('h3').first();
	$isEditable = questionTitleElement.is('input');
	//console.log($isEditable);
	if(!$isEditable) {
		questionTitleElement.replaceWith('<input value="' + questionTitleElement.text() + '">' + '</input>');
		questionTitleElement = $('#' + id).find('input').first();
		questionTitleElement.focus().val(questionTitleElement.val());
	}
});

// If question title loses focus
$('.question-box').on('blur', '.question-title', function(event) {
	//console.log('question blur');
	id = event.currentTarget.closest('.question-box').id;
	questionTitleElement = $('#' + id).find('input').first();
	//console.log(questionTitleElement);
	questionTitleElement.replaceWith('<h3>' + questionTitleElement.val() + '</h3>');

	//Update question title
	console.log(event.currentTarget.baseURI);
	let baseUri = event.currentTarget.baseURI;
	let surveyId = getSurveyId(baseUri);

	//console.log(surveyId);
	updateQuestionTitle(surveyId, id, questionTitleElement.val());

});


// Functions ordered alphabetical
var addNewQuestion = function(surveyId) {
	console.log("Add new Question");
	//console.log('/users/' + userId + '/surveys/' + surveyId);
	let dataToSend = { question: { survey_id: surveyId, title: "Question Title", is_required: false, type: "" }};

	$.ajax({
		url: '/surveys/' + surveyId + '/questions', 
		method: "POST",
		data: dataToSend,
		dataType: "html"
	}).success(function(questionBoxHtml) {
			console.log("success question added");
			//console.log(questionBoxHtml);
			$('#add-new-question-box').before(questionBoxHtml);
	}).error(function(error) {
			console.log("error add");
			console.log(error);
	});
}

var deleteQuestion = function(surveyId, questionId) {
	console.log("Delete Question " + questionId);
	//console.log('/surveys/' + surveyId + '/questions/' + questionId);

	$.ajax({
		url: '/surveys/' + surveyId + '/questions/' + questionId, 
		method: "DELETE"
	}).success(function(data) {
			console.log("success question deleted");
			$('#' + questionId).remove();
	}).error(function(error) {
			console.log("error question not deleted");
			console.log(error);
	});
}

var getSurveyId = function(baseUri) {
	let surveyRegex = /surveys\/([0-9]+)/;
	let surveyMatch = surveyRegex.exec(baseUri);
	return surveyMatch[1];
}

//update question title by calling controller with put method
var updateQuestionTitle = function(surveyId, questionId, newQuestionTitle) {
	//console.log("Update question title " + newQuestionTitle);
	let dataToSend = { id: questionId, question: { title: newQuestionTitle }};
	//console.log('/users/' + userId + '/surveys/' + surveyId);
	//console.log(dataToSend);
	$.ajax({
		url: '/surveys/' + surveyId + '/questions/' + questionId, 
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