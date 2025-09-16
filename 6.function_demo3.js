// retuten type & non-return type (function).

//return type function : a function which return the data is called retrun type function.

// we can declare the return tpye function by using (return) keyword onthe function.


let myName= "Raju";


function getmyName(){
    return "Raju";
}
console.log(getmyName());
/////............................

function Roolname(){
    return "web devalaper";
}
let roolname = Roolname();
console.log(roolname);


function getsubejects(){
    let subjectnames = ["html","javascrit","css"];
    return subjectnames;
}
let subjects = getsubejects();
console.log(subjects);
console.log("subject one is",subjects[0]);
console.log("subject two is", subjects[1]);


// non-return type function (or) void function
 
// a function which dosen't  give any return type then that function called rterun type function.
 
function getmyName(){
    console.log("my name is Raju");
}
getmyName();