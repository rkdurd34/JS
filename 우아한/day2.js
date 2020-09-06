//만든 사람의 철학,문화,사상이 녹아있음 
// 기본의 무엇인가의 법칙을 만들어놓고 위로 진행 하는 프로그래밍 언어
// 


let x = {
    a:'a'
}

// 함수정의문!
function foo(x){
    x();
    return function(){

    }
}
let y = foo;
// 함수도 변수명에 "값"의 개념으로 할당 가능
// return을 할거나 아무것도 안하면 undefined 반환

// new foo()는 undefined 반환


//함수정의식!
const bar = function () { //함수를 "값"이라 정의 될 떄는 이름 생략 가능!
    
}

(function(){}) // 이렇게 해서 값으로 함수를 정의 할 수 있음 ()는 값을 정의 할 때 많이 쓰임
(function(){})()  // 바로 함수 만들고 실행 시키기 (한번의 함수 실행만 있을경우 쓰임)
                    // 

const y = bar(function(){}) // 함수를 인자로 넣어서 보내줄 수 있음 "값"으로 보기 떄문에
                            // 일급함수라고 불림 ()
// 결과적으로 "값"이라고 생각하면 모든게 다 가능 

const foo = function foo(x){
    // foo()//여기서는 뒤에 있는 foo function을 부르는 것임 앞의 변수는 함수 밖에서 쓰임
}
const bar = (x) =>  x*2;


const a = 10;
const y = ()=>10;
console.log(x,y())
// a와y는 결국에는 '값'을 반환함

// "식"의 마무리 는 값인데 표시를 ;로함
// if, while,for과 같은 반복문,제어문은 "문"임

function foo(){
    this.name = 10; // constructor의 개념 es6 부터는 더 명시적으로 하기 위해 class constructor 사용
    
}
const y = new foo(); // 빈객체 만들기 인스턴스 객체

if( y instanceof foo )  {

}

class bar{
    constructor(){
        this.name = 10
    }
}
console.log((new bar()))
// Function을 부를 때 앞에가 대문자이면 new를 꼭 써서 부름 그런데 class는 그럴 필요 x

const person = {
    name:"김민태",
    getName:function(){

    },
    getName_2 : ()=>{

    },
    getName_3(){
        return this.name
    }
}
console.log(person.getName())

const man = person.getName;
console.log(man()) // 이거는 undefined 반환

button.addEventListener('click', person.getName.bind(person)) // this가 어떤것을 의미하는지 직접 설정해주ㅠ는게 bind 함수
// 화살 함수는 this가 바뀌지 않아서 bind를 쓸 필요 x
person.getName.call(person)
person.getNaeme.apply(person) // this를 뭘로 볼지 설정 해주는 !


function foo(x){
    return function (){
        return x; // 이렇게 되면  closure 영역에 x를 저장해두고 있음
    }
}
const f = foo(10);
f();



// 클로져 관련

const person = {
    age:10,
}
person.age = 500;
function makePerson(){
    let age = 10;
    return{
        getAge(){
            return age
        },
        setAge(x){
            age = x > 1 && x < 130 ? x : age
        }
    }
}
let p = makePerson();

console.log(p.getAge())

//콜백 지옥



setTimeout(function (x){
    console.log('앗싸')
    setTimeout(function(y){
        console.log('웃싸')
    }, 2000)
}, 1000) // 여기서 foo는 콜백 함수


// callback hell 없애기 위해 Promise 나옴

const p1 = new  Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('응답1')
    },1000)
    resolve();
    reject();
})
const p1 = new  Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('응답2')
    },1000)
    resolve();
    reject();
})
p1
.then(p2())
.then(function(r){// thenable객체, 프로미스의 함수 
    console.log(r)
})

.catch(function(){

}) // resolve를 호출 하면 then안에 있는 함수 부르고 reject를 부르면 catch에있는 함수를 부름

//promise도 동기함수 처럼 한번에 펼쳐져있지 않음 그래서 비동기 함수가 나옴

const delay = ms => new Promise(resolve=>setTimeout(resolve,ms))
async function main(){
    console.log('1');
    try{
        const x = await delay(2000) // 여기서 resolve가 되어야 다음 코드로 넘어감 return
    }catch(e){
        console.error(e)
    }
    
    console.log('2')
}
main()
//async 함수는 await를 붙일 수 있음 프로미스 앞에다가 await를 붙여주면 됨
// promise를 백그라운드로 한 async function이 나옴

//일자로 피기 위해 promise를 만들었고 조금더 동기적인 코드를 만들기 위해 async,await가 나오게 됨
//함수도 어쩃든 객체임


