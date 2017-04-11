
$('#sidebar').on('click', '#question-required', function(event) {

  // If there is an active question selected then update it's required property
  if($('.active-question').length > 0) {
    let surveyId = $('.survey')[0].id.split('-')[1];
    let questionId = $('.active-question')[0].id.split('-')[2];
    let questionRequired = event.currentTarget.checked;
    updateQuestionRequired(surveyId, questionId, questionRequired);
  }
});

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




