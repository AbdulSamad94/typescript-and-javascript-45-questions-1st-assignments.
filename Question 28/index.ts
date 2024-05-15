let personAge = [1, 2, 3, 4, 7, 13, 17,20,35,65,70]
let random = Math.floor(Math.random() *11 + 1)
function a(){
    if(random == 1){
      return personAge[0]
    }
    else if(random == 2){
        return personAge[1]
    }
    else if(random == 3){
        return personAge[2]
    }
    else if(random == 4){
        return personAge[3]
    }
    else if(random == 5){
        return personAge[4]
    }
    else if(random == 6){
        return personAge[5]
    }
    else if(random == 7){
        return personAge[6]
    }
    else if(random == 8){
        return personAge[7]
    }
    else if(random == 9){
        return personAge[8]
    }
    else if(random == 10){
        return personAge[9]
    }
    else{
       return personAge[10]
    }
}
if(a() <= 2){
    console.log("The Person is Baby")
}
else if(a() <=4 ){
    console.log("The Person is a Toddler")
}
else if(a() <= 13){
    console.log("The person is a Kid")
}
else if(a() <= 20){
    console.log("The person is a Teenager")
}
else if(a() < 65){
    console.log("The person is a Adult")
}
else if(a() >= 65){
    console.log("The person is an elder")
}

