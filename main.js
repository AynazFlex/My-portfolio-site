"use strict";

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

    swiper.addEventListener('touchmove', move);

    swiper.ontouchend = () => {
        list.style.transition = '';
        if(x > 50) list.style.left = w + shiftX + 'px';
        if(x <= 50 && x >= -50) list.style.left = shiftX + 'px';
        if(x < -50) list.style.left = -w + shiftX + 'px';
        if(parseInt(list.style.left) > 0) list.style.left = w-W + 'px';
        if(parseInt(list.style.left) < w-W) list.style.left = '0px';
        swiper.removeEventListener('touchmove', move);
        swiper.ontouchend = null;
    }
})