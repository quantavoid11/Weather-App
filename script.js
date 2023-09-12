let city = document.querySelector('input');
let btn = document.querySelector('button');

async function getWeather() {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city.value}&appid=70b24184ab94ec26f131f8fab687907d`)
    let data =  response.data;
    console.log(data);
    document.querySelector('.temp').textContent = data.main.temp + "°C";
    document.querySelector('.city').textContent = data.name;
    document.querySelector('.wind').textContent = data.wind.speed + " km/h";
    document.querySelector('.humidity').textContent = data.main.humidity + "%";
  
};

btn.addEventListener('click', () => {
    getWeather();
});



