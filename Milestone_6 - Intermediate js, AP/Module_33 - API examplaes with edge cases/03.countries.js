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
        const h3 = document.createElement('h3')
        h3.innerText = country.name;
        const p = document.createElement('p')
        p.innerText = country.capital;
        div.appendChild(h3);
        div.appendChild(p);
        countriesContainer.appendChild(div);
    })
}