var dni = prompt("Introduce el DNI");

var letrasDni = "TRWAGMYFPDXBNJZSQVHLCKE";
var letrasDniMinus = letrasDni.toLowerCase();
var correcto = false;
var letra = "";
while (dni.valueOf() === "" || dni.length != 9) {

    dni = prompt("Introduce el DNI");

}
while (!correcto) {
    for (let i = 0; i < letrasDni.length; i++) {

        letra = letrasDni.charAt(i);
        letraMinus = letrasDniMinus.charAt(i);

        //console.log(letraMinus);

        if (!(dni.endsWith(letra)) && !(dni.endsWith(letraMinus))) {

            //console.log("Entra if dentro de bucle1");

            correcto = false;

        } else {

            //console.log("Entra else dentro de bucle1");

            correcto = true;
            break;

        }

    }

    if (!correcto) {

        dni = prompt("DNI Incorrecto. Prueba de Nuevo");

    }
}

if (correcto) {

    alert("DNI Correcto");

} else {

    alert("DNI incorrecto");

}