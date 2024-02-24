// Custom Scripts
// Custom scripts
let btnNext = document.querySelector('.arrow-next');
let btnPrev = document.querySelector('.arrow-prev');

document.addEventListener( 'DOMContentLoaded', function() {
	var splide = new Splide( '.splide', {
		type: 'loop',
		perPage: 4,
		pagination: false,
		perMove: 1,
		arrows: false,
		autoWidth: false,
		breakpoints: {
			1080: {
				perPage: 3,
			},
			768: {
				perPage: 2,
			},
			480: {
				perPage: 1,
			},
		}
	} );
	splide.mount();
	btnNext.addEventListener('click', e => {
    splide.go('+1')
  })

  btnPrev.addEventListener('click', e => {
    splide.go('-1')
  })
} );
const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};
