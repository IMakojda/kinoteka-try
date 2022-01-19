
createUpBtn()
function createUpBtn() {
    const buttonUp = document.createElement('button');
    console.log(buttonUp);
    buttonUp.textContent = "^";
    buttonUp.className = `upBtn`;
    document.querySelector('body').appendChild(buttonUp);


const btn = document.querySelector('.upBtn');
    console.log(btn);
    
    window.addEventListener("scroll", () => {
        let a = window.scrollTop;
        console.log(a);
//   if (window.scrollTop() > 300) {
//     btn.addClass('showUpBtn');
//   } else {
//     btn.removeClass('showUpBtn');
//   }
})

// btn.on('click', function(e) {
//   e.preventDefault();
//   $('html, body').animate({scrollTop:0}, '300');
// });
}

