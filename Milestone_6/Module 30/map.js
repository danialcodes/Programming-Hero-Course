const books = [
    { name: 'a', price: 100 },
    { name: 'b', price: 40 },
    { name: 'c', price: 15 },
    { name: 'd', price: 11 },
    { name: 'e', price: 10 },
    { name: 'f', price: 1 }
];
let ma = books.find(e => e.price==1);
console.log(ma.name);
console.log(books);

let a = 0
const total = books.map(p => p.price).map(t => {
    a += t;
    return a;
});
// const q = books.filter(x => x.price ==40);
// console.log(q);
// const dt = new Date();
// console.log(dt.year);