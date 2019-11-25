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
    button.onclick = e => {
        snd.play();
    }
}
