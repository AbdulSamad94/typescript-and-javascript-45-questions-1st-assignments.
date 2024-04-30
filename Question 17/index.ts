// question 17 
//----Shrinking Guest list--------

let guests = ["Faiz", "Anas", "Abdullah", "Hunain", "Ali", "Muzammil"]

let suddenMessage = "Sorry! The dinning table has space only for two people"

while(guests.length > 2){
     let dismissGuests = guests.pop()
     console.log(`Sorry!! ${dismissGuests}, you can not come to the dinner`)
}
console.log("------------------------------------------------------------------------")

guests.forEach(a => {
    console.log(`Dear ${a}, the space is available for you can can join the dinnner`)
});

guests.pop()
guests.pop()

console.log(`The Final remaing list is empty as --> : ${guests}`)