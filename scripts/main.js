let projects = document.querySelectorAll(".project__item"),
    promobarMove = document.querySelector(".promo__background"),
    backgroundMove = document.querySelector(".scrollbar"),
    menuBar = document.querySelector(".menuBar"),
    closeMenu = document.querySelector(".close__button"),
    menuSlide = document.querySelector(".menu__slide");

for(const currentProject of projects){
    currentProject.addEventListener("click", () => {
        for (const removeActive of projects){
            removeActive.classList.remove("active");
        }
        currentProject.classList.add("active");
    });
}

menuBar.addEventListener("click", () => {
    menuSlide.classList.toggle("active");
});

closeMenu.addEventListener("click", () => {
    menuSlide.classList.remove("active");
});


setInterval(function() {
    backgroundMove.classList.toggle("active");
    promobarMove.classList.toggle("active");
  }, 8000);


let nextButt = document.querySelector(".next"),
    prevButt = document.querySelector(".prev"),
    slides = document.querySelector(".slider__slides"),
    counter = 0,
    barSlider = document.querySelector(".projectbar"),
    slide = document.querySelector(".slider__slide");

nextButt.addEventListener("click", () => {
    prevButt.classList.remove("dissabled");
    slides.style.transform += 'translate(' + (slides.offsetLeft - slide.offsetWidth - 30) + 'px)';
    barSlider.style.transform += 'translate(' + barSlider.offsetWidth + 'px)';
    counter += 1;
    if(counter == 2){
        nextButt.classList.add("dissabled");
    } else {
        nextButt.classList.remove("dissabled");
    }
});

let variableSlider = {
    'novosilki': {
        '0' : 'novosilki/novosilki.png',
        '1' : 'novosilki/novosilki2.png',
        '2' : 'novosilki/novosilki3.png',
    },
    'desna': {
          '0' : 'desna/desna.png',
          '1' : 'desna/desna2.png',
          '2' : 'desna/desna3.png',
    }
}

let sliderSwap = document.querySelectorAll('.project__item');
for(const sliderDisplay of sliderSwap){
    sliderDisplay.addEventListener("click", () => {
        nextButt.classList.remove("dissabled");
        prevButt.classList.add("dissabled");
        slides.style.transform = 'translate(0px)';
        barSlider.style.transform = 'translate(0px)';
        replacePhoto(sliderDisplay);
    });
}

function replacePhoto(sliderDisplay){
    let current = sliderDisplay.getAttribute("name"),
        counter = 0,
        photo = document.querySelectorAll(".slider__slide img");
        for (const photos of photo){
            photos.classList.add("active");
        }
        setTimeout(function() {
            for (const photos of photo){
                photos.src = "https://front-end-creator.github.io/vidanNew.github.io/images/" + variableSlider[current][counter];
                counter++;
                photos.classList.remove("active");
            }
        }, 500);
        
}

prevButt.addEventListener("click", () => {
    nextButt.classList.remove("dissabled");
    slides.style.transform += 'translate(' + (slides.offsetLeft + slide.offsetWidth + 30) + 'px)';
    barSlider.style.transform += 'translate(' + (- barSlider.offsetWidth) + 'px)';
    counter -= 1;
    if(counter == 0){
        prevButt.classList.add("dissabled");
    } else {
        prevButt.classList.remove("dissabled");
    }
});
