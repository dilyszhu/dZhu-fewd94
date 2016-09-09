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





})