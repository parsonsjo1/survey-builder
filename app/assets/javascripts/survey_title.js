
$('#survey-title-box').on('click', '#survey-title', function() {
  $isEditable = $('#survey-title').is('input');

  if(!$isEditable) {
    $('#survey-title').replaceWith('<input class="fill-width" id="survey-title" value="' + $('#survey-title').text() + '"></input>');
    $('#survey-title').focus().val($('#survey-title').val());
  }
});

$('#survey-title-box').on('blur', '#survey-title', function(event) {
  //console.log('blur');
  $('#survey-title').replaceWith('<div id="survey-title">' + $('#survey-title').val() + '</div>');

  //Update survey title
  let baseUri = event.currentTarget.baseURI;
  let userId = getUserId(baseUri);
  let surveyId = $('.survey')[0].id.split('-')[1];
  updateSurveyTitle(userId, surveyId, $('#survey-title').text());

});

var updateSurveyTitle = function(userId, surveyId, newSurveyTitle) {
  //console.log("Update survey title " + newSurveyTitle);
  let dataToSend = { id: surveyId, user_id: userId, survey: { title: newSurveyTitle }};

  $.ajax({
    url: '/users/' + userId + '/surveys/' + surveyId, 
    method: "PUT",
    data: dataToSend,
    dataType: "json"
  }).success(function(data) {
      console.log("success survey title updated");
      //console.log(data);
  }).error(function(error) {
      console.log("error survey title not updated");
      console.log(error);
  });

};

$('#survey-title-box').on('click', '#survey-title-color', function(event) {
  $isEditable = $('#survey-title-color').is('input');

  if(!$isEditable) {
    $('#survey-title-color').replaceWith('<input class="fill-width" id="survey-title-color" value="' + $('#survey-title-color').text() + '"></input>');
    $('#survey-title-color').focus().val($('#survey-title-color').val());
  }

  // Stop background color from being selected
  event.stopImmediatePropagation();
});

$('#survey-title-box').on('blur', '#survey-title-color', function(event) {
  //console.log('blur');
  $('#survey-title-color').replaceWith('<span class="highlight" id="survey-title-color">' + $('#survey-title-color').val() + '</span>');

  //Update survey title
  let baseUri = event.currentTarget.baseURI;
  let userId = getUserId(baseUri);
  let surveyId = $('.survey')[0].id.split('-')[1];
  updateSurveyTitleColor(userId, surveyId, $('#survey-title-color').text());

});

var updateSurveyTitleColor = function(userId, surveyId, newSurveyTitleColor) {
  //console.log("Update survey color " + newSurveyColor);
  let dataToSend = { id: surveyId, user_id: userId, survey: { title_color: newSurveyTitleColor }};

  $.ajax({
    url: '/users/' + userId + '/surveys/' + surveyId, 
    method: "PUT",
    data: dataToSend,
    dataType: "json"
  }).success(function(data) {
      console.log("success survey title color updated");
      $('#survey-title').css('color', newSurveyTitleColor);
      $('#survey-title-color').css('color', newSurveyTitleColor);
      //console.log(data);
  }).error(function(error) {
      console.log("error survey color");
      console.log(error);
  });

};