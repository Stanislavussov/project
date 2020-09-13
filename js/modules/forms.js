import {closeModal, openModal} from './modal'; 
import {postData} from '../services/services';

function forms(formSelector, modalTimerId) {

    const forms = document.querySelectorAll(formSelector);

    const message = {
        loading: 'img/form/spinner.svg',
        success: 'Успех',
        failure: 'Не прошло!'
    };

    forms.forEach(item => {
        postBindData(item);
    });

    


    async function getResource(url) {
        let res = await fetch(url);
    
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }
    
        return await res.json();
    }

    function postBindData(form) {
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

            // 1) entries() - превращает в массив массивов
            // 2) fromEntries() - превращает в объект JS
            // 3) JSON.stringify - переводит в строку JSON { "uno": 1, "dos": "dos"}
            const json = JSON.stringify(Object.fromEntries(formData.entries()));

            // const object = {};         
            // formData.forEach(function (key, value){
            //     object[key] = value;
            // }); 

            postData('http://localhost:3000/requests', json)
            .then(data => {
                console.log(data);
                showThanksModal(message.success);
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

    function showThanksModal(message){
        const prevModalDialog = document.querySelector('.modal__dialog');

        prevModalDialog.classList.add('hide');
        
        openModal('.modal', modalTimerId);

        const thanksModal = document.createElement('div');
        thanksModal.classList.add('modal__dialog');
        thanksModal.innerHTML = `
        <div class="modal__content">
            <div class="modal__close" data-close>×</div>
            <div class="modal__title">${message}</div>
        </div>
        `;
        
        document.querySelector('.modal').append(thanksModal);
        setTimeout(() => {
            thanksModal.remove();
            prevModalDialog.classList.add('show');
            prevModalDialog.classList.remove('hide');
            closeModal('.modal');
            
        }, 3000);
    }

    fetch('db.json')
        .then(data => data.json())
        .then(res => console.log(res));

}

export default forms;