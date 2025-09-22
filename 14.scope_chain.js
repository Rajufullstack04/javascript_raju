// block1 -scope1 
{
let  headofthefamily  = "suryanarayana";
console.log(headofthefamily);
// console.log("the first kid of suryanarayana is",firstkidname); // it con't accesseble
// console.log("the second kid of suryanarayana is",secondkid); // it con't accesseble

{     
    //block2-scope2
    let firstkidname = "venkatesh";
    console.log("the father of venkaateesh is",headofthefamily);


    { 
        // block3-scope3
        let secondkid = "Raju";
        console.log("the father of  Raju is",headofthefamily);
        console.log("Raju Elder borther is",firstkidname);

    }

}

}