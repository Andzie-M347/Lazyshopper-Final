// alert('hello world')
// Newsletter Modal
// let newsLetter = document.querySelector('.newsletter')
// let closeBtn = document.querySelector('.close-btn')

// window.addEventListener('load', function () {
//     var newsLetterPopup = function () {
//         newsLetter.classList.toggle('active')
//     };

//     setTimeout(newsLetterPopup, 8000);
// })

// closeBtn.addEventListener('click', function() {
//     newsLetter.classList.remove('active')
// })


// Copyrights 
let copyrightDate = document.querySelector('#copyright')
copyrightDate.appendChild(document.createTextNode(new Date().getFullYear()))


var slider = tns({
    "responsive": {
        "1080": {
            "items": 4,
            "controls": true,
        
        },
        "500": {
            "items": 2
        }
    },

    container: '.my-slider',
    slideBy: 'page',
    controls: true,
    mouseDrag: true,
    swipeAngle: false,
    gutter: 10

});


// 

let prev = document.body.querySelector('[data-controls=prev]')
prev.innerHTML = `&larr;`

let next = document.body.querySelector('[data-controls=next]')
next.innerHTML = `&rarr;`

// Sticky Header 
window.addEventListener('scroll', function() {
    var header = document.querySelector('.site-header')
    header.classList.toggle('fixed', window.scrollY > 0)
})

// Scroll to top
document.addEventListener("scroll", handleScroll);
var scrollToTopBtn = document.querySelector(".scroll-top");

function handleScroll() {
  var scrollableHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var GOLDEN_RATIO = 0.5;

  if ((document.documentElement.scrollTop / scrollableHeight ) > GOLDEN_RATIO) {
    if(!scrollToTopBtn.classList.contains("showScrollBtn"))
    scrollToTopBtn.classList.add("showScrollBtn")
  } else {
    if(scrollToTopBtn.classList.contains("showScrollBtn"))
    scrollToTopBtn.classList.remove("showScrollBtn")
  }
}

scrollToTopBtn.addEventListener("click", scrollToTop);

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}


// Dropdown menu
(function(){
  var elements = document.querySelectorAll(".dropdown-button");

  function openDropdown(event){
    event.target.parentNode.classList.add("open");
  }

  function resetDropdowns(){
    var element = document.querySelector(".dropdown-button.open");
    if(element){ element.classList.remove("open"); }
  }

  function documentHandler(){
    resetDropdowns();
    document.removeEventListener('click', documentHandler , false); 
  };

  if(elements.length>0){
    elements.forEach(el=>{
      el.addEventListener('click',function(e){
        var isActive = e.target.parentNode.classList.contains("open");
        resetDropdowns();
        if (isActive) {
          return;
        }
        e.stopPropagation();
        e.preventDefault();
        openDropdown(e);
        document.addEventListener('click', documentHandler, false); 
      }, false);
    })
  }

})()