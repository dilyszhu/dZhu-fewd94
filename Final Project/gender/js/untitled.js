$( document ).ready(function() {

var AnimationEnd='webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

function Bounce(){
    var BounceThings='animated bounce';
    $(this).addClass(BounceThings).one(AnimationEnd, 
        function () { $(this).removeClass(BounceThings);});
};

$('.your').mouseover(Bounce);





	// $("#submitmsg").click(function(){	
	// 	var clientmsg = $("#usermsg").val();
	// 	$.post(text: clientmsg);				
	// 	$("#usermsg").attr("value", "");
	// 	return false;
	// });

})