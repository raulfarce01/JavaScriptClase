function parImpart(num) {

    return ((num % 2 == 0) ? true : false);

}

function genera50Random() {

    for (i = 0; i < 50; i++) {

        num = parseInt(Math.random() * 1000 + 1);

        if (parImpart(num)) {

            document.write(`${num} Par <br>`);

        } else {

            document.write(`${num} Impar <br>`);

        }

    }

}

genera50Random();

//var num = prompt("Escribe número");