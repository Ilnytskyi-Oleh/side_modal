import './style.scss'

const  modalMenu = document.querySelector('.modal-menu');
const burgerButton = document.querySelector('.modal-menu__burger');
const modals = document.querySelector('.modals')
const scrollButton = document.getElementById('scroll-to-top');

modalMenu.addEventListener('click', (e) => {
    const menuItem = e.target.closest('.modal-menu__item');
    
    if (!menuItem) {
        return;
    }
    
    const modalId = menuItem.dataset.modalId;
    const modalItem = document.getElementById(modalId);

    if (!modalItem) {
        console.log('Немає такого модального вікна!');
        return;
    }

    const getActiveModalItem = document.querySelector('.modals__item.modals__item--active');
    
    if (getActiveModalItem) {
        getActiveModalItem.classList.remove('modals__item--active');
        
        if (getActiveModalItem.id === modalId) {
            return;
        }
    }

    modalItem.classList.add('modals__item--active');
})

burgerButton.addEventListener('click', () => {
    burgerButton.classList.toggle('modal-menu__burger--active')
    
    const menuWrapper = document.querySelector('.modal-menu-wrapper');
    const modals = document.querySelector('.modals');

    menuWrapper.classList.toggle('modal-menu-wrapper--active');

    if (!burgerButton.classList.contains('modal-menu__burger--active')) {
        const getActiveModalItem = document.querySelector('.modals__item.active');
        
        if (getActiveModalItem) {
            getActiveModalItem.classList.remove('modals__item--active');
        }
    } 
})

modals.addEventListener('click', (e) => {

    if (e.target.classList.contains('modals__item--active')
        || e.target.dataset?.close
    ) {
        document.querySelector('.modals__item--active')
        .classList.remove('modals__item--active');
    }
})

scrollButton.addEventListener('click', () => {
    window.scrollTo({top: 0, behavior: "smooth"});
})




