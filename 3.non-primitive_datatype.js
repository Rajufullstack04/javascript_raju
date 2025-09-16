// non primitive data type can be hold multible and complex values
// itis mutable,allowing changes ofter cration


// array

// array is one non primitive data type ,an array is called colection of values
// synatax : [value1,value2,.....any value.....];
// // the inndex of array start with 0,1,2..
// let EmpolyNames = ["Raju", "Ravi", "Venky", "Adarsh"];
// console.log(EmpolyNames);

// EmpolyIds = ["EmpolyID:0001", "EmpolyID:0002", "EmpolyID:0003", "EmpolyID:0004"];
// console.log(EmpolyNames[0]);
// console.log(EmpolyIds[0]);

// console.log(EmpolyNames[1]);
// console.log(EmpolyIds[1]);

// console.log(EmpolyNames[2]);
// console.log(EmpolyIds[2]);

// console.log(EmpolyNames[3]);
// console.log(EmpolyIds[3]);

//object
 //an object is a collecation of key value pairs.
 //each key is unique,and each key maps to a value which can be datatype,numbers,sring,array evan anther object.
 //syntax  :{
             // key1:value1,
             // key2:value2,
             // ......
             // keyN:valueN};

//let take an exampule

// let Empolyditails ={
//     "Name": "Raju",
//     "age" : "25",
//     "DOB" : "04.10.1999",
//     "Adderes":"Kadiri",
//     "EmpolyID" : "EIxxxxxx25"
// }
// console.log(Empolyditails);
// console.log(Empolyditails.Adderes);
// console.log(Empolyditails.EmpolyID);
// console.log(Empolyditails.DOB);
   
let FmailyDitails ={
    "Head of the family":"Suryanarayana",
    "w/o Suryanarayana": "Ganagdevi",
    "kids" :
    
              { 

             firstkidditailes : {   
                "first kid name":"Venkatesh",
                "w/o Venkatesh":"Siri",
                "Son" : "Adhvik",
            },
        

        "second kid name": "Raju"
              },
    }
    console.log(FmailyDitails);

console.log(FmailyDitails.kids);
console.log(FmailyDitails["Head of the family"]);
console.log(FmailyDitails.kids["second kid name"]);
console.log(FmailyDitails.kids["firstkidditailes"]);
console.log(FmailyDitails.kids.firstkidditailes["Son"]);
console.log(FmailyDitails.kids.firstkidditailes["w/o Venkatesh"]);




// array of object

let Roommetesditailes = [
    {
        Roommte1 : "uday Reddy",
        reantSharing : "4000" 
    },
    {
         Roommte2 : "Gurunath Reddy",
        reantSharing : "2500" 

    },
    {
         Roommte3 : "Shiva Reddy",
        reantSharing : "2500" 
    },
    {
         Roommte4 : "Raju",
        reantSharing : "1500" 
    }
];

console.log(Roommetesditailes[0].Roommte1);
console.log(Roommetesditailes[0].reantSharing);
console.log(Roommetesditailes[1].Roommte2);
console.log(Roommetesditailes[1].reantSharing);
console.log(Roommetesditailes[2].Roommte3);
console.log(Roommetesditailes[2].reantSharing);
console.log(Roommetesditailes[3].Roommte4);
console.log(Roommetesditailes[3].reantSharing);














