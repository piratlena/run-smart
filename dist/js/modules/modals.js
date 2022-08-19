function openModal(modalSelector) {
    const windows = document.querySelectorAll('[data-modal]'),
          modal = document.querySelector(modalSelector),
          overlay = document.querySelector('.overlay');
    windows.forEach(item => {
        item.style.display = 'none';
        });
        modal.style.display = 'block';
        overlay.style.display = 'block';
        document.body.style.overflow = 'hidden';
            }
        
function closeModal(modalSelector) {
    const windows = document.querySelectorAll('[data-modal]'),
          modal = document.querySelector(modalSelector),
          overlay = document.querySelector('.overlay');
    windows.forEach(item => {
        item.style.display = 'none';
    });
        modal.style.display = "none";
        overlay.style.display = 'none';
        document.body.style.overflow = "";
}

const modals = (triggerSelector, modalSelector, closeSelector) => {

const trigger = document.querySelectorAll(triggerSelector),
      modal = document.querySelector(modalSelector),
      close = document.querySelectorAll(closeSelector),
      overlay = document.querySelector('.overlay');


    

trigger.forEach(item => {
    item.addEventListener('click', (e) => {
        if (e.target) {
            e.preventDefault();
        }
       openModal(modalSelector);
      });
    });

close.forEach(item => {
    item.addEventListener('click', () => {
        closeModal(modalSelector);
    });
});

overlay.addEventListener('click', (e) => {
    if (e.target === overlay || e.target.matches('modal__close')) {
        closeModal(modalSelector);
    }
});

document.addEventListener('keydown', (e) => {
    if (e.code === "Escape" && modal.style.display=='block') { 
        closeModal(modalSelector);
    }
});

};

export default modals;
export {openModal};
export {closeModal};
