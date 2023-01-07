import Swiper from 'swiper/swiper-bundle';

console.log('carousel')
alert()

const noveltiesSwiper = new Swiper('.swiper-container', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 2,
    spaceBetween: 60,
})