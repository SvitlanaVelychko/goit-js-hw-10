import './css/styles.css';
import debounce from 'lodash.debounce';
import fetchCountries from './js/fetchCountries';

const DEBOUNCE_DELAY = 300;

const refs = {
    input: document.querySelector('input#search-box'),
    countryList: document.querySelector('.country-list'),
    countryCard: document.querySelector('.country-info'),
};

refs.input.addEventListener('input', debounce(onSearch, DEBOUNCE_DELAY));

function onSearch(e) {
    e.preventDefault();

    const searchQuery = e.target.value.trim();
    console.log(searchQuery);

    if (searchQuery === '') {
        refs.countryList.innerHTML = '';
        refs.countryCard.innerHTML = '';
    }
    fetchCountries(searchQuery)
        .then(country => {
            
        })
}

// function fetchCountries(name) {
//     return fetch(`https://restcountries.com/v3.1/name/${name}`)
//     .then((res) => {
//         if (!res.ok) {
//             throw new Error(res.status);
//         }
//         return res.json();
//     })
// }

//fetchCountries('ukraine')

function renderCountryList() {

}

// fetch(`https://restcountries.com/v3.1/name/name`)
//     .then((res) => {
//         if (!res.ok) {
//             throw new Error(res.status);
//         }
//         return res.json();
//     })
//     .then(country => {
//         console.log(country);
//     })
//     .catch(error => {
//         console.log(error);
//     });
