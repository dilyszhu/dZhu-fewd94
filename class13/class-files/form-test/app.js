$(document).ready(function () {

$('#myForm').submit(function (e) {
	var stuff=$('#name-input').val();
	$('#target').html(stuff);
	$('#name-input').val('')
	

e.preventDefault();
	})


})
