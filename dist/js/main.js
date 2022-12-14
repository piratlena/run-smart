import modals from './modules/modals';
import forms from './modules/forms';
import slider from './modules/slider'



window.addEventListener('DOMContentLoaded', () => {
    modals('[data-open="consultation"]', '#consultation', '.modal__close');
    modals('[data-open="order"]', '#order', '.modal__close');
    forms();
    slider();
    new WOW().init();
});