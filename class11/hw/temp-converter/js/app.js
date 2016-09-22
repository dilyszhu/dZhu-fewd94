$( document ).ready(function() {


$('select').change(function(){
	// console.log($('select').val());
});
var temp;

var newtemp=0;


$('#convert').click(function(){
temp = parseFloat($('#temp').val());


console.log(temp);



if ($('select').val()==1) {


newtemp=((temp-32)/1.8);
newtemp2=parseFloat(newtemp).toFixed(2);


$('#output').html(newtemp2+"&deg;C");

}
else {

newtemp=((temp*1.8)+32);
newtemp2=parseFloat(newtemp).toFixed(2);

$('#output').html(newtemp2+"&deg;F");


}




});




});