const BASE_URL = 'https://restcountries.com/v3.1/name';
const fields = 'fields=name,capital,population,flags,languages';

function fetchCountries(name) {
    return fetch(`${BASE_URL}/${name}?${fields}`).then(res => {
        if (!res.ok) {
            throw new Error(res.statusText);
        }
        return res.json();
    });
}

export default { fetchCountries };