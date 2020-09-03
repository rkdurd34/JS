

type Age = number; // type에 대해서 의미를 부여 할 수 있음 (type allias) number에다가 별명 붙여주기 - 명시적인게 더 커짐!

type Foo = {
    age:Age;
    name:string; // 세미콜론으로 끝남
}// 객체 타입 만들기
const foo: Foo = {
    age:10,
    name:'kim'
}

interface Bar{ //interface,type은 매우 유사함 나중에 tpye alias랑 interface의 차이 및 상황에 따른 쓰임새를 배울 예정
    age:Age;
    name:string;
}
const bar:Bar = {
    age:10,
    name:"kim",
}

let age: Age = 10;
let weight:number = 72;
foo = false // 오류 발생 이미 넘버로 정의


function bar(){
    arguments // 가변인자로써 인자를 명시 안해두 받을 수 있음
    return 0;
}
function bar(...args){
    arguments // 이렇게 명시적으로 표현 해주는게 좋음
    return 0;
}
bar(10,20)





