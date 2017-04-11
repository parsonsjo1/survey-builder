// Update sidebar choice logic section on click
$('#survey-questions').on('click', '.choice-box', function(event) {
  console.log("choice box clicked");

  let activeChoiceId = event.currentTarget.id;
  let choiceId = activeChoiceId.split('-')[1];

  highlightChoiceBox(activeChoiceId);
  updateActiveChoice(choiceId);
  event.stopPropagation();
});

$('#survey-questions').on('change', '.question-box-dropdown', function(event) {
  console.log("choice dropdown clicked");
  console.log(this.options);
  let selectedIndex = this.options.selectedIndex;
  let activeChoice = this.options[selectedIndex];
  let activeChoiceId = activeChoice.id;
  let choiceId = activeChoiceId.split('-')[2];

  highlightChoiceBox(activeChoiceId);
  updateActiveChoice(choiceId);
  event.stopPropagation();
});

var highlightChoiceBox = function(activeChoiceId) {
  // Unhighlight all choice boxes
  $('.active-choice').removeClass('active-choice');

  // Highlight the selected choice box
  $('#' + activeChoiceId).addClass('active-choice');

  // Add a dotted border for all inactive choice boxes
  // $('.choice-box').each(function(index) {
  //   if(!$(this).hasClass('active-choice')) {
  //     $(this).css('border', 'dotted black');
  //   }
  // });  
}

var updateActiveChoice = function(choiceId) {
  let surveyId = $('.survey')[0].id.split('-')[1];
  let questionId = $('.active-choice').get(0).id.split('-')[1];
  let dataToSend = { survey_id: surveyId };

  $.ajax({
    url: '/questions/' + questionId + '/choices/' + choiceId, 
    method: "GET",
    data: dataToSend,
    dataType: "script"
  }).success(function(response) {
      console.log("success choice show");
  }).error(function(error) {
      console.log("error choice show");
      console.log(error);
  });
}