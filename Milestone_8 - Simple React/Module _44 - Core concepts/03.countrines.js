const loadCountries = () => {
    fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => displayCountries(data));
}

const displayCountries = countries => {
    console.log(countries[0]);
    const container = document.getElementById('countries')
    const countrHTML = countries.map(country => getCountryHTML(country));
    container.innerHTML = countrHTML.join('')
}

const getCountryHTML = country => {
    return `
        <div class="country">
            <h2>${country.name}</h2>    
            <h4>Capital: ${country.capital}</h4>
            <img src="${country.flag}"> 
        </div>
    `;
}


loadCountries();