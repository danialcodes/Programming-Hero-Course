function makeRed(){
    const clr = 'red';
    document.body.style.backgroundColor = clr;
}
function makeGreen(){
    const clr = 'Green';
    document.body.style.backgroundColor = clr;
}
function makeRandom(){
    const colors = ['red','green','blue','yellow','aliceblue','blueviolet','brown','burlywood'];
    let random = Math.round(Math.random()*colors.length)
    const clr = colors[random];
    console.log(clr)
    document.body.style.backgroundColor = clr;
}
const rand = document.getElementById('rand');
// rand.onclick = makeRandom;
// rand.addEventListener('mouseover',makeRandom)

rand.addEventListener('click',function (){
    makeRandom();
});


const btn = document.getElementsByTagName('button');
for (const item of btn) {
    item.addEventListener('click',
    function(){
        document.getElementById('color').innerText = item.innerText.slice(4,item.innerText.length);
    });
};
