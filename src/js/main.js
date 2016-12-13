var elemento = document.getElementById("textArea1").value = "";
var texto = document.getElementById("textArea2").value = "";

function limita(eventoRecibido, max, id) {

    elemento = document.getElementById(id).value;
    var evento = eventoRecibido || window.event;
    var codigoCaracter = evento.charCode || evento.keyCode;
    if (codigoCaracter == 37 || codigoCaracter == 39) {
        return true;
    }

    if (codigoCaracter == 8 || codigoCaracter == 46) {
        return true;
    }
    else return document.getElementById(id).value.length < max;
}


function actualizaInfo(maximoCaracteres, id, idAlert) {
    elemento = document.getElementById(id);
    var info = document.getElementById(idAlert);

    if (elemento.value.length >= maximoCaracteres) {
        info.innerHTML = "Máximo " + maximoCaracteres + " caracteres";
    }
    else {
        info.innerHTML = "Caracteres disponibles:  " + (maximoCaracteres - elemento.value.length);
    }
}


function hayAlgo(texto) {
    return texto != "";
}

function compruebaTexto(texto) {
    var regEx = /[a-zA-Z0-9_]/;
    if (regEx.test(texto)) {
        document.getElementById('alert2').innerHTML = "Es texto y numeros";
        return true;
    }
}

function valida() {
    texto = document.getElementById("textArea2").value;
    mensaje = document.getElementById("textArea2").innerHTML;
    if (hayAlgo(texto) && compruebaTexto(texto)) {
        mensaje = "VALIDO... validaciones comprobadas";
    } else {
        mensaje = "NO VALIDO .... (comprueba formato, no debe estar en blanco y contener caracteres de texto o numeros)";
    }
    document.getElementById('alert2').innerHTML = mensaje;
}

function muestra() {
    var elemento = document.getElementById("checkBox");
    var boton = document.getElementById("checkButton");
    console.log(elemento.value);
    if (elemento.checked) {
        boton.style.display = "inline";
        mensaje = "Ya puedes ver el botón";
    } else {
        boton.style.display = "none"
        mensaje = "Hay que darle al check para que muestre el boton";
    }
    document.getElementById('alert3').innerHTML = mensaje;
}
