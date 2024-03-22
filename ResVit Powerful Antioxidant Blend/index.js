const firstLeftBtn = document.getElementById("first-btn1")
const firstrightBtn = document.getElementById("first-btn2")
const images = document.querySelectorAll(".first-inner-img")
const slider = document.querySelector('.slider')
let slideNo=1;

firstLeftBtn.addEventListener('click',function(){
    console.log("object")
    if(slideNo!=0){
        slider.style.transform= `translateX(-${(slideNo-2)*100}%)`;
    slideNo--;
    }
})
firstrightBtn.addEventListener('click',function(){
    console.log("object")
    if(slideNo<images.length){
        slider.style.transform= `translateX(-${slideNo*100}%)`;
    slideNo++;
    }else{
        slideNo=0;
    }
})






let icon = document.querySelectorAll('.img-nav-icon');

  icon.forEach(function(image) {
    image.addEventListener('click', function() {
      icon.forEach(function(img) {
        img.style.width = '100px'; 
      });
      this.style.width = '150px'; 
    });
  });



 
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


