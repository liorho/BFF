const game = Game();
const render = Render();
let playing;
let status;


const intervalFunc = function () {
    status = game.checkStatus();
    if (status===1) playGame();
    if (status===2) {
        clearInterval(playing);
        render.renderGameOver();
    }
    if (!status==1) render.renderTimer(game.getTime());
    if (!status==1) game.changeTime();
}

const playGame = function () {
    game.levelUp();
    game.createArrayOfItems(game.getLevel());
    setTimeout(() => {render.renderNoItems(game.getNumOfItems(), game.getImgAlt())}, 1000); ;
    render.renderStart(game.getArr(), game.getMessage());
    setTimeout(() => {render.renderLevel(game.getLevel())}, 1000); 
    setTimeout (()=>{render.renderAllItems(game.getArr())}, 1000); 
}

const startGame = function () {
    playing = setInterval(intervalFunc, 1000);
    playGame();
}

const restartGame = () => window.location.reload(true);

// **************** RUN PROGRAM **********************

render.renderStart(game.getArr);

$("#start").click(startGame);

$("#capsule").on("click", "img", function () {
    let index = $(this).data("id");
    game.deleteItem(index);
    render.renderNoItems(game.getNumOfItems(), game.getImgAlt());
    $(this).remove();
});

$("body").on("click", "#gameOver", (restartGame));