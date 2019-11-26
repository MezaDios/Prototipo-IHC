let buttons = document.getElementsByClassName("button");
let snd = document.getElementById('audio');
let alt = document.getElementById('alert');
let altS = document.getElementById('alertS');

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

document.getElementById("closeAlert").onclick = e => {
    alt.classList.remove('show');
    snd.play();
};
document.getElementById("closeAlertS").onclick = e => {
    altS.classList.remove('show');
    snd.play();
};

let resolutions = ["640 x 480", "1280 x 720", "1920 x 1080"];
let res = localStorage.getItem('resolution');
let rIndex = (res == null) ? 1 : res;

let resolution = document.getElementById("resolution");
let btnbRes = document.getElementById("bResolution");
let btnfRes = document.getElementById("fResolution");

resolution.innerText = `${resolutions[rIndex]}`;


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

let colors = [
    ["Default", "Colorblind mode"],
    ["./normal.jpeg", "./daltonico.jpeg"]
];
let color = localStorage.getItem('color');
let cIndex = (color == null) ? 0 : color;

let colorText = document.getElementById("color");
let btnbColor = document.getElementById("bColor");
let btnfColor = document.getElementById("fColor");

let img = document.getElementById("image");
colorText.innerText = `${colors[0][cIndex]}`;
img.src = `${colors[1][cIndex]}`;

btnbColor.onclick = e => {
    if (cIndex > 0) {
        cIndex--;
        colorText.innerText = `${colors[0][cIndex]}`;
        img.src = `${colors[1][cIndex]}`;
        snd.play();
        btnfColor.disabled = false;
        if (cIndex == 0) {
            btnbColor.disabled = true;
        }
    }
}

btnfColor.onclick = e => {
    if (cIndex < colors[0].length - 1) {
        cIndex++;
        colorText.innerText = `${colors[0][cIndex]}`;
        img.src = `${colors[1][cIndex]}`;
        snd.play();
        btnbColor.disabled = false;
        if (cIndex == colors[0].length - 1) {
            btnfColor.disabled = true;
        }
    }
}

let fonts = [
    ["Small", "Default", "Big"],
    ["0.75rem", "1rem", "1.5rem"]
];
let fontSize = localStorage.getItem('font');
let fIndex = (fontSize == null) ? 1 : fontSize;

let font = document.getElementById("font");
let btnbFont = document.getElementById("bFont");
let btnfFont = document.getElementById("fFont");

font.innerText = `${fonts[0][fIndex]}`;
font.style.fontSize = `${fonts[1][fIndex]}`;

btnbFont.onclick = e => {
    if (fIndex > 0) {
        fIndex--;
        font.innerText = `${fonts[0][fIndex]}`;
        font.style.fontSize = `${fonts[1][fIndex]}`;
        snd.play();
        btnfFont.disabled = false;
        if (fIndex == 0) {
            btnbFont.disabled = true;
        }
    }
}

btnfFont.onclick = e => {
    if (fIndex < fonts[0].length - 1) {
        fIndex++;
        font.innerText = `${fonts[0][fIndex]}`;
        font.style.fontSize = `${fonts[1][fIndex]}`;
        snd.play();
        btnbFont.disabled = false;
        if (fIndex == fonts[0].length - 1) {
            btnfFont.disabled = true;
        }
    }
}


resetSettings = () => {
    volControl.value = (volume == null) ? 75 : volume * 100;
    volStatus.innerText = `Current value: ${volControl.value}`;

    rIndex = (res == null) ? 1 : res;
    resolution.innerText = `${resolutions[rIndex]}`;

    cIndex = (color == null) ? 0 : color;
    colorText.innerText = `${colors[0][cIndex]}`;
    img.src = `${colors[1][cIndex]}`;

    fIndex = (fontSize == null) ? 1 : fontSize;
    font.innerText = `${fonts[0][fIndex]}`;
    font.style.fontSize = `${fonts[1][fIndex]}`;
}


let btnBack = document.getElementById("back");

btnBack.onclick = e => {
    btnBack.classList.remove('active');
    snd.play();
    alt.classList.add('show');
    resetSettings();
}

let btnCancel = document.getElementById("cancel");

btnCancel.onclick = e => {
    btnCancel.classList.remove('active');
    snd.play();
    alt.classList.add('show');
    resetSettings();
}

let btnSave = document.getElementById("save");

btnSave.onclick = e => {
    btnSave.classList.remove('active');
    snd.play();
    altS.classList.add('show');

    localStorage.setItem('volume', volControl.value / 100);

    localStorage.setItem('resolution', rIndex);

    localStorage.setItem('font', fIndex);

    localStorage.setItem('color', cIndex);
}


let btnPlay = document.getElementById("play");
btnPlay.onclick = e => {
    alert("Animación de entrada bien aca.");
}
