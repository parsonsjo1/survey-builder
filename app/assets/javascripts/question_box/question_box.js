

// When a user clicks on a question box
$('#survey-questions').on('click', '.parent-box', function(event) {
  console.log('parent-box');
  let questionBoxId = event.currentTarget.id;
  highlightQuestionBox(questionBoxId);
  updateSidebar(questionBoxId);
});

$('#survey-questions').on('click', '.child-box', function(event) {
  console.log('child-box');
  let questionBoxId = event.currentTarget.id;
  highlightQuestionBox(questionBoxId);
  updateSidebar(questionBoxId);
  event.stopPropagation();
});

// Highlight question box border
// $('#survey-questions').on('mouseenter', '.question-box', function(event) {
//   $(this).css('border', 'solid ' + $('#survey-title-box').css('background-color'));
// });

// // Unhighlight question box border
// $('#survey-questions').on('mouseleave', '.question-box', function(event) {
//   if(!$(this).hasClass('active-question')) {
//     $(this).css('border', 'dotted black');
//   }
// });


var highlightQuestionBox = function(questionBoxId) {

  // Unhighlight all question boxes
  $('.active-question').removeClass('active-question');

  // Highlight the selected question box
  $('#' + questionBoxId).addClass('active-question');

  // Add a dotted border for all inactive question boxxes
  // $('.question-box').each(function(index) {
  //   if(!$(this).hasClass('active-question')) {
  //     $(this).css('border', 'dotted black');
  //   }
  // });  

};