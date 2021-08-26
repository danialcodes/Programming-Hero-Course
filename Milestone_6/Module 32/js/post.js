const getPost = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
        .then(data => showPost(data));
};

const showPost = data => {
    const container = document.getElementById('posts');
    data.forEach(e => {
        const div = document.createElement('div');
        div.classList.add('post');
        div.innerHTML = 
        `<h3>${e.title}</h3>
        <p>${e.body}</p>`
        ;
        container.appendChild(div);
    });

};
getPost();