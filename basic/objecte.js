///***************************************obje ko dikaleyar krne ke trike***************************** *///
///// {1} literal , {2} constructor////////////

////////// Constructor ki tarah objecte banate hai to vo singleton obje banta hai  //////////////////////
/*********** singleton objctee.create se diffaind kya jata hai **************/

const mySym = Symbol("Key2")

const JsSon = {
    name : "sangeeta",
    "Full name" : "kapil rajut",
    age : 22,
  [mySym] : "myKey3",
    email : "cvfjelkejrglnmggh",
    city : "delhi",
    id : 25542
}

//console.log(JsSon.email)
//console.log(JsSon["email"])
//console.log(JsSon["Full name"])

//console.log(JsSon[mySym])

JsSon.email = "cvfjelkejrglnmggh"
//Object.freeze(JsSon)
JsSon.email = "NHGVGBGVB" 
 
//console.log(JsSon)

JsSon.greeting = function(){
    console.log(`hello i'm, ${this.name}, my ${this.age}`);
}

console.log(JsSon.greeting())