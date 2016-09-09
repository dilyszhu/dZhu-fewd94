document.getElementById('click-me').onclick = howMany;
function howMany () {
	var age = document.getElementById('age').value;
	var maxAge = document.getElementById('max-age').value;
	var item = document.getElementById('item').value;
	var ipd = document.getElementById('num-per-day').value;

	var years = parseInt(maxAge) - parseInt(age);
	//console.log(years);

	var days = years * 365;
	var total = days * parseInt(ipd);

	document.getElementById('solution').innerHTML = total;
	document.getElementById('drink').innerHTML = item;

} 





// Open lifetime-supply/; write JS for the following:

// 1. Store your current age into a variable

// 2. Store a maximum age into a variable

// 3. Store a favorite drink (from a drop-down) into a variable

// 4. Store an amount per day into a variable

// 5. Calculate how many you would eat total for the rest of your life

// 6. Output your results to the user