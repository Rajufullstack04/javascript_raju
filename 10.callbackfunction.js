// callback function 
// function can accept other functions as aparameter,which is called callback function.
// we can pass the named function also as parameter anther function.

function sayhello(callbackfn1){
callbackfn1("Surayanarayana","Ganagdevi");

}
sayhello(function(fathername,mothername){
    console.log("raju");
    console.log(fathername);
    console.log(mothername);
});


//