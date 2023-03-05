import Swiper from 'swiper/swiper-bundle';
import 'swiper/swiper-bundle.min.css';

console.log('carousel')


const noveltiesSwiper = new Swiper('.publications__slider-wrapper', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 4,
    spaceBetween: 7,
    navigation: {
        prevEl: '.publications__slider-left-arrow',
        nextEl: '.publications__slider-right-arrow'
    },
    scrollbar: {
        el: '.swiper-scrollbar',
      },
      breakpoints:{
        320:{
            slidesPerView:1,
        },
        769:{
            slidesPerView:2,
            centeredSlides:false
        },
        1024:{
            slidesPerView:3,
            centeredSlides:true
        }

    }
})