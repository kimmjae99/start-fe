var board = document.getElementById("board");
let color = true;
let setColor = "";
let str = ``;

for(var i=0; i<4; i++){
    for(var j=0; j<4; j++){
        
        if(color){
            setColor = "black";
        } else {
            setColor = "white";
        }

        str += `<span class="${setColor}"></span>`
        
        color = !color;
    }
    color = !color;
}
board.innerHTML = str;

let spans = document.querySelectorAll('span');

for(let i = 0; i < spans.length; i++){
    spans[i].addEventListener('click', click);
}
function click(event){
    let clickSpan = event.currentTarget;
    clickSpan.className += ' red';
    
}