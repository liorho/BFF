const Render = function () {


    const createItemDisplay = function (item) {
        const newItem = $(`<img id=${item.id} src=${item.imgSrc}>`);
        newItem.css({
            "position": "absolute",
            "left": `${item.posLeft}vw`,
            "top": `${item.posTop}vh`,
            "width": `${item.width}vw`,
            "height": `${item.height}vh`,
        })
        $("#capsule").append(newItem);
    }

    return {
        createItemDisplay,


    }


}



