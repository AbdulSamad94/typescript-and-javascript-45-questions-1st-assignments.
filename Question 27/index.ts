let alienColor = ["Green", "Red", "Yellow"]
let random = Math.floor(Math.random()* 3 + 1)
function a(){
    if(random == 1){
        return alienColor[0]
    }
    else if(random == 2){
        return alienColor[1]
    }
    else{
        return alienColor[2]
    }
}
if(a() == "Green"){
    console.log("You Earned 5 points")
}
else if(a() == "Yellow"){
    console.log("You Earned 10 points")
}
else{
    console.log("You Earned 15 points ")
}