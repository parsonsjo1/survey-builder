
var updateSidebar = function(questionBoxId) {

  let surveyId = $('.survey')[0].id.split('-')[1];
  let questionId = questionBoxId.split('-')[2];
  let questionSequenceNumber = $('#' + questionBoxId).find('.question-title')[0].id.split('-')[1];

  updateSidebarTitle(questionSequenceNumber);
  showSidebarQuestionBox(surveyId, questionId);
};

var updateSidebarTitle = function(questionNumber) {
  if(questionNumber) {
    $('#sidebar-title').text('Question ' + questionNumber);
  }
};

var showSidebarQuestionBox = function(surveyId, questionId) {
  console.log('show side bar question box');
  $.ajax({
    url: '/surveys/' + surveyId + '/questions/' + questionId, 
    method: "GET",
    dataType: "script"
  }).success(function(data) {
      console.log("success showing sidebar question box");
      //console.log(data);
  }).error(function(error) {
      console.log("error getting sidebar question box");
      console.log(error);
  });
}