// // // function work(callback){
    
// // //     // for (let i = 0; i<1000000000 ; i++){
    
// // //     // }
// // //     // const end=Date.now()
// // //     // console.log(end - start + 'ms')
// // //     setTimeout(()=>{
// // //         const start = Date.now();
// // //         for (let i =0; i <1000000000; i++){}
// // //         const end = Date.now();
// // //         console.log(end -start + 'ms')
// // //         callback()
// // //     },0)
// // // }
// // // console.log('작업 시작')
// // // work(()=>{
// // //     console.log('작업이 끝났음')
// // // })
// // // console.log('다음 작업')

// // // const myPromise = new Promise((resolve,reject)=>{
// // //     setTimeout(()=>{
// // //         resolve(1)
// // //     },1000)
// // // })
// // // myPromise.then(n=>{
// // //     console.log(n)
// // // })

// // function increaseAndPrint(n){
// //     return new Promise((resolve, reject)=>{
// //         setTimeout(()=>{
// //             const value = n+1;
// //             if (value === 5){
// //                 const error = new Error();
// //                 error.name = "valueisfiveerror"
// //                 reject(error);
// //                 return ;
// //             }
// //             console.log(value)
// //             resolve(value)
// //         },1000)
// //     })
// // }

// // // increaseAndPrint(0)
// // // .then(n=>{
// // //     return  increaseAndPrint(n);
// // // })
// // // .then (n=>{
// // //     return increaseAndPrint(n);
// // // })
// // // .then(n=>{
// // //     return increaseAndPrint(n);
// // // })
// // // .then(n=>{
// // //     return increaseAndPrint(n)
// // // })
// // // .then(n=>{
// // //     return increaseAndPrint(n)
// // // })
// // // .catch(e=>{
// // //     console.error(e)
// // // })
// // increaseAndPrint(0)   // then에서는 그전의 리턴값을 파라미터로 받아서 실행함
// //   .then(increaseAndPrint)
// //   .then(increaseAndPrint)
// //   .then(increaseAndPrint)
// //   .then(increaseAndPrint)
// //   .then(increaseAndPrint)
// //   .catch(e => {
// //     console.error(e);
// //   });



// function sleep(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
//   }
  
//   const getDog = async () => {
//     await sleep(1000);
//     return '멍멍이';
//   };
  
//   const getRabbit = async () => {
//     await sleep(500);
//     return '토끼';
//   };
//   const getTurtle = async () => {
//     await sleep(3000);
//     return '거북이';
//   };
  
//   async function process_basic() {
//     const dog = await getDog();
//     console.log(dog);
//     const rabbit = await getRabbit();
//     console.log(rabbit);
//     const turtle = await getTurtle();
//     console.log(turtle);
//   }
  


//   async function process_fail() {
//     const [dog, rabbit, turtle] = await Promise.all([
//       getDog(),
//       getRabbit(),
//       getTurtle()
//     ]);
//     console.log(dog);
//     console.log(rabbit);
//     console.log(turtle);
//   }

//   async function process_first() {
//     const first = await Promise.race([
//       getDog(),
//       getRabbit(),
//       getTurtle()
//     ]);
//     console.log(first);
//   }
  
//   process();
function makeSound(animal){
    const tasks = {
        "dog":"멍멍"
    }
    if (!tasks[animal]){
        console.log(',..?')
        return 
    }else{
        return console.log(tasks[animal])
    }
}
makeSound('dog')
