$( document ).ready(function() {

var AnimationEnd='webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

function DownNow(){
	var DownThings='animated slideInDown';
	$(this).addClass(DownThings).one(AnimationEnd, 
		function () { $(this).removeClass(DownThings);});
};

function Bounce(){
	var BounceThings='animated bounce';
	$(this).addClass(BounceThings).one(AnimationEnd, 
		function () { $(this).removeClass(BounceThings);});
};

$('h2').mouseover(Bounce);

// $('#r').mouseover(HideR);

// function HideR(){
// 	$('#r').css('visibility', 'visible').addClass('animated flipOutX').one(AnimationEnd, 
// 		function () { $(this).removeClass('animated flipOutX');})
// 		.addClass('animated fadeOut').one(AnimationEnd, 
// 		function () { $(this).removeClass('animated fadeOut').css('visibility', 'hidden');})	
// 		;
// 	$('#rr').css('visibility', 'visible').addClass('animated flipInX').one(AnimationEnd, 
// 		function () { $(this).removeClass('animated flipInX')});
// };



// $('#rr').mouseover(HideRR);

// function HideRR(){
// 	$('#rr').css('visibility', 'visible').addClass('animated flipOutX').one(AnimationEnd, 
// 		function () { $(this).removeClass('animated flipOutX');})
// 		.addClass('animated fadeOut').one(AnimationEnd, 
// 		function () { $(this).removeClass('animated fadeOut').css('visibility', 'hidden');})
// 		;
// 	$('#r').css('visibility', 'visible').addClass('animated flipInX').one(AnimationEnd, 
// 		function () { $(this).removeClass('animated flipInX')});
// };


// $('#r').mousenot(function(){$(this).css('visibility', 'visible')});

})