const currentYear = new Date().getFullYear()
document.querySelector('.current-year').innerHTML = currentYear;

// search box
const searchBtn = document.querySelector('.search-btn')
const searchClose = document.querySelector('.search-close')
const searchBox = document.querySelector('.search-box')
searchBtn.addEventListener("click", () =>{
  searchBox.classList.add('hidden')
  searchBox.classList.remove('hidden')
})
searchClose.addEventListener("click", () =>{
  searchBox.classList.remove('hidden')
  searchBox.classList.add('hidden')
})

// Menu
const menuOpen = document.querySelector('.menu-open');
const menuClose = document.querySelector('.menu-close');
const menuOverloy = document.querySelector('.menu-overloy');
const mobileMenu = document.querySelector('.mobile-menu');

menuOpen.addEventListener("click", () =>{
  mobileMenu.classList.add('translate-x-0')
  mobileMenu.classList.remove('-translate-x-full')
})

menuOverloy.addEventListener("click", () =>{
  mobileMenu.classList.remove('translate-x-0')
  mobileMenu.classList.add('-translate-x-full')
})
menuClose.addEventListener("click", () =>{
  mobileMenu.classList.remove('translate-x-0')
  mobileMenu.classList.add('-translate-x-full')
})


// Code Snippets
 
  
    document.addEventListener('DOMContentLoaded', function(event) {
  
      var list = document.querySelectorAll('.make-snippet');
  
      [].forEach.call(list, function(el) {
        var snippet = el.innerHTML.replace(/</g,'&lt;');
            snippet = snippet.replace(/ /g,'&nbsp;');
        var code = '<pre class="language-markup"><code>'+snippet+'</pre></code>';
        el.insertAdjacentHTML('afterend',code);
      });
      
      // if your page has prism.js you get syntax highlighting
      if(window.Prism){
        Prism.highlightAll(false);
      }
  
    });


  
 