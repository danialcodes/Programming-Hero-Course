const alertMe = (txt='You Clicked Alert') =>{
    alert(txt);
}
const confirmMe = () =>{
    const input = confirm('You clicked confirm??');
    alertMe(input);
}
const promptMe = (txt='You Clicked Prompt')=>{
    const input = prompt(txt);
    alertMe(input);
}
const reloadMe = ()=>{
    location.reload();
}
const visitFB = ()=>{
    location.assign('https://facebook.com/danialcodes/'); 
}