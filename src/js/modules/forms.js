import { openModal, closeModal } from "../modules/modals";

const forms = () => {
    const forms = document.querySelectorAll('form'),
        inputs = document.querySelectorAll('input');
    
    const message = {
        loading: '../src/img/spinner.svg',
        success: 'Спасибо за вашу заявку!',
        successText: 'Наш менеджер свяжется с вами в ближайшее время!',
        failure: 'Что-то пошло не так...'
    };

    forms.forEach(item => {
        postData(item);
    });

    function postData (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const statusMessage = document.createElement('img');
            statusMessage.src = message.loading;
            statusMessage.style.cssText = `
            display: block;
            margin: 0 auto;
            `;
            form.insertAdjacentElement('afterend', statusMessage);

            const formData = new FormData(form);

            const object = {};
            formData.forEach(function(value, key) {
                object[key] = value;
             });

            fetch('../src/server.php', {
                method: 'POST',
                headers: {
                  'Content-type': 'application/json'
                 },
                body: JSON.stringify(object),
            })
            .then(data => data.text())
            .then(data => {
                console.log(data);
                showThanksModal(message.success);
                form.reset();
                statusMessage.remove();
            })
            .catch(() => {
                showThanksModal(message.failure);
            })
            .finally(() => {
                form.reset();
            });
        });
    }

    function showThanksModal(message) {
        const prevModal = document.getElementById('consultation');

        prevModal.style.display = 'none';
        
        openModal('#thanks');

        const thanksModal = document.createElement('div');
        thanksModal.classList.add('modal_mini');
        thanksModal.innerHTML = `
        <div class="modal_mini">
           <div class="modal__close" data-close>×</div>
           <div class="modal__subtitle">${message}</div>
       </div>
        `;
        document.querySelector('#thanks').append(thanksModal);

        
        setTimeout(() => {
            thanksModal.remove();
            prevModal.style.display = 'block';
            closeModal('#thanks');
        }, 4000);
    }
};

export default forms;