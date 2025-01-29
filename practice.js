// callBack

// function sum (a,b){
//     console.log(a +b);
// }
// function cal (a,b,callBack){
//     callBack(a,b);
// }

// cal(2,4,sum);

function getData (dataId){
   return new Promise((resolve, rejected)=>{
        setTimeout(() => {
        console.log("data Id is ",dataId);
        resolve("get success");
        }, 2000);
    });
}
console.log("data 1 fetching !");

(async function(){
    await getData(1); // wait till this complete
    console.log("this is END");
    await getData(3);
    await getData(2); 
})();

// getData(1).then(()=>{
//    console.log("data 2 fetching !");
//    getData(2).then(()=>{
//         console.log("data 3 fetching !");
//         return getData(3);
//     })
// })


// getData(1)
// .then(()=>{
//     return getData(2);
// })
// .then(()=>{
//     return getData(3);
// })
// .then(()=>{
//     console.log("success");
// })


// function getPromise1 (){
//     return new Promise ((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data 1");
//             resolve("done successfully");
//         },3000);
//     })
// }

// function print(){
//     return new Promise ((resolve,reject)=>{
//         reject("technical error");
//         // setTimeout(()=>{
//         //     console.log("This is the END !");
            
//         // },2000);
//     })
// }

// function getPromise2 (){
//     return new Promise ((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data 2");
//             resolve("done successfully");
//         },3000)
//     })
// } 
// console.log("data 1 fetching");

// getPromise1().then((res)=>{
//     console.log("data 2 fetching");
//     getPromise2().then((res)=>{
//         console.log(res);
// print().then((err)=>{}) 
//     })
// })



// function getData (dataId,delayId){
//    return new Promise((resolve, rejected)=>{
//         setTimeout(() => {
//         console.log("data Id is ",dataId);
//         // resolve("get success");
//         rejected("payment is not done till now");
//         if(delayId){
//             delayId();
//         }
//     }, 5000);
//     })
    
// }
// getData(1,()=>{
//     getData(2);
// })
