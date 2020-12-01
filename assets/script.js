var APIKey = "f60be35f3eda0b69e1466b12ddac604e"
var citySearch = "London";

// onclick function for the search button to run refreshCity function.
$(".searchBtn").on("click", function(event){
event.preventDefault()


var search=$(".citySearch").val().trim();
console.log(search);
citySearch = search;

console.log(citySearch)
cityNow();
fiveDayFuture();
Date();
});


// refreshCity function definition, includes query url + city search + API key
function cityNow(){
console.log(citySearch);
// one call API
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" +citySearch+ "&units=imperial&appid=" + APIKey;
        $.ajax({
            url: queryURL,
            method: "GET"
        })
    
    .then(function(response){
    console.log(response);

// Temperature
    var temperature= $("<p>").addClass("temp").text(citySearch+"Temperature: "+response.main.temp+"F");
    $(".weatherNow").append(temperature)
    })
// Date
    var date = Date()

    var currentDate= $("<p>").addClass("date").text("Current Date: " + Date());
    console.log("The Date:  " + Date());
    $(".weatherNow").append(currentDate);
// Icon for weather conditions
    var currentIcon = $("<p>").addClass("icon").icon(weather.icon);
    $(".weatherNow").append(currentIcon);
// Humidity

// Wind Speed

// UV Index
    // color indicating conditions (favorable, moderate, severe)
}

function fiveDayFuture(){
 
    // CREATE HTML ELEMENT TO STORE 5 DAY 3 HR FORECAST API
    // 5 day 3 hr forecast API
    var fiveDayForecast= "https://api.openweathermap.org/data/2.5/forecast?q="+ citySearch +"&appid=" + APIKey;
    $.ajax({
        url: fiveDayForecast,
        method: "GET"
    })

    .then(function(response){
    console.log(response);

    })


}



// create HTML content


// another function for AJAX call