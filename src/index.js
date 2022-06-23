import './css/styles.css';
import debounce from 'lodash.debounce';
import { fetchCountries } from './js/fetchCountries';

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


    if (searchQuery === '') {
        refs.countryList.innerHTML = '';
        refs.countryCard.innerHTML = '';
    }
    fetchCountries(searchQuery)
        .then(countries => {
            if (countries.length === 1) {
                refs.countryCard.insertAdjacentHTML('beforeend', renderCountryCard(countries));
            } else if (countries.length <= 10) {
                refs.countryList.insertAdjacentHTML('beforeend', renderCountryList(countries));
            } else if (countries.length <= 10) {
                console.log('Too many matches found. Please enter a more specific name.')
            } else {
                
            }
        })
        .catch(error => {
            console.log(error);
    })
}


function renderCountryList(countries) {
    const markupCountryList = countries.map(({ name, flags }) => {
        return `<li class="country-list__item">
                <img class="country-list__flag"
                src="${flags.svg}" alt="Flag of ${name.official}" width ="30" height ="30"/>
                <h2 class="country-list__title">${name.official}</h2>
            </li>`;
    }).join("");
    
    return markupCountryList;
}

function renderCountryCard(countries) {
    const markupCountryCard = countries.map(({ name, flags, capital, population, languages }) => {
        return `<div class="country-info__container">
        <img class="country-info__flag"
            src="${flags.svg}" 
            alt="Flag of ${name.official}"
            width = 30px height = 30px/>
            <h1 class="country-info__title">${name.official}</h1>
        </div>
        <ul class="country-info__list">
        <li class="country-info__item"><b>Capital:</b> ${capital}</li>
        <li class="country-info__item"><b>Population:</b> ${population}</li>
        <li class="country-info__item"><b>Languages:</b> ${Object.values(languages).join(', ')}</li>
        </ul>`}).join('');
    
    return markupCountryCard;
}