// 16th question solved



let moreGuests = ["Faiz", "Hunain", "Anas", "Abdullah"]
let absent1 = "Hunain"
let newGuests = "Muzammil"
moreGuests[moreGuests.indexOf(absent1)] = newGuests
// console.log(moreGuests)


// now adding 1 guest at the beggining

let newGuests1 = "Noor"
moreGuests.unshift(newGuests1)
// console.log(moreGuests)


// now adding 1 guest at the middle

let newGuest2 = "Mehmood"
let middleindex = Math.floor(moreGuests.length/2)
moreGuests.splice(middleindex, 0, newGuest2)
// console.log(moreGuests)


// now adding 1 more guest at the end 

let newGuest3 = "Aisha"
moreGuests.push(newGuest3)
// console.log(moreGuests)


moreGuests.map((guests)=>
console.log(`Hi! ${guests}, now i got a bigger dinning table so i have invited more people.`)
)