const loadCountries = () => {
    fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
}
loadCountries();

const displayCountries = countries => {
    const countriesContainer = document.getElementById('countries')
    countries.forEach(country => {
        // console.log(country)
        const div = document.createElement('div');
        div.classList.add('country')
        div.innerHTML = `
            <h3>${country.name}</h3>
            <p>${country.capital}</p>
            <button onclick="loadDetiles('${country.name}')">Detiles</button>
        `;
        countriesContainer.appendChild(div);
    })
}

const loadDetiles = name => {
    const url = `https://restcountries.eu/rest/v2/name/${name}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayDetiles(data[0]))
    
}

const displayDetiles = country => {
    // console.log(country);
    const detaileDiv = document.getElementById('detailes');
    detaileDiv.innerHTML = `
        <h3>${country.name}</h3>
        <p>Currency: ${country.currencies[0].code}</p>
        <p>Dial code: ${country.callingCodes[0]}</p>
        <img width="300px" src="${country.flag}"></img>
    `
}