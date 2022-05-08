
document.addEventListener('DOMContentLoaded', () => {
    let squares = document.querySelectorAll('.square');

    squares.forEach((squere) => {
        squere.addEventListener('click', handleClick);
    })
})

function handleClick(event) {
    let square = event.target;
    let position = square.id;
    if (handleMove(position)) {

        setTimeout(function () {
            alert('O jogo acabou');
        },500)

    };


    updateSqueres();
}

function updateSqueres() {
    let squares = document.querySelectorAll('.square');

    squares.forEach((square) => {
        let position = square.id;
        let symbol = board[position];

        if (symbol != '') {
            square.innerHTML = `<div class='${symbol}'></div>`;
        }
    });
}
