let random = Math.floor(Math.random() * 3 + 1)
let alienColor = ["Green", "Yellow", "Red"]
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
if(a() == 'Green' || a() == 'Yellow'){
    console.log("You Just Earned 5 Points For Shooting..")
}
else{
    console.log("You Earned 10 Points..")
}