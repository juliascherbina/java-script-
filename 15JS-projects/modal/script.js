const modalBtn = document.querySelector('.btn')
const modalOverlay = document.querySelector('.modal-overlay')
const closeBtn = document.querySelector('.close-btn')
modalBtn.addEventListener('click', function () {
    
modalOverlay.classList.add('modal-open');

})
closeBtn.addEventListener('click', function(){
    modalOverlay.classList.remove('modal-open')
})



modalBtn.addEventListener('click', function(){
    
})