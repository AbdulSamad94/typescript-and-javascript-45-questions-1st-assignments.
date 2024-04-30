// question 17 
//----Shrinking Guest list--------
var guests = ["Faiz", "Anas", "Abdullah", "Hunain", "Ali", "Muzammil"];
var suddenMessage = "Sorry! The dinning table has space only for two people";
while (guests.length > 2) {
    var dismissGuests = guests.pop();
    console.log("Sorry!! ".concat(dismissGuests, ", you can not come to the dinner"));
}
console.log("------------------------------------------------------------------------");
guests.forEach(function (a) {
    console.log("Dear ".concat(a, ", the space is available for you can can join the dinnner"));
});
guests.pop();
guests.pop();
console.log("The Final remaing list is empty as --> : ".concat(guests));
