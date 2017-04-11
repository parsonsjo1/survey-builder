$('#sidebar').on('click', '#question-allow-multiple-answers', function(event) {

  // If there is an active question selected then update it's multi answers
  if($('.active-question').length > 0) {
    let surveyId = $('.survey')[0].id.split('-')[1];
    let questionId = $('.active-question')[0].id.split('-')[2];
    let allowMultipleAnswers = event.currentTarget.checked;
    updateAllowMultipleAnswers(surveyId, questionId, allowMultipleAnswers);
  }
});

var updateAllowMultipleAnswers = function(surveyId, questionId, allowMultipleAnswers) {
  // Clear the question box content and sidebar content
  $('#question-box-' + questionId).find('.question-content').first().empty();
  $('#question-type-content').empty();

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