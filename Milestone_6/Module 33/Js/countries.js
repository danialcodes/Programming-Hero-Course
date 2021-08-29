const getCountries = () => {
    fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(countries => showCountries(countries))
}
const details = cname => {
    fetch(`https://restcountries.eu/rest/v2/name/${cname}`)
        .then(res => res.json())
        .then(info => alrt(info[0]));
}
const alrt = country =>{
    const cnty = document.getElementById(country.name);
    cnty.style.backgroundImage = `url('${country.flag}')`;
    cnty.style.backgroundSize = '100% 100%';
    cnty.style.backgroundRepeat= 'no-repeat';

}
const showCountries = countries => {
    const container = document.getElementById('countries');
    countries.forEach(country => {
        const div = document.createElement('div');
        div.classList.add('country');
        div.id = country.name;
        div.innerHTML = `<div class='s' >
        <h1>${country.name}<h1>
        <button onclick="details('${country.name}')">Know more</button></div>
        `;
        container.appendChild(div);
    });


    // const fname = document.getElementById('cnty').value;
    // ret = countries.find(x => x.name == fname);
    // if(fname == ret?.name ){
    //     const l = document.createElement('li');
    //     l.innerText = JSON.stringify(ret);
    //     container.appendChild(l);
    // }

    // countries.forEach(country => {
    //     const l = document.createElement('li');
    //     // l.innerText = country.name;
    //     container.appendChild(l);
    //     // console.log(countries.find(x => x.name == "Bangladesh").name);
    // });
}
getCountries();