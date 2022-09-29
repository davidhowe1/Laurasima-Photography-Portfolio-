// Home page infinite scroll script

const scroll = document.querySelector('.hero-slideshow')
const galleryLandscape = scroll.querySelector('.landscape')
const galleryPortrait = scroll.querySelector('.portrait')
const galleryIpad = scroll.querySelector('.ipad')

const galleryClone = galleryLandscape.cloneNode(true)
scroll.appendChild(galleryClone)

const galleryClonePortrait = galleryPortrait.cloneNode(true)
scroll.appendChild(galleryClonePortrait)

const galleryCloneiPad = galleryIpad.cloneNode(true)
scroll.appendChild(galleryCloneiPad)

const options = {
    root: scroll,
    rootMargin: '0px',
    threshold: 0
}

const callback = (entries) => {
    if (!entries[0].isIntersecting) {
        scroll.scrollLeft = 0
    }
}

// Infinite scroll for desktop, ipad and mobile

const observer = new IntersectionObserver(callback, options)
observer.observe(galleryLandscape)
observer.observe(galleryPortrait)
observer.observe(galleryIpad)