export default function getRefs() {
    return {
        input: document.querySelector('input#search-box'),
        countryList: document.querySelector('.country-list'),
        countryCard: document.querySelector('.country-info'),
    };
}