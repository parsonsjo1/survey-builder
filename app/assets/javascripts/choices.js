
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
