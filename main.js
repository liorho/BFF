const game = Game();
const render = Render();


let a = game.createItem(3);
game.createArrayOfItems(a);
let b = game.createItem(3);
game.createArrayOfItems(b);
let c = game.createItem(3);
game.createArrayOfItems(c);


render.createItemDisplay(a);
render.createItemDisplay(b);
render.createItemDisplay(c);
// render.createItemDisplay(a);

console.log(a);
console.log(b);
console.log(c);






$("#capsule").on("click", "img", function () { 
    $(this).remove();
    
});


// ***************** Program ****************




// Start key -> rendering

// logic - pushing burger in array
//rendering timer + burgers + noItems + level

// on click - deleting from array
// rendering

// 

