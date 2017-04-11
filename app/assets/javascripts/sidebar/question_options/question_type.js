$('#sidebar').on('change', '#question-type', function(event) {

  // If there is an active question selected then update it's type
  if($('.active-question').length > 0) {
    let surveyId = $('.survey')[0].id.split('-')[1];
    let questionId = $('.active-question')[0].id.split('-')[2];
    let questionTypeIndex = $('#question-type')[0].options.selectedIndex;
    let questionType = $('#question-type')[0].options[questionTypeIndex].text;
    updateQuestionType(surveyId, questionId, questionType);
  }
});

var updateQuestionType = function(surveyId, questionId, questionType) {

  // Clear the question box content and sidebar content
  $('#question-box-' + questionId).find('.question-content').first().empty();
  $('#question-type-content').empty();
  $('.new-child-question-box').remove();
  $('.child-box').remove();


  // Add sidebar type content and question content if question type is not empty
  if (questionType !== "Free Response" && questionType !== "Mutliple Choice") {

    let dataToSend = { question: { question_type: questionType }};

    // Update Question Type
    $.ajax({
      url: '/surveys/' + surveyId + '/questions/' + questionId, 
      method: "PUT",
      data: dataToSend,
      dataType: "script"
    }).success(function(data) {
        console.log("success question type updated");
        //console.log(data);
    }).error(function(error) {
        console.log("error question type");
        //console.log(error);
    });
  }

}
