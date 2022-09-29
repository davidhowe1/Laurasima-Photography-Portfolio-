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

window.addEventListener('click', function() {
    
})