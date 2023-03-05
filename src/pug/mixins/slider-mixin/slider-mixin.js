import Swiper from 'swiper/swiper-bundle';
import 'swiper/swiper.min.css'
import 'swiper/modules/pagination/pagination.min.css'
import './styles/slider-mixin.scss'

const swiper = new Swiper('.topper-slider', {
    direction: 'horizontal',
    loop: true,
    spaceBetween: 0,

    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },
});