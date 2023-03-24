let reviews = [
    {
        id: 0,
        name: 'Sara Jonson',
        job: 'lawyer',
        img: 'https://demotivation.ru/wp-content/uploads/2021/03/552181.jpg',
        text: 'Jennifer Herrity is a seasoned career services professional with 12+ years of experience in career coaching, recruiting and leadership roles with the purpose of helping others to find their best-fit jobs. She helps people navigate the job search process through one-on-one career coaching, webinars, workshops, articles and career advice videos on Indee'
    },
    {
        id: 1,
        name: 'July Moll',
        job: 'volunteer',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-8wa9ynRBpmM4YpwMcrmLsI8aycqDq9jpDAT5nAZSinZBDPK4LjkofMaxkbXXXs6_QVI&usqp=CAU',
        text: 'Professional skills are abilities that can help you succeed in your job. A professional skill describes a habit, personality trait or ability that positively affects your performance in the workplace. Having such skills can benefit people in nearly all job positions, industries and work environments.'
    },
    {
        id: 2,
        name: 'Robert Back',
        job: 'developer',
        img: 'https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector.png',
        text: 'Professional skills are also called soft skills, meaning skills easily transferred from one job to another. Soft skills describe how we relate to our environment and the people around us. By contrast, hard skills refer to more technical or specialized knowledge related to a specific job or industry.'
    },
    {
        id: 3,
        name: 'Michael Konrak',
        job: 'backer',
        img: 'https://img.freepik.com/premium-vector/portrait-young-man-with-beard-hair-style-male-avatar-vector-illustration_266660-423.jpg?w=2000',
        text: 'Jennifer Herrity is a seasoned career services professional with 12+ years of experience in career coaching, recruiting and leadership roles with the purpose of helping others to find their best-fit jobs. She helps people navigate the job search process through one-on-one career coaching, webinars, workshops, articles and career advice videos on Indee'
    }
]



const img = document.getElementById('avatar');
if(img && img.style) {
    img.style.width='200px'
}
const author = document.getElementById('name');
const job = document.getElementById('job');
const information = document.getElementById('information');


let prevBtn = document.querySelector('.prev-btn')
let prev2Btn = document.querySelector('.prev2-btn')
let randomBtn = document.querySelector('.random-btn')


let currentvalue = 0
window.addEventListener('DOMContentLoaded', function () {
    showPerson(currentvalue)

})
function showPerson() {
    const item = reviews[currentvalue]
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job
    information.textContent = item.text
}
prev2Btn.addEventListener('click', function () {
    currentvalue++
    if (currentvalue > reviews.length - 1) {
        currentvalue = 0
    }

    showPerson()
})
prevBtn.addEventListener('click', function () {
    currentvalue--
    if (currentvalue < 0) {
        currentvalue = reviews.length - 1
    }
    showPerson()
})
randomBtn.addEventListener('click', function () {
    currentvalue=Math.floor(Math.random() * reviews.length);
    showPerson()
})