var elemento = document.getElementById("textArea1").value = "";

function limita(elEvento, maximoCaracteres) {
    elemento = document.getElementById("textArea1");

    // Obtener la tecla pulsada
    var evento = elEvento || window.event;
    var codigoCaracter = evento.charCode || evento.keyCode;
    // Permitir utilizar las teclas con flecha horizontal
    if (codigoCaracter == 37 || codigoCaracter == 39) {
        return true;
    }

    // Permitir borrar con la tecla Backspace y con la tecla Supr.
    if (codigoCaracter == 8 || codigoCaracter == 46) {
        return true;
    }
    else return elemento.value.length < maximoCaracteres;
}

function actualizaInfo(maximoCaracteres) {
    elemento = document.getElementById("textArea1");
    var info = document.getElementById("alert1");

    if (elemento.value.length >= maximoCaracteres) {
        info.innerHTML = "Máximo " + maximoCaracteres + " caracteres";
    }
    else {
        info.innerHTML = "Puedes escribir hasta " + (maximoCaracteres - elemento.value.length) + " caracteres adicionales";
    }
}


function hayAlgo(texto) {

    return texto != "";

}
function compruebaVacios(texto) {
    //TODO
}

function compruebaTexto(texto) {
    var regEx = /[a-zA-Z0-9_]/;

    if (regEx.test(texto)) {
        console.log("es texto y numeros");
        return true;
    }
}


function valida() {

    texto = document.getElementById("textArea2").value;

    if (hayAlgo(texto) && compruebaTexto(texto)) {
        console.log("hay algo");
    } else {
        console.log("no hay nada");
    }

}
