//Golbalblock =  it is defalt eniviranment  ware code start the execution



// lpcalblock = it is a one piece of code difined by  {...........},and it containg its own varibles.


// Scope chain = Determining how varibules are accesed in nested books,connecting localscope to the global scope.


// GlobalScope varables are accessed any ware in the javascript file ,including with in local blocks.
// LocalScope varibules (let,const) are only accessible with in the block where they are difined it.

// exampuls



//golbalblock

var greencolor = "Green";




//  localblock1
{

    let bluecoler = "blue";
    console.log(bluecoler);
    console.log(greencolor);

    // console.log(redcolor);  
     //it will give not difind or exception

}


//  localblock2
{
    let redcolor = "Red";
    console.log(redcolor);
    console.log(greencolor);

    // console.log(bluecoler);       //it will give not difind or exception

}


// localblock3


{
    let pinkcolor = "Pink";
    console.log(pinkcolor);
    console.log(greencolor);

    console.log(bluecoler);       //it will give not difind or exception

}
