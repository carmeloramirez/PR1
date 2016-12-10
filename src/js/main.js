var counter1 = 10;

function escribiendo(event) {
    if (counter1 >= 0) {
        var letra = event.which || event.keyCode;
        console.log(letra);
        mensaje = "TODO OK, por el momento..." + counter1;

        counter1 --;
    } else {
        mensaje = "MAX ADMITIDO ALCANZADO" + counter1;
    }

    document.getElementById("alert1").innerHTML = mensaje ;
}

