const url ='https://api.openweathermap.org/data/2.5/weather';
const apiKey ='f00c38e0279b7bc85480c3fe775d518c';

$(document).ready(function () {
    weatherFn('pune');
});

async function weatherFn(cName) {
    const temp =
        `${url}?q=${cName}&appid=${apiKey}&units=metric`;
    try {
        const res = await fetch(temp);
        const data = await res.json();
        
        if (res.ok) {
            weatherShowFn(data);
        } else {
            alert('City not found. Please try again.');
        }
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

var input = document.getElementById("city-input");
input.addEventListener("keypress",function(e){
    if(e.key === "Enter"){
      e.preventDefault();
      document.getElementById("city-input-btn").click();
    }
})


function weatherShowFn(data) {
    $('#city-name').text(data.name);
    $('#date').text(moment().
        format('MMMM Do YYYY, h:mm:ss a'));
    $('#temperature').
        html(`${data.main.temp}°C`);
    $('#description').
        text(data.weather[0].description);
    $('#wind-speed').
        html(`${data.wind.speed} m/s`);
    $('#humidity').
        html(`${data.main.humidity}%`);
    $('#cloud').
        html(`${data.clouds.all}%`);
    $('#pressure').
        html(`${data.main.pressure}mb`);
    $('#weather-icon').
        attr('src',
            ``);
    $('#weather-info').fadeIn();
}
