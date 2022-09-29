let loadingScreen = document.querySelector('.loading-screen')

function removeLoadingScreen() {
    loadingScreen.remove()
}

window.addEventListener('load', function() {
    loadingScreen.classList.add('hidden')
    this.setTimeout(removeLoadingScreen, 1000)
})

// Show lightbox function

const portfolioArray = [

    {
        id: 1,
        orientation: "portrait",
        alt: "Large - Man cleans away grafiti from wall on Renshaw Street, Liverpool",
        imgUrl: "photos/8.jpeg",
        title: "Renshaw Street",
        description: "A man cleans posters from a grafiti plastered wall.",
        secondDescription: "This was taken on an Olympus OM analogue camera"
    },

    {
        id: 2,
        orientation: "portrait",
        alt: "Large - Club entrance with neon sign at night",
        imgUrl: "photos/2.jpeg",
        title: "Arts Club, Seel Street",
        description: "A man walks past the Arts Club at night. Monocrhome photograph with plenty of moody shadows thrown by the neon light.",
        secondDescription: "This was taken on an Olympus OM analogue camera"
    },

    {
        id: 3,
        orientation: "portrait",
        alt: "Large - Driveway and a detached house with trees",
        imgUrl: "photos/11.jpeg",
        title: "Formby Beach",
        description: "A house sits in the middle of the Formby Beach Red Squirrel Reserve, framed by naked trees.",
        secondDescription: "This was taken on an Olympus OM analogue camera"
    },

    {
        id: 4,
        orientation: "portrait",
        alt: "Large - Person standing in dimly lit cafe",
        imgUrl: "photos/7.jpeg",
        title: "Lark Lane",
        description: "An empty coffee shop on Lark lane, Liverpool. The reflections are superimposed on the cafe interior with a single person standing inside.",
        secondDescription: "This was taken on an Olympus OM analogue camera"
    },

    {
        id: 5,
        orientation: "landscape",
        alt: "Large - Junction under building in Porto",
        imgUrl: "photos/10.jpeg",
        title: "Porto Portugal",
        description: "Porto is a beautiful city full of lots of curiousities and interesting streets.",
        secondDescription:  "This was taken on an Olympus OM analogue camera"
    },

    {
        id: 6,
        orientation: "landscape",
        alt: "Large - Laundrette at night",
        imgUrl: "photos/1.jpeg",
        title: "Smithdown Road",
        description: "Laundrettes offer lots of wonderful photo opportunities, especially at night. This monochrome photograph was taken at night during closing hours.",
        secondDescription: "This was taken on an Olympus OM analogue camera"
    },

    {
        id: 7,
        orientation: "portrait",
        alt: "Large - Woman walking in front of colourful, stripey building",
        imgUrl: "photos/9.jpeg",
        title: "Berry Street",
        description: "A masked woman walks past a street corner near China Town in Liverpool.",
        secondDescription: "This was taken on an Olympus OM analogue camera"
    },

    {
        id: 8,
        orientation: "portrait",
        alt: "Large - Barber shop chairs at night",
        imgUrl: "photos/6.jpeg",
        title: "K-Centre, Hanover Street",
        description: "A night time shot of a barber shop in Liverpool city centre. The film was pushed that night.",
        secondDescription: "Aperture 1.8 and shutter speed of 1/60. This was taken on an Olympus OM analogue camera",
    },

    {
        id: 9,
        orientation: "landscape",
        alt: "Large - Liverpool building facade",
        imgUrl: "photos/17.jpeg",
        title: "Liverpool Town Centre",
        description: "An apartment block, with an almost brutalist look to the building. Shot on a clear day with minimal cloud.",
        secondDescription: "This was taken on an Olympus OM analogue camera",
    },

    {
        id: 10,
        orientation: "landscape",
        alt: "Large - Telegraph Pole",
        imgUrl: "photos/14.jpeg",
        title: "Telegraph Pole",
        description:  "A minimalist graphic shot of a telegraph pole with cables eminating from its top.",
        secondDescription: "This was taken on an Olympus OM analogue camera"
    },

    {
        id: 11,
        orientation: "landscape",
        alt: "Large - Electric scooters parked on pavement",
        imgUrl: "photos/15.jpeg",
        title: "Baltic Triangle",
        description: "Scooters line up at a charging station near The Baltic Triangle.",
        secondDescription: "This was taken on an Olympus OM analogue camera",
    },

    {
        id: 12,
        orientation: "landscape",
        alt: "Large - Sand dunes with foliage",
        imgUrl: "photos/16.jpeg",
        title: "Formby Beach",
        description: "Shot on the dunes at formby beach on a slightly overcast and windy day.",
        secondDescription: "This was taken on an Olympus OM analogue camera",
    }

]

// Lightbox/Overlay script

for (let i = 0; i < portfolioArray.length; i++) {
    portfolioItems[i].addEventListener('click', function() {
        renderOverlayItems(portfolioArray[i])
    })
}

function fadeInOverlay() {
    let overlay = document.getElementById('overlay')
    overlay.style.animation = 'overlayShow 0.75s ease-in-out'
}

function renderOverlayItems(item) {

    const lightBox = document.getElementById("overlay-container")

    let code = `
            <div id="overlay">

                <div id="close-button-container">

                    <div class="overlay-bar">
                        <span class="overlay-bar1"></span>
                        <span class="overlay-bar2"></span>
                        <span class="overlay-bar3"></span>
                    </div>

                </div>

                <div id="content-container">

                    <div class="profile-image-wrapper">
                        <img id="${item.orientation}" src="${item.imgUrl}" alt="${item.alt}">
                    </div>

                    <div id="text-container">
                        <h1>${item.title}</h1>
                        <p>${item.description}</p>
                        <p>${item.secondDescription}</p>
                    </div>
                </div>

            </div>
            `

    lightBox.innerHTML = code
    fadeInOverlay()
    const topBar = document.getElementById('close-button-container')
    topBar.scrollIntoView();
    ready()
}

function ready() {

    let overlayBar = document.querySelector('.overlay-bar')
    let lightBoxShown = document.getElementById("overlay")
    
    overlayBar.addEventListener('click', function() {
        closeLightBox()
    })
    
    function closeLightBox() {
        lightBoxShown.style.animation = 'overlayFade 0.5s ease-in-out'
        setTimeout(removeLightBox, 470)
    }
    
    function removeLightBox() {
        lightBoxShown.remove()
    }
    
    document.addEventListener('keydown', function(event) {
        if(event.key === "Escape") {
            lightBoxShown.style.animation = 'overlayFade 0.5s ease-in-out'
            setTimeout(removeLightBox, 470)
        }
    })
    
}
