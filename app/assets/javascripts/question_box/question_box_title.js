// Question box title gains focus
$('#survey-questions').on('click', '.question-title', function(event) {
  editQuestionBoxTitle(event.currentTarget.closest('.question-box').id);
});

// Question box title loses focus
$('#survey-questions').on('blur', '.question-title', function(event) {
  displayQuestionBoxTitle(event.currentTarget.closest('.question-box').id);
});


var displayQuestionBoxTitle = function(questionBoxId) {
 
  questionTitleElement = $('#' + questionBoxId).find('input').first();

  questionTitleElement.replaceWith('<div class="question-title">' + questionTitleElement.val() + '</div>');

  let surveyId = $('#' + questionBoxId).closest('.survey').get(0).id.split('-')[1];
  let questionId = questionBoxId.split("-")[2];
  updateQuestionTitle(surveyId, questionId, questionTitleElement.val());

};

var editQuestionBoxTitle = function(questionBoxId) {

  questionTitleElement = $('#' + questionBoxId).find('.question-title').first();

  $isInputBox = questionTitleElement.is('input');
  if(!$isInputBox) {
    questionTitleElement.replaceWith('<input class="question-title fill-width fill-height" value="' + questionTitleElement.text() + '">' + '</input>');
    questionTitleElement = $('#' + questionBoxId).find('.question-title').first();
    questionTitleElement.focus().val(questionTitleElement.val());
  }

};

var updateQuestionTitle = function(surveyId, questionId, newQuestionTitle) {

  let dataToSend = { id: questionId, question: { title: newQuestionTitle }};
  
  $.ajax({
    url: '/surveys/' + surveyId + '/questions/' + questionId, 
    method: "PUT",
    data: dataToSend,
    dataType: "json"
  }).success(function(data) {
      console.log("success question box title updated");
      //console.log(data);
  }).error(function(error) {
      console.log("error question box title not updated");
      console.log(error);
  });

};