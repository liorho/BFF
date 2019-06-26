
// const a = $(`<span><i class="fas fa-hamburger"></i></span>`);
// a.css({
//     'height' : '300px',
//     'width' : '300px',
//     'background-color': 'blue',
//         'fone-size': '4vw',
//         'color' : 'black'
// })
// $("#timer").append(a);


const randomColor = function () {
    let colorRGB = [];
    for (let i = 0; i < 3; i++) {
        const a = Math.floor(Math.random() * 255);
        colorRGB.push(a);
    }
    srtingColorRGB = `rgb(${colorRGB[0]},${colorRGB[1]},${colorRGB[2]})`
    return srtingColorRGB;
}



$("#capsule").on("click", "img", function () { 
    $(this).remove();
    
});


