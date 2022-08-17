const forms = () => {
    const forms = document.querySelectorAll('form'),
        inputs = document.querySelectorAll('input');
    
    const message = {
        loading: 'Загрузка',
        success: 'Спасибо за вашу заявку!',
        successText: 'Наш менеджер свяжется с вами в ближайшее время!',
        failure: 'Что-то пошло не так...'
    };

    function postData (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const statusMessage = document.createElement('div');
            statusMessage.classList.add('modal_mini');
            statusMessage.textContent = message.loading;
            form.append(statusMessage);

            const request = new XMLHttpRequest();
            request.open('POST', '../../server.php');

            request.setRequestHeader('Content-type', 'multipat/form-data')

            const formData = new FormData(form);

            request.send(formData);

            request.addEventListener('load', () => {
                if (request.status === 200) {
                    console.log(request.response);
                    statusMessage.textContent = message.success;
                } else {
                    statusMessage.textContent = message.failure;
                }
            })
        })
    }

    // forms.forEach(item => {
    //     bindPostData(item);
    // });

    // const postData = async(url, data) => {
    //     const res  = await fetch(url, {
    //         method: 'POST',
    //         body: data
    //     });
    //     return await res.json();
    // };

    // function bindPostData(form) {
    //     form.addEventListener('submit', (e) => {
    //         e.preventDefault();

    //         let statusMessage = document.createElement('img');
    //         statusMessage.src = message.loading;
    //         statusMessage.style.cssText = `
    //         display: block;
    //         margin: 0 auto;
    //         `;
    //         form.insertAdjacentElement('afterend', statusMessage);

    //         const formData = new FormData(form);

    //         const json = JSON.stringify(Object.fromEntries(formData.entries()));

    //         postData('http://localhost:3000', json)
    //         .then(data => {
    //             console.log(data);
    //             showThanksModal(message.success);
    //             statusMessage.remove();
    //         }).catch(() => {
    //             showThanksModal(message.failure);
    //         }).finally(() => {
    //             form.reset();
    //         });
    //     });
    // }

    // function showThanksModal(message) {
    //     const thanksModal = document.createElement('div');
    //     thanksModal.classList.add('modal_mini');
    //     thanksModal.innerHTML = `
    //     <div class="modal__content">
    //         <div class="modal__close" data-close>×</div>
    //         <div class="modal__title">${message}</div>
    //     </div>
    //     `;
    //     document.querySelector('.overlay').append(thanksModal);

    // }


};

export default forms;