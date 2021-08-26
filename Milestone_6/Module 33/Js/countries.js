const getCountries = () => {
    fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(countries => showCountries(countries))
}

const showCountries = countries => {
    const container = document.getElementById('countries');
    const fname = document.getElementById('cnty').value;
    ret = countries.find(x => x.name == fname);
    if(fname == ret?.name ){
        const l = document.createElement('li');
        l.innerText = JSON.stringify(ret);
        container.appendChild(l);
    }

    // countries.forEach(country => {
    //     const l = document.createElement('li');
    //     // l.innerText = country.name;
    //     container.appendChild(l);
    //     // console.log(countries.find(x => x.name == "Bangladesh").name);
    // });
}