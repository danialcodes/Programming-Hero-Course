// let count = 1;
// const loadData = () => {

// fetch(`https://jsonplaceholder.typicode.com/todos/${count}`)
//   .then(response => response.json())
//   .then(json => console.log(json));
// count++;  
// }

function loadUsers(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(x=>x.json())
    .then(x=>loadData(x));
}
function loadPost(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(x=>x.json())
    .then(x=>console.log(x));
}

const loadData = data => {
    const ul = document.getElementById('users');
    data.forEach(e => {
        const li = document.createElement('li');
        li.innerHTML = `<h4>Id = ${e.id}, Name= ${e.name}, User Id = ${e.username}</h4>`;
        ul.appendChild(li);
        
    });
}