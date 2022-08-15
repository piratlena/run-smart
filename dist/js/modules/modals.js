const modals = () => {
function bindModal(triggerSelector, modalSelector, closeSelector ) {
const trigger = document.querySelectorAll(triggerSelector),
      modal = document.getElementById(modalSelector),
      close = document.querySelector(closeSelector),
      windows = document.querySelectorAll('.modal');

trigger.forEach(item => {
    item.addEventListener('click', (e) => {
        if (e.target) {
            e.preventDefault();
            console.log(1);
        }
        windows.forEach(item => {
          item.style.display = 'none';
        });
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
      });
    });

}
bindModal('.button_main', 'consultation', '.modal__close');
bindModal('.button', 'order', '.modal__close');
          

};

export default modals;