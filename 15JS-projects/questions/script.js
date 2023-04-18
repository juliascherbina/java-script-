// const btns = document.querySelectorAll('.btn-block')
// btns.forEach(function (btn) {
//     btn.addEventListener('click', function (e) {
//         const question= e.currentTarget.parentElement.parentElement
//         question.classList.toggle('show-text')
//     })
// })

const questions = document.querySelectorAll('.question')
questions.forEach(function (question) {
    const btn = question.querySelector('.plus-btn')
    console.log(btn)
    btn.addEventListener('click', function () {
        question.classList.toggle('show-text')
    })
    // const btnMinus = question.querySelector('.minus-btn')
    // btnMinus.addEventListener('click', function () {
    //     question.classList.toggle('show-text')
    // })
    btn.addEventListener('click', function () {
        questions.forEach(function (item) {
            if (item !== question) {
              item.classList.remove('show-text')
            }
        })
    })
})