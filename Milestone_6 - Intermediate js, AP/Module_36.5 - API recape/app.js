const API_Key = `5ceef2285e57dbf70699e0b127b25e20`;

const searchTemperature = () => {
    const city = document.getElementById('city_name').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_Key}`;


    fetch(url)
        .then(res => res.json())
        .then(data => displayTemperature(data));
}

const displayTemperature = temperature => {
    console.log(temperature);
}