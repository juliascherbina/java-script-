let colo = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'B', 'C', 'D', 'E', 'F'];
let color = document.querySelector('.color');
let btn = document.getElementById('btn');
btn.addEventListener('click', function () {
    let hexcolor = '#'
    for (let i = 0; i < 6; i++) {
        // hexcolor += colo[getRandomNumber()]
        console.log(hexcolor)
        hexcolor+=colo[getRandomNumber()]
    }
    color.textContent=hexcolor
    document.body.style.backgroundColor = hexcolor
});
function getRandomNumber() {
   return  Math.floor(Math.random() * colo.length)
};