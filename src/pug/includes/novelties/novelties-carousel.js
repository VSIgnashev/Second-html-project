import Swiper from 'swiper/swiper-bundle';
import 'swiper/swiper-bundle.min.css';

console.log('carousel')
alert('test')

const noveltiesSwiper = new Swiper('.novelties__slider-wrapper', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 3,
    centeredSlides: true,
    spaceBetween: 80,
    navigation: {
        nextEl: '.novelties-slider-next',
        prevEl: '.novelties-slider-prev',
    },
})