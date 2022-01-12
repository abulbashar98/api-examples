
const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then(data => displayCountries(data))
}

loadCountries()

const displayCountries = countries => {
    console.log(countries)
    const countriesSection = document.getElementById('countries')
    for (const country of countries) {
        countries.forEach(country => {
            const div = document.createElement('div');
            // div.classList.add(country)       // Made this silly silly Mistake
            div.classList.add('country')
            const h3 = document.createElement('h3')
            h3.innerText = country.name.common
            div.appendChild(h3);
            const p = document.createElement('p')
            p.innerText = country.capital
            div.appendChild(p)
            countriesSection.appendChild(div)
        });
    }
}