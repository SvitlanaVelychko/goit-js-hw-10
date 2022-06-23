import './css/styles.css';
import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';
import getRefs from './js/getRefs';
import { fetchCountries } from './js/fetchCountries';
import { renderCountryList, renderCountryCard } from './js/renderCountry';

const DEBOUNCE_DELAY = 300;
const refs = getRefs();

refs.input.addEventListener('input', debounce(onSearch, DEBOUNCE_DELAY));

function onSearch(e) {
    e.preventDefault();
    clearCountry();

    const searchQuery = e.target.value.trim();

    if (searchQuery === '') {
        return clearCountry();
    }

    fetchCountries(searchQuery)
        .then(data => {
            if (data.length === 1) {
                refs.countryCard.insertAdjacentHTML('beforeend', renderCountryCard(data));
            } else if(data.length > 10) {
                Notiflix.Notify.info('Too many matches found. Please enter a more specific name.');
            } else {
                refs.countryList.insertAdjacentHTML('beforeend', renderCountryList(data));
            }
        })
        .catch((error) => {
            Notiflix.Notify.failure('Oops, there is no country with that name');
    })
}

function clearCountry() {
    refs.countryList.innerHTML = '';
    refs.countryCard.innerHTML = '';
}