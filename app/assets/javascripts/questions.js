
//Activate and/or update sidebar
$('#survey-questions').on('click', '.question-box', function(event) {
	let className = event.currentTarget.className;
	let questionId = event.currentTarget.id;
	let question = questionId.split("-")[1];

	// Remove previous active question and update new active question
	$('.question-box').removeClass('active-question');
	$('#' + questionId).addClass('active-question');

	// Update sidebar with question number
	console.log('clicked ' + questionId + ' number ' + question);
	updateSidebarTitle(question);

	let baseUri = event.currentTarget.baseURI;
	let surveyId = getSurveyId(baseUri);
	updateSidebarContent(surveyId, question);
});

// Edit question title by changing element to input
$('#survey-questions').on('click', '.question-title', function(event) {
	event.stopPropagation();
	console.log('clicked question title');
	id = event.currentTarget.closest('.question-box').id;
	console.log(id);
	questionTitleElement = $('#' + id).find('h3').first();
	console.log(questionTitleElement);
	$isEditable = questionTitleElement.is('input');
	console.log($isEditable);
	if(!$isEditable) {
		questionTitleElement.replaceWith('<input value="' + questionTitleElement.text() + '">' + '</input>');
		questionTitleElement = $('#' + id).find('input').first();
		questionTitleElement.focus().val(questionTitleElement.val());
	}
});

// If question title loses focus
$('#survey-questions').on('blur', '.question-title', function(event) {
	//console.log('question blur');
	id = event.currentTarget.closest('.question-box').id;
	questionTitleElement = $('#' + id).find('input').first();
	//console.log(questionTitleElement);
	questionTitleElement.replaceWith('<h3>' + questionTitleElement.val() + '</h3>');

	//Update question title
	//console.log(event.currentTarget.baseURI);
	let baseUri = event.currentTarget.baseURI;
	let surveyId = getSurveyId(baseUri);

	//console.log(id.split("-")[1]);
	updateQuestionTitle(surveyId, id.split("-")[1], questionTitleElement.val());

});


// Functions ordered alphabetical

var getSurveyId = function(baseUri) {
	let surveyRegex = /surveys\/([0-9]+)/;
	let surveyMatch = surveyRegex.exec(baseUri);
	return surveyMatch[1];
}

//update question title by calling controller with put method
var updateQuestionTitle = function(surveyId, questionId, newQuestionTitle) {
	//console.log("Update question title " + newQuestionTitle);
	let dataToSend = { id: questionId, question: { title: newQuestionTitle }};
	//console.log('/surveys/' + surveyId + '/questions/' + questionId);
	//console.log(dataToSend);
	$.ajax({
		url: '/surveys/' + surveyId + '/questions/' + questionId, 
		method: "PUT",
		data: dataToSend,
		dataType: "json"
	}).success(function(data) {
			console.log("success updated title");
			console.log(data);
	}).error(function(error) {
			console.log("error");
			console.log(error);
	});

};

// Send update question request to sever via ajax
var updateActiveQuestion = function(questionId) {


}