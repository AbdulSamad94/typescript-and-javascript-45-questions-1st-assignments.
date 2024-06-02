var magicianName = ["Harry Houdini", "Derren Brown", "Dynamo", "Criss Angel", "David Copperfield"];
function ShowMagiciansName() {
    magicianName.forEach(function (e) {
        console.log(e);
    });
    for (var i = 0; i < magicianName.length; i++) {
        console.log("The Great");
    }
}
ShowMagiciansName();
