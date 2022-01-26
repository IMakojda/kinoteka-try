
createUpBtn()
function createUpBtn() {
    const buttonUp = document.createElement('a');
    // console.log(buttonUp);
    buttonUp.className = `upBtn`;
    document.querySelector('body').appendChild(buttonUp);


    const btn = document.querySelector('.upBtn');
    btn.addEventListener("click",()=>{if (window.pageYOffset > 0) {
      window.scrollTo(600,0);
    }})
    
    window.addEventListener("scroll", () => {
        let a = window.pageYOffset;
        // console.log(a);
  if (a > 300) {
    btn.classList.add('showUpBtn');
  } else {
    btn.classList.remove('showUpBtn');
  }
})

// btn.on('click', function(e) {
//   e.preventDefault();
//   $('html, body').animate({scrollTop:0}, '300');
// });
}

