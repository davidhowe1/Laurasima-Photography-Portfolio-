const portfolioArray = [

    {
        id: 1,
        imgUrl: "photos/8.jpeg",
        title: "Renshaw Street",
        description: "A man cleans posters from a grafiti plastered wall.",
        secondDescription: "This was taken on an Olympus OM analogue camera"
    },

    {
        id: 2,
        imgUrl: "photos/2.jpeg",
        title: "Arts Club, Seel Street",
        description: "The Arts Club at night. Monocrhome and plenty of moody shadows thrown by the neon light.",
        secondDescription: "This was taken on an Olympus OM analogue camera"
    },

    {
        id: 3,
        imgUrl: "photos/11.jpeg",
        title: "Formby Beach",
        description: "A house sits in the middle of the Formby Beach Red Squirrel Reserve.",
        secondDescription: "This was taken on an Olympus OM analogue camera"
    },

    {
        id: 4,
        imgUrl: "photos/7.jpeg",
        title: "Lark Lane",
        description: "A coffee shop on Lark lane, Liverpool. The reflections superimposed on the cafe interior.",
        secondDescription: "This was taken on an Olympus OM analogue camera"
    },

    {
        id: 5,
        imgUrl: "photos/10.jpeg",
        title: "Porto Portugal",
        description: "Porto is a beautiful city full of lots of curiousities.",
        secondDescription:  "This was taken on an Olympus OM analogue camera"
    },

    {
        id: 6,
        imgUrl: "photos/1.jpeg",
        title: "Smithdown Road",
        description: "Laundrettes offer lots of wonderful photo opportunities. At night, they are some of the only units open and act as a beacon.",
        secondDescription: "This was taken on an Olympus OM analogue camera"
    },

    {
        id: 7,
        imgUrl: "photos/9.jpeg",
        title: "Berry Street",
        description: "A corner shot near China Town in Liverpool, containing lots of graphics elements to this image.",
        secondDescription: "This was taken on an Olympus OM analogue camera"
    },

    {
        id: 8,
        imgUrl: "photos/6.jpeg",
        title: "K-Centre, Hanover Street",
        description: "A night time shot of a barber shop in Liverpool city centre. Film was pushed that night.",
        secondDescription: "Aperture 1.8 and shutter speed of 1/60.",
    },

    {
        id: 9,
        imgUrl: "photos/17.jpeg",
        title: "Liverpool Town Centre",
        description: "Apartment block, almost a brutalist vibe to the building. Shot on a clear day with minimal cloud.",
        secondDescription: "This was taken on an Olympus OM analogue camera",
    },

    {
        id: 10,
        imgUrl: "photos/14.jpeg",
        title: "Telegraph Pole",
        description:  "Very minimalist graphic shot of a telegraph pole with cables eminating from the top of the pole.",
        secondDescription: "This was taken on an Olympus OM analogue camera"
    },

    {
        id: 11,
        imgUrl: "photos/15.jpeg",
        title: "Baltic Triangle",
        description: "Scooters line up at a charging station near The Baltic Triangle.",
        secondDescription: "This was taken on an Olympus OM analogue camera",
    },

    {
        id: 12,
        imgUrl: "photos/16.jpeg",
        title: "Formby Beach",
        description: "Shot on the dunes at formby beach on a slightly overcast day.",
        secondDescription: "This was taken on an Olympus OM analogue camera",
    }

]

htmlCode = ``;

portfolioArray.forEach(function(portfolioItems) {

    htmlCode = 
    htmlCode +=
    `
    <div id="overlay">

        <div id="close-button-container">

            <div class="overlay-bar" onclick="closeLightBox()">
                <span class="overlay-bar1"></span>
                <span class="overlay-bar2"></span>
                <span class="overlay-bar3"></span>
            </div>

        </div>

        <div id="content-container" id="${portfolioItems.id}">

            <div class="profile-image-wrapper">
                <img src="${portfolioItems.imgUrl}" alt="">
            </div>

            <div id="text-container">
                <h1>${portfolioItems.title}</h1>
                <p>${portfolioItems.description}</p>
                <p>${portfolioItems.secondDescription}</p>
            </div>
        </div>

    </div>

    `
});

const portfolio = document.querySelector('#overlay-container')
// portfolio.insertAdjacentHTML('beforeend', htmlCode)