
$('#sidebar').on('click', '.choice', function(event) {
  choiceId = event.currentTarget.closest('.input-group').id;
  isEditable = $('#' + choiceId).is('input');

  // Edit the choice if it is not already in edit mode
  if(!isEditable) {
    console.log($('#' + choiceId + ' > div').text());
    $('#' + choiceId  + ' > div').replaceWith('<input class="choice" value="' + $('#' + choiceId + ' > div').text() + '"></input>')
    $('#' + choiceId  + ' > input').focus().val($('#' + choiceId  + ' > input').val());
  }
});

//Update the choice when the input box loses focus
$('#sidebar').on('blur', '.choice', function(event) {
  choiceId = event.currentTarget.closest('.input-group').id;
  $('#' + choiceId  + ' > input').replaceWith('<div class="choice">' + $('#' + choiceId + ' > input').val() + '</div>')

  //Update choice
  updateChoice(choiceId.split("-")[2], $('#' + choiceId + ' > div').text());

});


// // Functions ordered alphabetical

//update survey title by calling controller with put method
var updateChoice = function(choiceId, newValue) {
  console.log("Update choice " + choiceId + " with " + newValue);
  questionId = $('.active-question').get(0).id.split("-")[1];
  let dataToSend = { id: choiceId, choice: { value: newValue }};

  $.ajax({
    url: '/questions/' + questionId + '/choices/' + choiceId, 
    method: "PUT",
    data: dataToSend,
    dataType: "script"
  }).success(function(response) {
      console.log("success");
      //console.log(data);
  }).error(function(error) {
      console.log("error");
      console.log(error);
  });

};






// Add a new choice on click
// $('#sidebar').on('click', '#add-new-choice-button', function(event) {

// 	//console.log(event);
// 	// Post a new choice to the server
// 	let className = event.currentTarget.closest('#sidebar-choice-list').className;
// 	//console.log(className);
// 	let questionId = getQuestionId(className);
// 	addNewChoice(questionId);

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

// Functions in alphabetical order

// var addNewChoice = function(questionId) {
// 	console.log("Add new Choice");
// 	console.log('/questions/' + questionId + '/choices');
// 	let dataToSend = { choice: { value: "New Choice" }};

// 	$.ajax({
// 		url: '/questions/' + questionId + '/choices', 
// 		method: "POST",
// 		data: dataToSend,
// 		dataType: "json"
// 	}).success(function(newChoiceHtml) {
// 			console.log("success choice added");
// 			console.log(newChoiceHtml);
// 			//$('#add-new-choice-button').before(newChoiceHtml);
// 	}).error(function(error) {
// 			console.log("error adding choice");
// 			console.log(error);
// 	});
// }

// var getQuestionId= function(className) {
// 	let questionRegex = /question-([0-9]+)/;
// 	let questionMatch = questionRegex.exec(className);
// 	if(questionMatch) {
// 		return questionMatch[1];
// 	}
// 	else {
// 		console.log(questionMatch)
// 	}
// }
