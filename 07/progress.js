const $progress = document.querySelector("#progress");

let percent = 0;
let count = 1;

function progressBar(){
    if(percent >= 100){
        count = -count;
    } else if (percent <= 0){
        count = -count;
    }
    percent += count;
    $progress.style.width = `${percent}%`;
}

setInterval(progressBar, 50);