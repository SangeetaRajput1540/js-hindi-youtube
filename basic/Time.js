let setDate = new Date ()
//console.log(setDate)

//console.log(setDate.toString())
//console.log(setDate.toLocaleString())
//console.log(setDate.toLocaleDateString())
//console.log(setDate.toISOString())
//console.log(setDate.toJSON())
//console.log(setDate.toTimeString())

let mySetDate = new Date(2025, 0, 24, 20, 5, 3)
//console.log(mySetDate.toDateString())
//console.log(mySetDate.toString())
//console.log(mySetDate.toLocaleString())

///********************Time stamp************************** *///
let myTime =  Date.now()
//console.log(myTime)
//console.log( mySetDate.getTime())

let setDateMy = Date.now() 
//console.log(Math.floor(Date.now()/1000))

mySetDate.toLocaleString('default', {
     weekday: "long" 
})