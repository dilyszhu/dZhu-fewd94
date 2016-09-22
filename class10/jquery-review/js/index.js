$(document).ready(function(){

$('.box').css('background-color', 'yellow');
$('.box').text("bigger!");
$('.box').click( function (){


	var oldH = $(this).css('height');
	console.log(oldH);

	$(this).height($(this).height()+100);
	$(this).width($(this).width()+100);

	var fontSize = parseInt($(this).css("font-size"));
	fontSize = fontSize + 30 + "px";
	$(this).css({'font-size':fontSize});


});


});