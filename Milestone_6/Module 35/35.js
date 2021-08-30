const student = { name: 'Kamal', age: 25, id: 2413 }
// console.log(student);
class Bracu {
    constructor(name, age, id) {
        this.name = name;
        this.age = age;
        this.id = id;
    }
}

const danial = new Bracu('Danial', 23, 20101534)
// console.log(danial);

const nishat = Object.create(danial)
console.log(nishat.name = 'Nishat');
console.log(nishat.age);
console.log(danial.name);