const slides = document.querySelectorAll('.card-box')
let counter = 0;

slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`
})

const goPrev = () => {
    if (counter != 0) {
        counter--
        slideImage()
    }
}
const goNext = () => {
    if (counter < slides.length - 1) {
        counter++
        slideImage()
    }
}

const slideImage = () => {
    slides.forEach((slide) => {
        slide.style.transform = `translateX(-${counter * 100}%)`
    })
}