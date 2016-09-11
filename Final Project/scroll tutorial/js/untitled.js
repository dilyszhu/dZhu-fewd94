// $(window).scroll(function() {
//     if ($(this).scrollTop() > 0) {
//         // apply effects and animations
//     }
// });




$( document ).ready(function() {


$(window).scroll(function() {
    if ($(this).scrollTop() > 500) {
    	$('h2').css('color', 'red');
        // apply effects and animations
    }
    if ($(this).scrollTop() > 1000) {
    	$('h2').css('color', 'orange');
        // apply effects and animations
    }
    if ($(this).scrollTop() > 1500) {
    	$('h2').css('color', 'yellow');
        // apply effects and animations
    }
    if ($(this).scrollTop() > 2000) {
    	$('h2').css('color', 'green');
        // apply effects and animations
    }
    if ($(this).scrollTop() > 2500) {
    	$('h2').css('color', 'blue');
        // apply effects and animations
    }
    if ($(this).scrollTop() > 3000) {
    	console.log("hi");
    	$('h2').css('color', 'purple');
        // apply effects and animations
    }

});








	// $("#submitmsg").click(function(){	
	// 	var clientmsg = $("#usermsg").val();
	// 	$.post(text: clientmsg);				
	// 	$("#usermsg").attr("value", "");
	// 	return false;
	// });

})