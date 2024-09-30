//  Loading animation 
window.addEventListener('load', function() {
    setTimeout(function() {
        document.querySelector('.loader-container').style.display = 'none';
    }, 1200);
});


// carousel slide animation

var myCarousel = document.querySelector('#carouselExample');
  var carousel = new bootstrap.Carousel(myCarousel, {
    interval:3000,
    pause: 'hover'
  });

