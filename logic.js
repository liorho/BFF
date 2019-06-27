const Game = function () {
    // Consts for new Item
    const heightConst = 2;
    const leftConst = 90;
    const topConst = 60;
    const widthMinSize = 2;
    const widthMaxSize = 8;
    const imgSrc = "img/burger.jpg";
    const imgAlt = "Burger";
    const minTopGap = 13;
    const minLeftGap = 13;


    let arrItems = []

    const randomLeftPos = () => Math.random() * leftConst;

    const randomTopPos = () => Math.random() * topConst;

    const width = (top) => widthMinSize + (top / topConst) * (widthMaxSize - widthMinSize);

    const height = (width) => width * heightConst;

    // Create Item
    const createItem = function (id) {
        let PositionLeft, PositionTop, error;
        
        do {
            error = false;
            PositionLeft = randomLeftPos();
            PositionTop = randomTopPos();
            for (let item of arrItems) {
                let leftGap = PositionLeft - item.posLeft;
                let topGap = PositionTop - item.posTop;
                leftGap = leftGap < 0 ? -leftGap : leftGap;
                topGap = topGap < 0 ? -topGap : topGap;
                if (leftGap < minLeftGap && topGap < minTopGap) error = true;
            }
        } while (error);
        
        
        // console.log(leftGap);
        // console.log(topGap);
        
        let Id = id;  //figure this out
        let Width = width(PositionTop);
        let Height = height(Width);
        
        
        let newItem = {
            id: Id,
            posLeft: PositionLeft,
            posTop: PositionTop,
            width: Width,
            height: Height,
            imgSrc: imgSrc,
            imgAlt: imgAlt
        }
        return newItem;
    }










    // Create Array of Items
    const createArrayOfItems = (item) => arrItems.push(item);







    return {
        createItem,
        createArrayOfItems




    }

}









