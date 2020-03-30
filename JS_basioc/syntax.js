var player = function (name) {
    this.name = name;
    this.hp = 100;
    this.mp = 300;
    this.hit = function (damage) {
        while (this.hp > 0) {
            this.hp -= damage;
            console.log("hit");
            console.log('남은 hp', this.hp)
        };
    };
    this.magic = function(magic_mp){
        this.mp -= magic_mp;
        console.log('magic');
        console.log(this.mp,"남은 mp" ,magic_mp )

    }

    this.die = function () {
        return this.hp <= 0 ? true : false;
    };
};
var medic = new player('medic');
medic.hit(30);
console.log(medic.die())
medic.magic(50);






arr = [1,2,3,4,5];
arr.forEach(element => {
    element = 'hooah'
    console.log(element)
    
});
arr.map((value => 
     console.log(value)
))

// for (var i in arr){
//     console.log(i)
// }
// for (var i of arr){
//     console.log(i *4)
// }
// for (var i=0; i<5; i++){
//     console.log(i)
// }