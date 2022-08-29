const slider = () => {
    const slides = document.querySelectorAll('.carousel__slide'),
        slidesField = document.querySelector('.carousel__field'),
        slidesWrapper = document.querySelector('.carousel__sliders'),
        prev = document.querySelector('.carousel__slider-prev'),
        next = document.querySelector('.carousel__slider-next'),
        width = window.getComputedStyle(slidesWrapper).width;
    let slideIndex = 1;
    let offset = 0;

    slidesField.style.width = 100 * slides.length + '%';
    slidesField.style.display = 'flex';
    slidesField.style.transition = '0.5s all';

    slidesWrapper.style.overflow = 'hidden';

    slides.forEach(slide => {
        slide.style.width = width;
    });

    next.addEventListener('click', () => {
        if (offset == +width.replace(/p|x/g, '') * (slides.length - 1)) {
            offset = 0;
        } else {
            offset += +width.replace(/p|x/g, '');
        }
        slidesField.style.transform = `translate(-${offset}px)`;
    });

    prev.addEventListener('click', () => {
        if (offset == 0) {
            offset = +width.replace(/p|x/g, '') * (slides.length - 1)
        } else {
            offset -= +width.replace(/p|x/g, '');
        }
        slidesField.style.transform = `translate(-${offset}px)`;
    });
//     showSlides(slideIndex)

//     function showSlides(n) {
//         if (n > slides.length) {
//             slideIndex = 1;
//         }
//         if (n < 1) {
//             slideIndex = slides.length;
//         }
//         slides.forEach(item => item.style.display = 'none');
//         slides[slideIndex - 1].style.display = 'block';
       
        
        
// }
// function plusSlides(n) {
//     showSlides(slideIndex += n)
//     }
// prev.addEventListener('click', () => {
//     plusSlides(-1);
// });
// next.addEventListener('click', () => {
//     plusSlides(1);
// })
// }
}
export default slider;