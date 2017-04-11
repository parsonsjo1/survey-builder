
// Send get request for generated html to append to sidebar
var updateSidebarContent = function(surveyId, questionId) {
	// console.log(surveyId);
	// console.log(questionId);
	// console.log('/surveys/' + surveyId + '/questions/' + questionId);

	$.ajax({
		url: '/surveys/' + surveyId + '/questions/' + questionId, 
		method: "GET",
		dataType: "script"
	}).success(function(response) {
			console.log("success, attached sidebar question content");
	}).error(function(error) {
			console.log("sidebar content error");
			console.log(error);
	});
};