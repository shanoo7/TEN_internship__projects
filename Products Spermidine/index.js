//img slider function:-
const firstLeftBtn = document.getElementById("first-btn1")
const firstrightBtn = document.getElementById("first-btn2")
const images = document.querySelectorAll(".first-inner-img")
const slider = document.querySelector('.slider')
let slideNo = 1;

firstLeftBtn.addEventListener('click', function () {
  console.log("object")
  if (slideNo != 0) {
    slider.style.transform = `translateX(-${(slideNo - 2) * 100}%)`;
    slideNo--;
  }
})
firstrightBtn.addEventListener('click', function () {
  console.log("object")
  if (slideNo < images.length) {
    slider.style.transform = `translateX(-${slideNo * 100}%)`;
    slideNo++;
  } else {
    slideNo = 0;
  }
})



//img width increse by click:-
let icon = document.querySelectorAll('.img-nav-icon');

icon.forEach(function (image) {
  image.addEventListener('click', function () {
    icon.forEach(function (img) {
      img.style.width = '100px';
    });
    this.style.width = '150px';
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const dropdownBtns = document.querySelectorAll(".dropdown-btn");

  dropdownBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      const dropdownContent = this.nextElementSibling;
      dropdownContent.classList.toggle("show");
    });
  });

  document.addEventListener("click", (event) => {
    dropdownBtns.forEach(function (btn) {
      let dropdownContent = btn.nextElementSibling;
      if (!event.target.matches(".dropdown-btn") && !event.target.matches(".dropdown-content")) {
        dropdownContent.classList.remove("show");
      }
    });
  });
});




//counter function:-
const btnQtyMinus = document.getElementById('span1')
const btnQtyPlus = document.getElementById('span3')
let spn = document.getElementById('span2')
let count = 1;
//incrementByOne
btnQtyMinus.addEventListener('click', () => {
  if (count > 1) {
    count--;
    spn.innerText = count;
    console.log("-")
  }
})
//decrementByOne
btnQtyPlus.addEventListener('click', () => {
  count++;
  spn.innerText = count;
  console.log("+")
})




document.addEventListener('DOMContentLoaded', function () {
  // Show div1 by default
  document.getElementById('div1').style.display = 'block';
  document.getElementById('radio1').checked = true;

  // Get all radio buttons
  const radios = document.querySelectorAll('input[type="radio"]');

  // Add event listener to each radio button
  radios.forEach(radio => {
    radio.addEventListener('change', function () {
      // Get the value of the selected radio button
      const selectedValue = this.value;

      // Hide all divs
      const divs = document.querySelectorAll('.content');
      divs.forEach(div => {
        div.style.display = 'none';
      });

      // Show the div corresponding to the selected radio button
      document.getElementById(selectedValue).style.display = 'block';

      // Remove border from all labels
      const labels = document.querySelectorAll('label');
      labels.forEach(label => {
        label.style.border = 'none';
      });

      // Add border to the selected label
      this.nextElementSibling.style.border = '1px solid grey';
    });
  });
});



//toggleDropdown
function toggleDropdown() {
  var dropdownContent = document.getElementById("dropdownContent2");
  dropdownContent.classList.toggle("show");
}

window.onclick = function (event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content2");
    for (var i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i]; onclick = "toggleDropdown()"
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}