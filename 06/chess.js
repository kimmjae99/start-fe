const $board = document.getElementById('board');

function createBoard(){
    const div = '<div class="${color}"></div>';
    return div;
}

function createRow(count=4, startColor){
    let row = '';
    for(let i = 0; i < count; i++){
        let color = '';
        if(i % 2 ==0){
            color = startColor ==='white' ? 'black' : 'white';
        }
        row += createBoard(startColor);
    }
}

function createChessBoard(count=4){
    let board = '';
    for(let i = 0; i < count; i++){
        const startColor = i % 2 == 0 ? 'black' : 'white';
        board += createRow(4, startColor);
    }
    return board;
}

let $prevTarget = '';
$board.addEventListener('click',selectBoard());
$board.innerHTML = createChessBoard();

function selectBoard() {
    return event => {
        const $target = event.target;
        //$target.className += ' red';
        if ($target == $prevTarget)
            return;
        $target.classList.add('red');


        $prevTarget && $prevTarget.classList.remove('red');

        const $prevTarget = $target;
    };
}
