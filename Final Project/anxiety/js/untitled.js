$( document ).ready(function() {
 var config = {
    apiKey: "AIzaSyAE5rtvtwC7r10179t_zgfr6Y6qKEto3jM",
    authDomain: "anxiety-q.firebaseapp.com",
    databaseURL: "https://anxiety-q.firebaseio.com",
    storageBucket: "",
    messagingSenderId: "555747364253"
  };
 
 firebase.initializeApp(config);
 
 var database = firebase.database();


$('#comment-form').on('submit', function (e) {
  // prevent the page from reloading
  e.preventDefault();
  // grab user's comment from input field
  var userInput = $('#comment').val();
  // clear the user's comment from the input (for UX purposes)
  $('#comment').val('')
  // create a section for comments data in your db
  var commentsReference = database.ref('comments');
  // use the set method to save data to the comments
  commentsReference.push({
    comment: userInput,
    likes: 0
  });
});

function getComments() {
  database.ref('comments').on('value', function (results) {
    // Get all comments stored in the results we received back from Firebase
    var allComments = results.val();
    // Set an empty array where we can add all comments we'll append to the DOM
    var comments = [];
    // iterate (loop) through all comments coming from database call
    for (var item in allComments) {
      // Create an object literal with the data we'll pass to Handlebars
      var context = {
        comment: allComments[item].comment,
        likes: allComments[item].likes,
        commentId: item
      };
      // Create a Handlebars template and add our data to the template
       // Get the HTML from our Handlebars comment template
      var source = $("#comment-template").html();
      // Compile our Handlebars template
      var template = Handlebars.compile(source);
      // Pass the data for this comment (context) into the template
      var commentListElement = template(context);
      // push newly created element to array of comments
      comments.push(commentListElement)
    }
    // Update the DOM
    // remove all list items from DOM before appending list items
    $('.comments').empty()
    // append each comment to the list of comments in the DOM
    for (var i in comments) {
      $('.comments').append(comments[i])
    }
  });
}

getComments();








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