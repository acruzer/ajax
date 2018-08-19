"use strict";


// PART 1: SHOW A FORTUNE
function showFortune(evt) {
    // TODO: get the fortune and show it in the #fortune-text div
    $.get("/fortune", updateFortune)
}

function updateFortune(result)	{
	$("#fortune-text").html(result)
}



$('#get-fortune-button').on('click', showFortune);





// PART 2: SHOW WEATHER

function showWeather(evt) {
    evt.preventDefault();

    let url = "/weather.json";
    let formData = {"zipcode": $("#zipcode-field").val()};
    $.get(url, formData, displayWeather);


    // TODO: request weather with that URL and show the forecast in #weather-info
}
function displayWeather(conditions) {
	//{'forecast': 'Rainy, damp, and rich with hipsters.', 'temp': '60F'}
	// body...
	// console.log(conditions)
	// console.log(conditions["forecast"])
	$('#weather-info').html(conditions["forecast"])

}

$("#weather-form").on('submit', showWeather);




// PART 3: ORDER MELONS

function orderMelons(evt) {
    evt.preventDefault();

    // TODO: show the result message after your form
    // TODO: if the result code is ERROR, make it show up in red (see our CSS!)
	let formInputs = {"melon_type": $("#melon-type-field").val(), 
					  "qty" : $("#qty-field").val()};
	$.post("/order-melons.json", formInputs, showOrderResults);
}

function showOrderResults(jsonResults) {
//{'code': result_code, 'msg': result_text}
	$("#order-status").html(jsonResults["msg"])
	if (jsonResults["code"] === 'ERROR') {
		$('#order-status').addClass('order-error');
	} else {
		$('#order-status').removeClass('order-error');
	}

			
}

$("#order-form").on('submit', orderMelons);


