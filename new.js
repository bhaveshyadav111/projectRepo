// // const employee = {
// //     companyName: "ABC",
// //     calTax() {
// //         console.log("tax is 10 %");
// //     }
// // };
// let body = document.querySelector("body");
// body.style.backgroundColor = "pink";

// // const bhavesh = {
// //     calTax() {
// //         console.log("tax is 45 %");
// //     }
// // };

// // bhavesh.__proto__ = employee;


// class Bikes {
//     constructor (oil){
//         this.oil = oil;
//         console.log("parent const");
//     }
//     start (){
//         console.log("start");
//     }
//     stop (){
//         console.log("stop");
//     }
//     move (){
//         console.log("can move over two tyres");
//     }
// };

// class HeroBikes extends Bikes{
//     constructor (speed,oil){
//         console.log("child const");

//         super(oil); // to invoke the parent class

//         this.speed = speed;
//         console.log(`the speed is ${this.speed}`);
//     }
//     engine (){
//         console.log("best performance any in drastic situations");
//     }
// }
// let splender = new HeroBikes("130kmph","5 ltr");



// // more 
// let data = "this is college data";

// class Web {
    
//     constructor (name,email){ 
//         this.name = name; 
//         this.email = email; 
//     } 
 
//     //    console.log("data");
//     } 


// class Admin extends Web {
//     constructor (name,email){
//         super(name,email);
//     }
//     editInfo(){
//         data = "this is new info";
//         console.log(data);
//     }
// }

// let student1 = new Web("bhavesh","xo@gmail");
// let admin1 = new Admin("mentor","mentor@gmail.com");
// console.log(admin1.editInfo());
