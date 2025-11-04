// Global contest----------------------

//in the golbaal scop  (outside any function),this refers to the globaal object.
// we will return window--

// var books = ["javascript","html"];
// var custmors = ["jhon","raju"];
// this.achivement = "crickat";
// console.log(this);


//-----------object level thiss key word--------------



// inside  a maethod  of an object, this refers to the object itself.



// if you prepare this keyword in object then it refers to the object itself.
// var Ditailes={
//     myname : "raju",
//     age   : 25,
//     getDitailes : function(){
//         this.Habites = "playing crickat";
//         this.DOB  = "4-10-25"
//         let localthis = this;
//         console.log("object leval context",localthis);
//         console,log(localthis.achivement);
//         console.log(this);
         
//     }
// }

// Ditailes.getDitailes();

//-------this in the constructer function-------------------------
// when used in a cconstructor function,this refers to the new object being created.


// function getmyDitailes(){

//     this.myage = 25;
//     this.myname ="Raju";
//     console.log(this);// this wiil show window

//     console.log(this.myage);
//   console.log(this.myname);


// }


// // getmyDitailes();
// new getmyDitailes();

//---------------------this in arrow function-----------------------

// arrow funcion do not have their own this.they inherit this from the parent scope at the time they are difined.


var Ditailes={
    myname : "raju",
    age   : 25,
    getDitailes : ()=>{
        this.Habites = "playing crickat";
        this.DOB  = "4-10-25"
        let localthis = this;
        console.log("object leval context",localthis);
        console,log(localthis.achivement);
        console.log(this);
         
    }
}
























