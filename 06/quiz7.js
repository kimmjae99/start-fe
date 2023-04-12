const $point = document.querySelector("#point");
const $life = document.querySelector("#life");
const $box =document.querySelector(".box");
const $bug = document.querySelector("#bug");

let point = 0;
let life = 10;
let movingTime = 0;

function moveBug() {
    $bug.style.display = 'block';
    const x = getRandom($box.offsetWidth - $bug.offsetWidth);
    const y = getRandom($box.offsetHeight - $bug.offsetHeight);

    $bug.style.left = `${x}px`;
    $bug.style.top = `${y}px`;
}

function getRandom(max) {
    return Math.floor(Math.random() * max);
}



$bug.addEventListener('click', (event) => {
    point += 1;
    $point.innerHTML = point;
    $bug.style.display = 'none';
    restart();
    event.stopPropagation();
})

$box.addEventListener('click', (event) => {
    life -= 1;
    $life.innerHTML = life;
    if(life == 0){
        window.alert('GameOver,,,');
        clearInterval(movingTime);
        setTimeout(function(){location.reload();},3000); 
    }
})

function restart() {
    clearInterval(movingTime);
    movingTime = setInterval(moveBug, 1000);
}

restart();