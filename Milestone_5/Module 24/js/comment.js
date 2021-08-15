document.getElementById('add').addEventListener('click',function(){
    const  comment = document.getElementById('addcomment').value;
    const p = document.createElement('p');
    p.innerText = comment;

    document.getElementById('comments').appendChild(p);
    document.getElementById('addcomment').value ='';
})