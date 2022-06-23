export const renderCountryList = countries => {
    return countries.map(({ name, flags }) =>
        `<li class="country-list__item">
            <img class="country-list__flag"
            src="${flags.svg}" 
            alt="Flag of ${name.official}"
            width ="30" 
            height ="30"/>
            <h2 class="country-list__title">${name.official}</h2>
        </li>`
    ).join("");
};

export const renderCountryCard = countries => {
    return countries.map(({ name, flags, capital, population, languages }) =>
        `<div class="country-info__container">
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
        </ul>`).join('')
};