const API_Key = `5ceef2285e57dbf70699e0b127b25e20`;

const searchTemperature = () => {
    const city = document.getElementById('city_name').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_Key}&units=metric`;


    fetch(url)
        .then(res => res.json())
        .then(data => displayTemperature(data));
}


const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text;
}

const displayTemperature = temperature => {
    setInnerText('city', temperature.name);
    setInnerText('temperature', temperature.main.temp);
    setInnerText('weather', temperature.weather[0].main);
    const url = `http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
    const icon = document.getElementById('icon');
    icon.setAttribute('src', url);
}