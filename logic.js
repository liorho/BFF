const Game = function () {
    const heightConst = 2;
    const leftConst = 90;
    const topConst = 60;
    const widthMinSize = 2;
    const widthMaxSize = 8;
    const minTopGap = 13;
    const minLeftGap = 13;
    
    const imgAlt = "Burger"; // Enter Single Item Name!
    const imgSrc = "img/burger.jpg";
    const message = "Eat the Burgers!";
    
    let arrItems = [];
    let level = 0;
    let time = 0;
    const timeLevelDiff = 2;

    const randomLeftPos = () => Math.random() * leftConst;

    const randomTopPos = () => Math.random() * topConst;

    const width = (top) => widthMinSize + (top / topConst) * (widthMaxSize - widthMinSize);

    const height = (width) => width * heightConst;

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
        let Id = id;
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

    const createArrayOfItems = function (level) {
        arrItems = [];
        for (let i = 0; i < level; i++) {
            let newItem = createItem(i);
            arrItems.push(newItem);
        }
        return arrItems;
    }

    const deleteItem = function (id) {
        for (let i in arrItems) {
            if (id === arrItems[i].id) arrItems.splice(i, 1);
        }
    }

    const levelUp = function () {
        level++;
        time = level + timeLevelDiff;
    }

    const checkStatus = function () {
        if (arrItems.length === 0) return 1;
        if (time === 0) {
            if (arrItems.length === 0) return 1;
            else return 2;
        }
    }

    const changeTime = () => time--;

    const getArr = () => arrItems;

    const getTime = () => time;

    const getNumOfItems = () => arrItems.length;

    const getLevel = () => level;

    const getImgAlt = () => imgAlt;

    const getMessage = () => message;

    return {
        createItem,
        createArrayOfItems,
        deleteItem,
        levelUp,
        changeTime,
        checkStatus,
        getTime,
        getLevel,
        getArr,
        getNumOfItems,
        getImgAlt,
        getMessage,
    }
}