$('.content-wrapper-home').hide().fadeIn('slow');
$('.about-page-content-wrapper').hide().fadeIn('slow');
$('.hero-slideshow').hide().fadeIn('slow');
const portfolioItems = document.querySelectorAll('.portfolio-item-wrapper')

portfolioItems.forEach(portfolioItem => {
    portfolioItem.addEventListener('mouseover', () => {
        portfolioItem.childNodes[1].classList.add('img-darken');
  })

  portfolioItem.addEventListener('mouseout', () => {
        portfolioItem.childNodes[1].classList.remove('img-darken');
  })

})

const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.right-side');
    const navLinks = document.querySelectorAll('.right-side .nav-link-wrapper a');

    burger.addEventListener('click',() => {
        let background = document.querySelector('.dim-background')
        nav.classList.toggle('nav-active');
        background.classList.toggle('active')

        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = 'navLinkFade 0.5s ease forwards $(index / 7 + 1.5)s';
            }
        });

        burger.classList.toggle('toggle');
    });
       
    };

navSlide();

// Lightbox opening and closing functions

const lightBox = document.getElementById("overlay-container")

function closeLightBox() {
    let lightBoxShown = document.getElementById("overlay")
    lightBoxShown.style.animation = 'overlayFade 0.5s ease'
    setTimeout(removeLightBox, 450)
}

function removeLightBox() {
    let lightBoxShown = document.getElementById("overlay")
    lightBoxShown.remove()
}

document.addEventListener('keydown', function(event) {
    if(event.key === "Escape") {
        let lightBoxShown = document.getElementById("overlay")
        lightBoxShown.style.animation = 'overlayFade 1s ease'
        setTimeout(removeLightBox, 450)
    }
})

// Show lightbox function

function showLightBox([image,title,description,description2]) {

    let code = `
        <div id="overlay">

            <div id="close-button-container">

                <div class="overlay-bar" onclick="closeLightBox()">
                    <span class="overlay-bar1"></span>
                    <span class="overlay-bar2"></span>
                    <span class="overlay-bar3"></span>
                </div>

            </div>

            <div id="content-container">

                <div class="profile-image-wrapper">
                    <img src="${image}" alt="">
                </div>

                <div id="text-container">
                    <h1>${title}</h1>
                    <p>${description}</p>
                    <p>${description2}</p>
                </div>
            </div>

        </div>
        `

        lightBox.innerHTML = code

        const topBar = document.getElementById("close-button-container")
        topBar.scrollIntoView();
        
    }

function fadeInOverlay() {
    let overlay = document.getElementById('overlay')
    overlay.style.animation = 'overlayShow 2s ease'
}

// Project Objects

let project1 = [
    "photos/8.jpeg",
    "Renshaw Street",
    "A man cleans posters from a grafiti plastered wall.",
    "- This was taken on an Olympus OM analogue camera"
]

let project2 = [
    "photos/2.jpeg",
    "Arts Club, Seel Street",
    "The Arts Club at night. Monocrhome and plenty of moody shadows thrown by the neon light.",
    "- This was taken on an Olympus OM analogue camera"
]

let project3 = [
    "photos/11.jpeg",
    "Formby Beach",
    "A house sits in the middle of the Formby Beach Red Squirrel Reserve.",
    "- This was taken on an Olympus OM analogue camera"
]

let project4 = [
    "photos/7.jpeg",
    "Lark Lane",
    "A coffee shop on Lark lane, Liverpool. The reflections superimposed on the cafe interior.",
    "- This was taken on an Olympus OM analogue camera"
]

let project5 = [
    "photos/10.jpeg",
    "Porto Portugal",
    "Porto is a beautiful city full of lots of curiousities.",
    "- This was taken on an Olympus OM analogue camera"
]

let project6 = [
    "photos/1.jpeg",
    "Smithdown Road",
    "Laundrettes offer lots of wonderful photo opportunities. At night, they are some of the only units open and act as a beacon.",
    "- This was taken on an Olympus OM analogue camera"
]

let project7 = [
    "photos/9.jpeg",
    "Berry Street",
    "A corner shot near China Town in Liverpool, containing lots of graphics elements to this image.",
    "- This was taken on an Olympus OM analogue camera"
]

let project8 = [
    "photos/6.jpeg",
    "K-Centre, Hanover Street",
    "A night time shot of a barber shop in Liverpool city centre. Film was pushed that night.",
    "- Aperture 1.8 and shutter speed of 1/60.",
]

let project9 = [
    "photos/17.jpeg",
    "Liverpool Town Centre",
    "Apartment block, almost a brutalist vibe to the building. Shot on a clear day with minimal cloud.",
    "- This was taken on an Olympus OM analogue camera",
]

let project10 = [
    "photos/14.jpeg",
    "Telegraph Pole",
    "Very minimalist graphic shot of a telegraph pole with cables eminating from the top of the pole.",
    "- This was taken on an Olympus OM analogue camera"
]

let project11 = [
    "photos/15.jpeg",
    "Baltic Triangle",
    "Scooters line up at a charging station near The Baltic Triangle.",
    "- This was taken on an Olympus OM analogue camera",
]

let project12 = [
    "photos/16.jpeg",
    "Formby Beach",
    "Shot on the dunes at formby beach on a slightly overcast day.",
    "- This was taken on an Olympus OM analogue camera",
]

// Call overlay functions on project clicked

let projectButton1 = document.getElementById("1")
let projectButton2 = document.getElementById("2")
let projectButton3 = document.getElementById("3")
let projectButton4 = document.getElementById("4")
let projectButton5 = document.getElementById("5")
let projectButton6 = document.getElementById("6")
let projectButton7 = document.getElementById("7")
let projectButton8 = document.getElementById("8")
let projectButton9 = document.getElementById("9")
let projectButton10 = document.getElementById("10")
let projectButton11 = document.getElementById("11")
let projectButton12 = document.getElementById("12")


projectButton1.addEventListener("click", function() {
    showLightBox(project1)
    fadeInOverlay()
})

projectButton2.addEventListener("click", function() {
    showLightBox(project2)
    fadeInOverlay()
})

projectButton3.addEventListener("click", function() {
    showLightBox(project3)
    fadeInOverlay()
})

projectButton4.addEventListener("click", function() {
    showLightBox(project4)
    fadeInOverlay()
})

projectButton5.addEventListener("click", function() {
    showLightBox(project5)
    fadeInOverlay()
})

projectButton6.addEventListener("click", function() {
    showLightBox(project6)
    fadeInOverlay()
})

projectButton7.addEventListener("click", function() {
    showLightBox(project7)
    fadeInOverlay()
})

projectButton8.addEventListener("click", function() {
    showLightBox(project8)
    fadeInOverlay()
})

projectButton9.addEventListener("click", function() {
    showLightBox(project9)
    fadeInOverlay()
})

projectButton10.addEventListener("click", function() {
    showLightBox(project10)
    fadeInOverlay()
})

projectButton11.addEventListener("click", function() {
    showLightBox(project11)
    fadeInOverlay()
})

projectButton12.addEventListener("click", function() {
    showLightBox(project12)
    fadeInOverlay()
})