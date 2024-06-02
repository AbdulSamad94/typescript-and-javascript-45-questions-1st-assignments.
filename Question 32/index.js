"use strict";
let currentUser = ["Samad", "anas", "Abdulah", "Ali", "Sarah"];
let currentUserLowerCase = currentUser.map(e => e.toLowerCase());
let newUser = ["Muhammed", "Alishba", "sarah", "Anas", "Mehdi"];
newUser.forEach(e => {
    if (currentUserLowerCase.includes(e.toLocaleLowerCase())) {
        console.log(`Sorry ${e}, try to select other name this name has been taken..`);
    }
    else {
        console.log(`${e}, this name is available.`);
    }
});
