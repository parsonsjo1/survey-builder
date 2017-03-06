// // Add a new choice on click
// $('#add_new_question_button').click(function(event) {
// 	event.stopPropagation();
// 	// Post a new question to the server
// 	let baseUri = event.currentTarget.baseURI;
// 	let surveyId = getSurveyId(baseUri);
// 	addNewQuestion(surveyId);

// });

// // Delete a choice on click
// $('#survey-questions').on('click', '#delete-question-button', function(event) {
// 	//console.log(event.currentTarget.closest('.question-box').id);
// 	// Delete question from the server
// 	let baseUri = event.currentTarget.baseURI;
// 	let surveyId = getSurveyId(baseUri);
// 	let questionId = event.currentTarget.closest('.question-box').id;
// 	deleteQuestion(surveyId, questionId);

// });