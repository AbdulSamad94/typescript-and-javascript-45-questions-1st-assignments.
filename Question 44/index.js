function sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("The Sandwiches that are ordered:");
    for (var i = 0; i < items.length; i++) {
        console.log("- ".concat(items[i]));
    }
}
sandwich("Tomato", "Capcicum", "pepporoni");
sandwich("Cheese", "Chicken");
sandwich("Chilli Garlic");
