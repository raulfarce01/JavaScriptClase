const cont = /(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\W).*/
const nomb = /(?=.*[A-Z])(.*[0-9]).*/

do {

    confirm("¿Seguir?");

    do {

        var user = prompt("Nombre");
        var passwd = prompt("Contraseña");

        if (!user.match(nomb)) {
            alert("Nombre Incorrecto");
        }

        if (!passwd.match(cont)) {
            alert("Contraseña Incorrecta");
        }

    } while (!user.match(nomb) || !passwd.match(cont))

    document.write(user);
    document.write(passwd);

} while (acepta);