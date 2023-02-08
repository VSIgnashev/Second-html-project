import Swiper from 'swiper/swiper-bundle';
import 'swiper/swiper-bundle.min.css';

console.log('carousel')
alert('test')

const noveltiesSwiper = new Swiper('.publications__slider-wrapper', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 4,
    spaceBetween: 7,
    navigation: {
        prevEl: '.publications__slider-left-arrow',
        nextEl: '.publications__slider-right-arrow'
    },
})