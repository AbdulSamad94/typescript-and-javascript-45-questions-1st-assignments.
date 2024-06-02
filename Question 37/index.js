function makeShirt(size, text) {
    if (size === void 0) { size = "large"; }
    if (text === void 0) { text = "i really love typescript"; }
    console.log("The size of the shirt is ".concat(size, " \n").concat(text));
}
makeShirt();
makeShirt("medium", "i love pizzas");
makeShirt("small", "I dont like errors");
