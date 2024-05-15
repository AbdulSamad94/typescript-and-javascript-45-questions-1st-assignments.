var userNames = ["Abdullah", "Faiz", "Admin", "Samad", "Anas"];
userNames.forEach(function (e) {
    if (e == "Admin") {
        console.log("Hello Admin, would you like to see the status report?");
    }
    else {
        console.log("Hello", e, "thank you for logging in again..");
    }
});
