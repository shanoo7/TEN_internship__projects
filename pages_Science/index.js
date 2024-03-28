 const texts = document.querySelectorAll('.text');
 const contents = document.querySelectorAll('.contents');

 texts.forEach((text, index) => {
   text.addEventListener('click', () => {
     texts.forEach(t => t.classList.remove('border-bottom'));
     text.classList.add('border-bottom');
     
     contents.forEach(content => content.style.display = 'none');
     contents[index].style.display = 'block';
   });
 });