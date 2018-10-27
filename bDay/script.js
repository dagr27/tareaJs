var user = {
    nombre: "Daniel Gomez",
    bday: new Date(1999, 27, 7)
};
function edad(bday) {
    var dateact = new Date(Date.now());
    var age = dateact.getUTCFullYear() - bday.getUTCFullYear();
    if(bday.getMonth() < dateact.getMonth()){       
    }else if(dateact.getMonth() == bday.getMonth()){
        if(bday.getDate() <= bday.getDate()){
            console("Nope");
        }else{
            age = age - 1;
        }
    }else{
        age = age - 1;
    }
    return age;
}
