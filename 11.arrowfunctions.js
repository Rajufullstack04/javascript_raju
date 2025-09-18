// an arrow function is a shorter way to write function in javascript.
// it can be used to quick oprations or callbacks and help to make the code cleaner.

//syntax of an arrow function ()=>{
    //                              we write satements here         };
       


     //named function ---------------------------------------

     function collages(){ 
    let collagenames = ["stsn","Gjc boys","svcet"];
    console.log(collagenames[0]);
    console.log(collagenames[1]);
    console.log(collagenames[2]);
 }
console.log(collages);
 collages();


 // anouymous function----------------------------------

 let collageditailes = function (clg1,clg2,clg3){
let detiles = "collages";
    console.log(detiles);
console.log(clg1);
console.log(clg2);
console.log(clg3);

 }
("stsn","Gjc boys","svcet");


// arrow function -------------------------------

let getcollageditailes = (clg1,clg2,clg3)=>{
// let detiles = "collages";
//     console.log(detiles);
// console.log(clg1);
// console.log(clg2);
// console.log(clg3);
return `collagenames - ${clg1},${clg2},${clg3}`;

}
let ditailes = getcollageditailes("stsn","Gjc boys","svcet");
console.log(ditailes);