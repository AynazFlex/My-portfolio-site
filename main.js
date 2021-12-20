"use strict";

let k = 0;
let carts = -document.body.querySelectorAll('.cart').length + 1;
const w = swiper.querySelector('.cart').offsetWidth;

window.addEventListener('resize', function(){
    list.style.left = w*k + 'px';
});


window.onload = () => {
    let move;
    window.onscroll = () => {
        list.style.left = w*k + 'px';
        document.removeEventListener('touchmove', move);
        swiper.ontouchend = null;
    }
swiper.addEventListener('touchstart', (event) => {
    const w = swiper.querySelector('.cart').offsetWidth;
    const W = list.offsetWidth;
    list.style.transition = '0ms';
    let start = event.changedTouches[0].clientX;
    let x;
    let shiftX = list.style.left ? parseInt(list.style.left) : 0;
    
    move = function(event) {
        x = event.changedTouches[0].clientX - start;
        list.style.left = shiftX + x + 'px';
    }

    document.addEventListener('touchmove', move);

    swiper.ontouchend = () => {
        list.style.transition = '';
        if(x > 50) list.style.left = w + shiftX + 'px';
        if(x <= 50 && x >= -50) list.style.left = shiftX + 'px';
        if(x < -50) list.style.left = -w + shiftX + 'px';
        if(parseInt(list.style.left) > 0) list.style.left = w-W + 'px';
        if(parseInt(list.style.left) < w-W) list.style.left = '0px';
        k = parseInt(list.style.left)/w;
        if(k == carts) {
            toRight.style.display = 'none';
        } else toRight.style.display = '';
        if(k == 0) {
            toLeft.style.display = 'none';
        } else toLeft.style.display = '';
        document.removeEventListener('touchmove', move);
        swiper.ontouchend = null;
    }
})

toLeft.onclick = () => {
    toRight.style.display = '';
    const w1 = swiper.querySelector('.cart').offsetWidth;
    let shiftX = list.style.left ? parseInt(list.style.left) : 0;
    if(shiftX < 0) {
        list.style.left = shiftX + w1 + 'px';
        k = parseInt(list.style.left)/w1;
    }
    if(k == 0) {
        toLeft.style.display = 'none';
    }
}

toRight.onclick = () => {
    toLeft.style.display = '';
    const W2 = list.offsetWidth;
    const w2 = swiper.querySelector('.cart').offsetWidth;
    let shiftX = list.style.left ? parseInt(list.style.left) : 0;
    if(shiftX > -(W2-w2)) {
        list.style.left = shiftX - w2 + 'px';
        k = parseInt(list.style.left)/w2;
    }
    if(k == carts) {
        toRight.style.display = 'none';
    }
}

swiper.addEventListener('mousedown', (event) => {
    const w3 = swiper.querySelector('.cart').offsetWidth;
    const W3 = list.offsetWidth;
    list.style.transition = '0ms';
    let start = event.clientX;
    let x;
    let shiftX = list.style.left ? parseInt(list.style.left) : 0;
    
    function mouseMove(event) {
        x = event.clientX - start;
        list.style.left = shiftX + x + 'px';
    }

    document.addEventListener('mousemove', mouseMove);

    swiper.onmouseup = () => {
        list.style.transition = '';
        if(x > 50) list.style.left = w3 + shiftX + 'px';
        if(x <= 50 && x >= -50) list.style.left = shiftX + 'px';
        if(x < -50) list.style.left = -w3 + shiftX + 'px';
        if(parseInt(list.style.left) > 0) list.style.left = w3-W3 + 'px';
        if(parseInt(list.style.left) < w3-W3) list.style.left = '0px';
        k = parseInt(list.style.left)/w3;
        if(k == carts) {
            toRight.style.display = 'none';
        } else toRight.style.display = '';
        if(k == 0) {
            toLeft.style.display = 'none';
        } else toLeft.style.display = '';
        document.removeEventListener('mousemove', mouseMove);
        swiper.onmouseups = null;
    }
    swiper.ondragstart = function() {
        return false;
    };
})
}