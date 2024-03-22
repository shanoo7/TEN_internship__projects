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