var magicianName = ["Harry Houdini", "Derren Brown", "Dynamo", "Criss Angel", "David Copperfield"];
function showMagicain() {
    for (var i = 0; i < magicianName.length; i++) {
        console.log("".concat(i + 1, ") ").concat(magicianName[i]));
    }
}
showMagicain();
