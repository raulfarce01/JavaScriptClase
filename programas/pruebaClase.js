function Par_impar(num) {
    this.x = num;

    this.error = {
        console.log("Dato insertado erróneo");
    }

    this.resuelve(num) = {
        if (num % 2 == 0) {
            console.log("par");
        } else {
            console.log("impar");
        }
    }

    this.muestraRandom = {
        for (i = 0; i < 10; i++) {
            random = parseInt(Math.random() * 10000 + 1);
            document.write(random);
            resuelve(random);
            document.write("<br>");
        }
        resuelve(this.x);
        muestraRandom();
    }
}