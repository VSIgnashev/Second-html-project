import Swiper from 'swiper/swiper-bundle';
import 'swiper/swiper.min.css'
import 'swiper/modules/pagination/pagination.min.css'
import './styles/slider-mixin.scss'

const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,

    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },

});