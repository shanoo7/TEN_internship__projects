const slides = document.querySelectorAll('.slide')
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

//count functionality-+-+-+-+
const btnQtyMinus = document.getElementById('btnQtyMinus')
const btnQtyPlus = document.getElementById('btnQtyPlus')
let spn = document.getElementById('spn')
let count = 1;


btnQtyMinus.addEventListener('click', () => {
    if (count > 1) {
        count--;
        spn.innerText = count;
        console.log("-")
    }

})
btnQtyPlus.addEventListener('click', () => {
    count++;
    spn.innerText = count;
    console.log("+")
})




