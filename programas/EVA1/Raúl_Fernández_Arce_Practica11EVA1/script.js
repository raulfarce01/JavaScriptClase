var num = parseInt(Math.random() * 1001);
var intentos = 0;

var juega = confirm("Haz click en confirmar para jugar");

while (juega) {
    if (numUsuario < 0 || numUsuario > 1000) {

        var numUsuario = parseInt(prompt("Escribe un número entre 0 y 1000"));

    } else {

        if (numUsuario === num) {

            var juega = confirm(`Has hacertado el número en ${intentos} intentos, seguir jugando?`);

            if (juega) {

                numUsuario = 0;
                intentos = 0;

            }

        } else {

            if (numUsuario > num) {

                var numUsuario = parseInt(prompt("El número secreto es menor"));

            } else {

                var numUsuario = parseInt(prompt("El número secreto es mayor"));

            }

            intentos++;

        }

    }
}

document.write("El juego ha finalizado, actualiza la página para volver a jugar");