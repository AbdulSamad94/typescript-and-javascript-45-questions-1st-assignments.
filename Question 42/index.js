var magicianName = ["Harry Houdini", "Derren Brown", "Dynamo", "Criss Angel", "David Copperfield"];
function modifiedMagicians() {
    magicianName.forEach(function (e) {
        console.log("".concat(e, " the great!"));
    });
}
modifiedMagicians();
