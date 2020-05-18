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
var Node = function(data,next=none){
    this.data = data
    this.next = next
    var NodeMgmt = function(data){

    }
}
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

plustwo = (s)=>{
    return s+2
};
function plusthree(s){
    return s+3
};
plusfour = (s) => s+4
console.log(plustwo(10))
console.log(plusthree(10))
console.log(plusfour(10))

array = [1,2,3,4,5,6,7,78,8,100,22222,333]
arr_map = array.map(function(value){return value * 2})
console.log(arr_map)
arr_map_2 = array.map(v=> v*2)
console.log(arr_map_2)
arr_map_3 = array.filter(v => v > 10)
console.log(arr_map_3)


class Animal{
    constructor(leg,hoo){
        this.leg = leg
        this.hoo = hoo
    }
    printAnimal(){
        console.log(this.name + "으 " + String(this.leg)  + "개의 다리를 가진다.", this.hoo )

    }

}
// Lion -> animal  유용한 기능들 가져다 쓰기
class Lion extends Animal{
    constructor(name,leg,hoo){
        super(leg,hoo)
         // 부모의 input(constructor의 인풋)
        this.name = name
        
        

    }
    getname(){
        console.log(`내 이름은 {this.hoo} ` + this.name , this.hoo)
    }
};
myLion = new Lion('king',4, 'd' )
myLion.getname()
myLion.printAnimal()
myAnimal = new Animal(4,"dd")
myAnimal.printAnimal()


function sayHello(name, byeCallback){
    setTimeout(()=>{
        console.log(name,'안녕하세요')
        byeCallback()
    },2000)
} 
// sayHello("Mike",function (){ console.log('안녕히 가세요')})
// setTimeout(()=> {console.log("안녕하세요")},2000)

function sayHello2(name){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(name, '님 안녕하세요')
            resolve('서울')
        },3000)
    })
}
sayHello2('frank')
    .then((seoul)=>console.log('안녕히가세요',seoul))
    // reject는 catch!! resolve는 then으로!!


async function sayHelloBye(name){
    loc = await sayHello2(name)
    setTimeout(()=>{console.log(loc+'로 안녕히 가세요')},2000)
    
} 
sayHelloBye('sanghyeon')