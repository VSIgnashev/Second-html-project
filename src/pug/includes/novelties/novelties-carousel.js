import Swiper from 'swiper/swiper-bundle';

console.log('carousel')
alert('test')

const noveltiesSwiper = new Swiper('.novelties__slider-wrapper', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 2,
})