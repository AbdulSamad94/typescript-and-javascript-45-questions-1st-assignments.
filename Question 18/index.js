//Question 18
//--------------Seeking the world--------------
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var favPlaces = ["London", "Dubai", "Japan", "Turkey", "Thailand"];
console.log("The orignal list is :", favPlaces);
console.log("The alphabetic order list is :", __spreadArray([], favPlaces, true).sort());
console.log("The orignal list was : ", favPlaces);
console.log("The reverse order list is:", __spreadArray([], favPlaces, true).reverse());
console.log("the orignal list is still :", favPlaces);
console.log("Reversing the order:", favPlaces.reverse());
console.log("Reversing the order again! The list is now in its orignal order :", favPlaces.reverse());
console.log("Sorting again! :", favPlaces.sort());
console.log("Sorting again! :", favPlaces.sort());
