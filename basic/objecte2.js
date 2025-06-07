const userTime = new Object()
//console.log(userTime)

const user = {}

user.id = "2456868",
user.email = "vhvhfhshgmjgb"
user.loggin = true

//console.log(user)

const  userDetail ={
    email : "sangeeta@1540gamil.com",
    fullName : {
       userName  : {
         fistName : "sangeeta",
         lastName : "rajput"
       }
    }
}
 
console.log(userDetail.fullName.userName)

const obje1 = {1 : "a" ,2 : "b"}
const obje2 = {3 : "a" ,4 : "b"}
const obje3 = {5 : "a" ,6 : "b"}

//const obje4 = {...obje1,...obje2,...obje3}
//console.log(obje4)

//console.log(Object.keys(user))
//console.log(Object.values(user))
//console.log(Object.entries(user))


///////********************** object ****  destructure  *****************/////////////////////////

const course = {
      name : "sangeeta",
      class: "javascript",
      pirce : 999

}

const {name} = course
console.log(name)

////////////// *********************** Api **********************////////////////////
 
//{
 // "name" : "nishant",
  //"class" : "js in hindi",
  // "prirce": "free",
//}

[
  {},
  {},
  {}
]