function car(manufactuture: string, modelName: string, color: string, horsePower?: string){
  let aboutCar: { manufactuture: string; modelName: string; color: string; horsePower?: string } = {
    manufactuture: manufactuture,
    modelName: modelName,
    color: color,
  }
  if (horsePower !== undefined) {
    aboutCar.horsePower = horsePower
  }
  return aboutCar
}

console.log(car("BMW", " M5 F90 (6th Gen)", "Black"))
console.log(car("NISSAN", " GTR r35", "Silver", "2000+ hp"))
