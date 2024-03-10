// 16th question solved
var moreGuests = ["Faiz", "Hunain", "Anas", "Abdullah"];
var absent1 = "Hunain";
var newGuests = "Muzammil";
moreGuests[moreGuests.indexOf(absent1)] = newGuests;
// console.log(moreGuests)
// now adding 1 guest at the beggining
var newGuests1 = "Noor";
moreGuests.unshift(newGuests1);
// console.log(moreGuests)
// now adding 1 guest at the middle
var newGuest2 = "Mehmood";
var middleindex = Math.floor(moreGuests.length / 2);
moreGuests.splice(middleindex, 0, newGuest2);
// console.log(moreGuests)
// now adding 1 more guest at the end 
var newGuest3 = "Aisha";
moreGuests.push(newGuest3);
// console.log(moreGuests)
moreGuests.map(function (guests) {
    return console.log("Hi! ".concat(guests, ", now i got a bigger dinning table so i have invited more people."));
});
