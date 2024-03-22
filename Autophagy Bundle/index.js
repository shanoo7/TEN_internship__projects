const btnQtyMinus = document.getElementById('span1')
const btnQtyPlus = document.getElementById('span3')
let spn = document.getElementById('span2')
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