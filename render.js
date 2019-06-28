const Render = function () {

    const renderItem = function (item) {
        const newItem = $(`<img data-id=${item.id} src=${item.imgSrc}>`);
        newItem.css({
            "position": "absolute",
            "left": `${item.posLeft}vw`,
            "top": `${item.posTop}vh`,
            "width": `${item.width}vw`,
            "height": `${item.height}vh`,
        })
        $("#capsule").append(newItem);
    }

    renderAllItems = function (arrItems) {
        if (arrItems.length != 0) {
            for (let item of arrItems) renderItem(item);
        }
    }

    const renderTimer = function (time) {
        let secondStr = (time === 1) ? "second" : "seconds";
        if (time !== 0) $("#Timer").html(`${time} ${secondStr} left`);
        else $("#Timer").html("");
        if (time<=3) $("#timer").css({"color": "rgb(255,85,55)"});
        else $("#timer").css({"color": "rgb(236,240,205)"});
    }

    const renderNoItems = function (numOfItems, imgAlt) {
        let nameOfItem = (numOfItems === 1) ? imgAlt : imgAlt + "s";
        if (numOfItems !== 0) {
            $("#noItems").html(`${numOfItems} ${nameOfItem} left`);
        } else {
            $("#noItems").html(``);
        }
    }

    const renderStart = function (arrItems, message) {
        let startStr = (arrItems.length === 0) ? "START" : message;
        $("#start").html(startStr);
    }

    const renderLevel = function (level) {
        if (level !== 0) {
            $("#level").html(`Level ${level}`);
        } else {
            $("#level").html(``);
        }
    }

    renderGameOver = function () {
        document.body.innerHTML = '';
        $("body").css({"background-color": "rgb(236,240,205)"});
        let gameOver = $('<div>GAME OVER</div>');
        gameOver.css({
            "font-family": `'Shojumaru', cursive`,
            "font-size": "12vw",
            "font-color": "black",
            "padding": "2vw",
            "padding-top": "20vh",
        })

        let startAgain = $('<div id="gameOver">Click to Start Again</div>');
        startAgain.css({
            "font-family": `'Lilita One', cursive`,
            "font-size": "3vw",
            "font-color": "black",
            "padding-top": "20vh",
            "padding-left": "70vw",
        })

        let burgerLogo = $(`<img class=burgerLogo src="img/hamburger.svg" alt=""></img>`);
        burgerLogo.css({
            "height": "12vw",
            "width": "12vw",
            "padding-top": "10vh",
            "padding-left": "4vw",
        })

        $("body").append(gameOver);
        $("body").append(burgerLogo);
        $("body").append(startAgain);
    }

    const renderAll = function (arrItems, time, numOfItems, level, imgAlt, message) {
        renderAllItems(arrItems);
        renderTimer(time);
        renderNoItems(numOfItems, imgAlt);
        renderStart(arrItems, message);
        renderLevel(level);
    }

    return {
        renderItem,
        renderAllItems,
        renderTimer,
        renderNoItems,
        renderStart,
        renderLevel,
        renderAll,
        renderGameOver
    }
}



