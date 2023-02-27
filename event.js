
let English = document.getElementById('learnEnglish')
let notEnglish = document.getElementById('DontlearnEnglish')
let image = document.querySelector('.img')


English.addEventListener('click', function () {
    image.style.display = 'block';
    English.disabled = true;
    notEnglish.disabled = false;
});


notEnglish.addEventListener('click', function () {
    image.style.display = 'none';
    English.disabled = false;
    notEnglish.disabled = true;
});

function EventWithButton(selector) {
    
}