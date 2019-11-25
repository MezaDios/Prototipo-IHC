let buttons = document.getElementsByClassName("button");

console.log(buttons);

for (let button of buttons) {
    button.onmouseover = e => {
        button.classList.add('animated', 'pulse');
    }
    button.onmouseout = e => {
        button.classList.remove('animated', 'pulse');
    }
}
