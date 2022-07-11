
const spanTop = document.getElementById('spanTop');
let a = ['art', 'photo', 'reels', 'sound', 'pet'];

let counter = 0;
const timer = setInterval(() => {
    if (counter == a.length) counter = 0;
    spanTop.classList.toggle('span_Top');
    setTimeout(() => {
        spanTop.textContent = a[counter];
        spanTop.classList.toggle('span_Top');
        counter++;
    }, 400)
}, 3000)

// 'art', 'photo', 'reels', 'sound', 'pet'


const spanBtm = document.getElementById('spanBtm');
let b = ['metaverse', 'web', '3.0', 'crypto'];

let counter1 = 0;
const timer1 = setInterval(() => {
    if (counter1 == b.length) counter1 = 0;
    spanBtm.classList.toggle('span_btm');
    setTimeout(() => {
        spanBtm.textContent = b[counter1];
        spanBtm.classList.toggle('span_btm');
        counter1++;
    }, 400)
}, 3000)

// 'metaverse', 'web', '3.0', 'crypto'