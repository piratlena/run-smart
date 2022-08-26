const slider = () => {
    const slides = document.querySelectorAll('.carousel__slide'),
        prev = document.querySelector('.carousel__slider-prev'),
        next = document.querySelector('.carousel__slider-next');
    let slideIndex = 1;
    showSlides(slideIndex)

    function showSlides(n) {
        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }
        slides.forEach(item => item.style.display = 'none');
        slides[slideIndex - 1].style.display = 'block';
}
function plusSlides(n) {
    showSlides(slideIndex += n)
    }
prev.addEventListener('click', () => {
    plusSlides(-1);
});
next.addEventListener('click', () => {
    plusSlides(1);
})
}
export default slider;