"use strict";
let userNames = ["Samad", "Abdulllah", " Anas", "Ali"];
if (userNames.length > 0) {
    userNames.forEach(e => {
        while (userNames.length > 0) {
            console.log("thank you for login in again!!");
            userNames.pop();
        }
    });
    if (userNames.length == 0) {
        console.log("We need to find some users!");
    }
}
