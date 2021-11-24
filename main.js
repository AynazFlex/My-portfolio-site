"use strict";

let k = 0;

window.addEventListener('resize', function(){
    const w = swiper.querySelector('.cart').offsetWidth;
    list.style.left = w*k + 'px';
});


window.onload = () => {
swiper.addEventListener('touchstart', (event) => {
    const w = swiper.querySelector('.cart').offsetWidth;
    const W = list.offsetWidth;
    list.style.transition = '0ms';
    let start = event.changedTouches[0].clientX;
    let x;
    let shiftX = list.style.left ? parseInt(list.style.left) : 0;
    
    function move(event) {
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
        document.removeEventListener('touchmove', move);
        swiper.ontouchend = null;
    }
})

toLeft.onclick = () => {
    const w1 = swiper.querySelector('.cart').offsetWidth;
    let shiftX = list.style.left ? parseInt(list.style.left) : 0;
    if(shiftX < 0) {
        list.style.left = shiftX + w1 + 'px';
        k = parseInt(list.style.left)/w1;
    } else {
        list.style.left = 0 + 'px';
        k = parseInt(list.style.left)/w1;
    }
}

toRight.onclick = () => {
    const W2 = list.offsetWidth;
    const w2 = swiper.querySelector('.cart').offsetWidth;
    let shiftX = list.style.left ? parseInt(list.style.left) : 0;
    if(shiftX > -(W2-w2)) {
        list.style.left = shiftX - w2 + 'px';
        k = parseInt(list.style.left)/w2;
    } else {
        list.style.left = -W2 + w2 + 'px';
        k = parseInt(list.style.left)/w2;
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
        document.removeEventListener('mousemove', mouseMove);
        swiper.onmouseups = null;
    }
    swiper.ondragstart = function() {
        return false;
    };
})
}