document.addEventListener("DOMContentLoaded",()=> {
    const dropdownBtns = document.querySelectorAll(".dropdown-btn");
  
    dropdownBtns.forEach((btn)=> {
      btn.addEventListener("click", function() {
        const dropdownContent = this.nextElementSibling;
        dropdownContent.classList.toggle("show");
      });
    });
  
    document.addEventListener("click",(event)=> {
      dropdownBtns.forEach(function(btn) {
        let dropdownContent = btn.nextElementSibling;
        if (!event.target.matches(".dropdown-btn") && !event.target.matches(".dropdown-content")) {
          dropdownContent.classList.remove("show");
        }
      });
    });
  });




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