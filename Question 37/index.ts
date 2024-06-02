function makeShirt(size : string = "large", text :string = "i really love typescript"):void {
    console.log(`The size of the shirt is ${size} \n${text}`) 
}
makeShirt();
makeShirt("medium", "i love pizzas")
makeShirt("small", "I dont like errors")