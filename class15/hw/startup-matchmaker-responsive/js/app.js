$(document).ready(function () {
	// console.logs the window.width
	$(window).resize(function () {
		console.log($(window).width())
		if($(window).width()>=936){
			$('#mobile-nav').hide();
		}
	})


	$('#burger').click(function(){
		console.log("click")
		$('#mobile-nav').slideToggle();
	});


})
