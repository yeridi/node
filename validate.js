function validate(){
    var name, gmail, phone, expresion, area;
    area = document.getElementById("area").value;
    name  = document.getElementById("name").value;
    gmail  = document.getElementById("email").value;
    phone  = document.getElementById("phone").value;

    expresion = /\w+@\w+\.+{a-z}/;

    if(name === "" || gmail === "" || phone === "" || area === ""){
        alert("El campo nombre esta vacio :(");
        return false;
    }else if (area.length > 110 ){
        alert("A ingresado mucho texto en el mensaje :(");
        return false;
    }/* else if (phone.length > 10 || PointerEvent.length < 7){
        alert("El numero no existe, intentelo de nuevo"); */
    /* else if (gmail != expresion){
        alert("correo no aceptado :(")
        return false;
    } */

    var namen, gmailn, phonen,arean;

    document.getElementById("newname").innerHTML = name;
}