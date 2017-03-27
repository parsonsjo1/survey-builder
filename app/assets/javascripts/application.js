// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require tether
//= require bootstrap
//= require jquery_ujs
//= require_tree .



// Functions in alphabetical order

// These will help reconcile duplicate code between surveys.js and questions.js edit and display functions
// var displayElement = function(idName) {
// 	let id = '#' + idName;
// 	$(id).replaceWith('<h1 id="' + idName + '">' + $(id).val() + '</h1>');
// };

// var editElement = function(idName) {
// 	let id = '#' + idName;
// 	$isEditable = $(id).is('input');
// 	//console.log($isEditable);
// 	if(!$isEditable) {
// 		$(id).replaceWith('<input id="' + idName + '" value="' + $(id).text() + '">' + '</input>');
// 		$(id).focus().val($(id).val());
// 	}
// };

