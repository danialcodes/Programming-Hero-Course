const delbtn = document.getElementById('delete');
delbtn.addEventListener('click', function () {
    const toBeDeleted = document.getElementById('secrect');
    toBeDeleted.style.display = 'None';
    input.value = '';
})

const input = document.getElementById('delete-confirm');
input.addEventListener('keyup',function(event){
    if(this.value=='Delete'){
        delbtn.removeAttribute('disabled');
    }
    else{
        delbtn.setAttribute('disabled',true);
    }
});
input.addEventListener('change', function () {
    const input = document.getElementById('delete-confirm');
    console.log(input.value);



});