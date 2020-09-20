// const myPromise = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         resolve('asdasd')
//     },3000),
//     setTimeout(() => {
//       reject(new Error());
//     }, 2000);
//   });
  
// myPromise
// .then(n => {
//     console.log(n);
// })
// .catch(error => {
//     console.log(error);
// });


const delay = (ms,e)=> new Promise(resolve=>(setTimeout(resolve,ms)),reject=>(e))

async function main(){
    console.log('1');
    try{
        const x = await delay(2000) // 여기서 resolve가 되어야 다음 코드로 넘어감 return
        // false
    }catch(e){
        console.error(delay(2000,2))
    }
    
    console.log('2')
}
main()