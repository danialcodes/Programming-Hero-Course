const getBuddy = () =>{
    fetch('https://randomuser.me/api/?results=5')
    .then(res => res.json())
    .then(buddies => showBuddy(buddies.results))
}

const showBuddy = buddies =>{
    // console.log(buddies);
    const container = document.getElementById('showBuddy');
    buddies.forEach(e => {
        const {gender,name,location,email} = e;
        const div = document.createElement('div');
        div.classList.add('buddy');
        div.innerHTML = `
        <h2>Name: ${name.title} ${name.first} ${name.last}</h2>
        <h3>Location: ${location.city}, ${location.state}</h3>
        <h3> Gender: ${gender}</h3>
        `;
        container.appendChild(div);
        
    });
}