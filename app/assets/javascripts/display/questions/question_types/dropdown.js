$('.question-type-display').on('change', '.selectric-question-dropdown-display', function(event) {
  $('.child-question-display').hide();
  console.log(this);
  let options = $(this).find('select').first()[0].options;
  let selectedIndex = options.selectedIndex;
  let activeChoiceId = options[selectedIndex];
  let choiceId = activeChoiceId.id.split('-')[2];
  $('.child-question-choice-' + choiceId + '-display').show();
});