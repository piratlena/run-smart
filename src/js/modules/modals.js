const modals = () => {
function bindModal(triggerSelector, modalSelector, closeSelector ) {
const trigger = document.querySelectorAll(triggerSelector),
      modal = document.getElementById(modalSelector),
      close = document.querySelectorAll(closeSelector),
      overlay = document.querySelector('.overlay'),
      windows = document.querySelectorAll('[data-modal]');


function openModal() {
    windows.forEach(item => {
        item.style.display = 'none';
        });
        modal.style.display = 'block';
        overlay.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }

function closeModal() {
    windows.forEach(item => {
        item.style.display = 'none';
    });
    modal.style.display = "none";
    overlay.style.display = 'none';
    document.body.style.overflow = "";
}

trigger.forEach(item => {
    item.addEventListener('click', (e) => {
        if (e.target) {
            e.preventDefault();
        }
       openModal();
      });
    });

close.forEach(item => {
    item.addEventListener('click', closeModal);
});

overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
        closeModal();
    }
});

document.addEventListener('keydown', (e) => {
    if (e.code === "Escape" && modal.style.display=='block') { 
        closeModal();
    }
});

}
bindModal('[data-open="consultation"]', 'consultation', '.modal__close');
bindModal('[data-open="order"]', 'order', '.modal__close');

};

export default modals;