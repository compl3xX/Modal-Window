'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModel = document.querySelectorAll('.show-modal');
const openModel = function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}
for (let i = 0; i < btnOpenModel.length; i++)
    btnOpenModel[i].addEventListener('click', openModel)

const closeModel = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}


btnCloseModal.addEventListener('click', closeModel);
overlay.addEventListener('click', closeModel);
document.addEventListener('keydown', function (e) {
    {
        if (e.key === 'Escape' && !modal.classList.contains('hidden')) {

            closeModel();

        }
    }
})