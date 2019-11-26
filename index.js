let buttons = document.getElementsByClassName("button");
let snd = document.getElementById('audio');
let alt = document.getElementById('alert');

let interfaceTab = document.getElementById("interface-tab");

let volume = localStorage.getItem('volume');

snd.volume = (volume == null) ? 0.75 : volume;

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

let volControl = document.getElementById("volume");
let volStatus = document.getElementById("volumeStatus");
volControl.value = (volume == null) ? 75 : volume * 100;
volStatus.innerText = `Current value: ${volControl.value}`;
volControl.oninput = e => {
    volStatus.innerText = `Current value: ${volControl.value}`;
}


let exit = document.getElementById('exitYes');
exit.onclick = e => {
    snd.play();
    alert("Saliste.\nBye\nAnimación bien aca de salida.");
}


$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})


let btnSettings = document.getElementById("settings");

btnSettings.onclick = e => {
    btnSettings.classList.remove('active');
    snd.play();
    interfaceTab.classList.add('active');
}

let btnBack = document.getElementById("back");

btnBack.onclick = e => {
    btnBack.classList.remove('active');
    snd.play();
    alt.classList.add('show');
}

document.getElementById("closeAlert").onclick = e => {
    alt.classList.remove('show');
};

let resolutions = ["640 x 480", "1280 x 720", "1920 x 1080"];
let res = localStorage.getItem('resolution');
let rIndex = (res == null) ? 1 : res;

let resolution = document.getElementById("resolution");
let btnbRes = document.getElementById("bResolution");
let btnfRes = document.getElementById("fResolution");

btnbRes.onclick = e => {
    if (rIndex > 0) {
        rIndex--;
        resolution.innerText = `${resolutions[rIndex]}`;
        snd.play();
        btnfRes.disabled = false;
        if (rIndex == 0) {
            btnbRes.disabled = true;
        }
    }
}

btnfRes.onclick = e => {
    if (rIndex < resolutions.length - 1) {
        rIndex++;
        resolution.innerText = `${resolutions[rIndex]}`;
        snd.play();
        btnbRes.disabled = false;
        if (rIndex == resolutions.length - 1) {
            btnfRes.disabled = true;
        }
    }
}

