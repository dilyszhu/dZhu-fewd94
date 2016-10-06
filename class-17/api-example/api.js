var title = "";

$('#submit').click(function(e){
	title = $('#title').val();
	getMovie(title);
    e.preventDefault();
});

function getMovie(movieName)
{
    $.getJSON("http://www.omdbapi.com/?t=" + title + "&y=&plot=short&r=json", function(json) {
         console.log(json.Director); 
         $('#plot_output').html(json.Plot);
         $('#starring_output').html(json.Actors);
         $('#title_output').html(json.Title);
         $('img').attr("src", json.Poster);







    });
}





