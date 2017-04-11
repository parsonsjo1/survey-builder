$('#sidebar').on('click', '#placeholder-value', function(event) {
  
  let isInputElement = $('#placeholder-value').is('input');

  if(!isInputElement) {
    $('#placeholder-value').replaceWith('<input class="col-8" id="placeholder-value" value="' + $('#placeholder-value').text() + '"></input>')
    $('#placeholder-value').focus().val($('#placeholder-value').val());
  }
});

$('#sidebar').on('blur', '#placeholder-value', function(event) {

  $('#placeholder-value').replaceWith('<div class="col-8 highlight" id="placeholder-value">' + $('#placeholder-value').val() + '</div>')
  let surveyId = $('.survey')[0].id.split('-')[1];
  let questionId = $('.active-question')[0].id.split('-')[2];

  $('#dropdown-placeholder-' + questionId).text($('#placeholder-value').text());
  updatePlaceholder(surveyId, questionId, $('#placeholder-value').text());

});

var updatePlaceholder = function(surveyId, questionId, newPlaceholderValue) {

  let dataToSend = { id: questionId, question: { placeholder: newPlaceholderValue }};

  $.ajax({
    url: '/surveys/' + surveyId + '/questions/' + questionId, 
    method: "PUT",
    data: dataToSend,
    dataType: "json"
  }).success(function(response) {
      console.log("success updating placeholder");
      //console.log(data);
  }).error(function(error) {
      console.log("error updating placeholder");
      console.log(error);
  });

};