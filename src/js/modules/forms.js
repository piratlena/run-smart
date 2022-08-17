import { openModal, closeModal } from "../modules/modals";

const forms = () => {
    const forms = document.querySelectorAll('form'),
        inputs = document.querySelectorAll('input');
    
    const message = {
        loading: 'Загрузка',
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

            const statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            statusMessage.textContent = message.loading;
            form.append(statusMessage);

            const request = new XMLHttpRequest();
            request.open('POST', '../src/server.php');

            request.setRequestHeader('Content-type', 'application/json')
            const formData = new FormData(form);

            const object = {};
            formData.forEach(function(value, key) {
                object[key] = value;
            });

            const json = JSON.stringify(object);

            request.send(json);

            request.addEventListener('load', () => {
                if (request.status === 200) {
                    console.log(request.response);
                    showThanksModal(message.success);
                    form.reset();
                    statusMessage.remove();
                } else {
                    showThanksModal(message.failure);
                }
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