const Sharthok = {
    name: 'Sharthok',
    bangla: 500,
    english: 1000,
    math: 1500,
    physics: 2000,
    total: 0,
    totalFee: function (bangla = this.bangla, english = this.english, math = this.math, physics = this.physics) {
        // this.total = bangla + english + math + physics;
        // console.log('T',this);
        console.log(`Your Total fee for ${this.name} is: ${bangla + english + math + physics}`);

    }
}
const Shohardo = {
    name: 'Shohardo',
    bangla: 5,
    english: 10,
    math: 15,
    physics: 20,
    total: 0
}
// console.log(Sharthok.totalFee());
// console.log(Sharthok.totalFee());
// shohardo_fee = Sharthok.totalFee.bind(Shohardo);
// console.log(shohardo_fee());
// console.log(shohardo_fee());
// ------------------------------------------------------------
// Call --------
Sharthok.totalFee.call(Shohardo,1,2,3,4);
Sharthok.totalFee.apply(Shohardo,[1,2,1,4]);