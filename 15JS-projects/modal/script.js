const modalBtn = document.querySelector('.btn')
const modalOverlay = document.querySelector('.modal-content')
const closeBtn = document.querySelector('.close-btn')

modalBtn.addEventListener('click', function () {
    
modalOverlay.classList.add('modal-open')
})
closeBtn.addEventListener('click', function(){
    modalOverlay.classList.remove('modal-open')
})