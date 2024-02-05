
function menuToggle() {
    let header = document.querySelector('header');
    header.classList.toggle('active');
    let body = document.querySelector('body');
    body.classList.toggle('lock');
}
$(document).ready(function () {
    $('.allSliders .slider').slick({
        easing: 'ease',
        // draggable: false,
        vertical: true,
        touchMove: false,
      verticalSwiping: true
    });
});

$(document).ready(function () {
   var t = $('.newsSliderBox .slider');
t.slick({
    arrows: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    infinite: true,
    responsive: [
        {
            breakpoint: 1023,
            settings: {
              arrows: true,
              slidesToShow: 1,
                  centerMode: true,
    centerPadding: '0',
            }
        }
    ]
});

    // t.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
    //     var s = t.find('[data-slick-index="'+nextSlide+'"]').attr('data');
    //     t.slick('setOption','autoplaySpeed',s);
    // });

});

document.addEventListener('DOMContentLoaded', function () {
    const petalsContainer = document.querySelector('.petals-container');
    let lastPetalTime = 0;

    function createPetal() {
        const currentTime = Date.now();
        if (currentTime - lastPetalTime > 6000) { // Інтервал у мілісекундах
            const petal = document.createElement('div');
            petal.classList.add('petal');
            petal.style.left = `${Math.random() * 100}vw`;
            petalsContainer.appendChild(petal);

            // Встановлення часу для останньої створеної пелюстки
            lastPetalTime = currentTime;

            // Видалення пелюстки після завершення анімації
            petal.addEventListener('animationend', () => {
                petalsContainer.removeChild(petal);
            });
            setTimeout(()=>{petal.remove()}, 48000)
        }
    }

    // Створення пелюсток через певний інтервал
    setInterval(createPetal, 3000); // Можете регулювати інтервал в мілісекундах
});




















// document.addEventListener('DOMContentLoaded', function () {
//     window.scrollTo(0, 0);
// });

   

// });
// document.addEventListener('DOMContentLoaded', function () {
//    window.addEventListener('scroll', function () {
//       if (window.scrollY > 0) {
//          document.querySelector('header').classList.add('scrolled');
//       } else {
//          document.querySelector('header').classList.remove('scrolled');
//       }
//    });
// });