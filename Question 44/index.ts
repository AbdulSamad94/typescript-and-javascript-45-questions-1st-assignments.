function sandwich(...items : string[])  {
    console.log("The Sandwiches that are ordered:")

    for (let i = 0; i < items.length; i++) {
         console.log(`- ${items[i]}`)
    }
}
sandwich("Tomato", "Capcicum", "pepporoni")
sandwich("Cheese", "Chicken")
sandwich("Chilli Garlic")