//a function is called a set of statemaents.
// the syntax of a funcation is function(){
//                                          we can take statementes here   }

// to cteate or declare a function by using function key word
function collages(){ 
    let collagenames = ["stsn","Gjc boys"];
    console.log(collagenames[0]);
    console.log(collagenames[1]);
    console.log(collagenames[3]);
 }
console.log(collages);
 collages();

//---------------------------------------------------------





//anther function
function family()
{
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
console.log(FmailyDitails.kids.firstkidditailes["Son"]);
console.log(FmailyDitails.kids.firstkidditailes["w/o Venkatesh"]);


};
family();



//--------------------------------------
//we can criaate mulitipul functions also
