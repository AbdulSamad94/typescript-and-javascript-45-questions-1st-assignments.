//15th question solved
var guest = ["Faiz", "Anas", "Hunain", "Abdullah"];
var absent = "Anas";
// console.log(absent + ", Couldn't attend the dinner.")
var newGuest = "Abdul Samad";
guest[guest.indexOf(absent)] = newGuest;
console.log(guest);
