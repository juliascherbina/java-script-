// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();
// ********** close links ************
const linksContainer = document.querySelector('.links-container')
const navtoggle = document.querySelector('.nav-toggle')
const links = document.querySelector('.links')
navtoggle.addEventListener('click', function () {
    linksContainer.classList.toggle('show-links')
    // linksContainer.style.height='200px'
    // const heightOfContainer=linksContainer.getBoundingClientRect()


})
// ********** fixed navbar ************

const navbar = document.getElementById('nav')
const toplink = document.querySelector('.top-link')
toplink.addEventListener('click', function () {
    window.scrollTo({
        top: 0
    })
})
window.addEventListener('scroll', function () {
    const heightofscreen = window.pageYOffset;
    const navHeight = navbar.getBoundingClientRect().height
    if (heightofscreen > navHeight) {
        navbar.classList.add('fixed-nav')
    }
    else {
        navbar.classList.remove('fixed-nav')
    }
    if (heightofscreen > 500) {
        toplink.classList.add('show-link')
    }
    else {
        toplink.classList.remove('show-link')
    }
})




// select links
const scrolLinks = document.querySelectorAll('.scroll-link')
scrolLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
        e.preventDefault()
        //navigate to specific spot
        const id = e.currentTarget.getAttribute('href').slice(1)
        const element = document.getElementById(id);
        //calculate the heights
        const navHeight = navbar.getBoundingClientRect().height;
        const containerHeight = linksContainer.getBoundingClientRect().height;
        const fixednavs = navbar.classList.contains('fixed-nav');
        let position = element.offsetTop - navHeight;
        if (!fixednavs) {
            position = position - navHeight
        }
        // if (navHeight > 82) {
        //     position = position + containerHeight
        // }
        window.scrollTo({
            left: 0,
            top: position
        })
        linksContainer.classList.remove('show-links')

    })
})
// ********** smooth scroll ************
