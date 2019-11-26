let buttons = document.getElementsByClassName("button");
let snd = document.getElementById('audio');

let volume = localStorage.getItem('volume');

snd.volume = (volume == null) ? 1 : volume;

for (let button of buttons) {
    button.onmouseover = e => {
        button.classList.add('animated', 'pulse');
    }
    button.onmouseout = e => {
        button.classList.remove('animated', 'pulse');
    }
}


let sonideros = document.getElementsByTagName("button");

for (let sonidero of sonideros) {
    sonidero.onclick = e => {
        snd.play();
    }
}

let botones = document.getElementsByTagName("a");

for (let boton of botones) {
    boton.onclick = e => {
        snd.play();
    }
}


let exit = document.getElementById('exitYes');
exit.onclick = e => {
    alert("Saliste.\nBye\nAnimación bien aca de salida.");
}


$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})
