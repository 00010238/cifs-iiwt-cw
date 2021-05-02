document.querySelector('.menu-btn').addEventListener('click', () => 
document.querySelector('.main-nav ul').classList.toggle('show'));

window.addEventListener('DOMContentLoaded', () => {
    function getScrollPosition() {
        const counter_section = document.querySelectorAll('.fade');
        let win_height = window.innerHeight; //assinging the height of the user's screen

        counter_section.forEach((section) => {
            let counter_position = section.getBoundingClientRect().top;
            //getting the window/screen position

            if (counter_position < win_height) {
                section.classList.add('appear'); //if the element is on the screen, it will get the CSS values of the class 'appear'
            } else {
                section.classList.add('fade'); //else it will sticik to the value of the class 'fade'
            }
        })
    }
    window.addEventListener('scroll', getScrollPosition); //calling the function
})
const speed = 100;

function showSlide(x) {
    let i;
    let slides = document.getElementsByClassName("comment"); // Getting the elements with class name of 'comment'
    let dots = document.getElementsByClassName("dot"); // Getting the elements with class name of 'dot'

    if(x > slides.length) slideIndex = 1; //

    if (x < 1) slideIndex = slides.length; //


    //Hiding the all quotes/comments
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    //Giving the CSS values of the class 'active' to the 'dots' elements
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "")
    }

    slides[slideIndex - 1].style.display = " block"; //displaying the hidden elements

    dots[slideIndex - 1].className += " active"; 
}

let slideIndex = 1;
showSlide(slideIndex);

function pushSlides(x) {
    showSlide(slideIndex += x);
}

function currentSlide(x) {
    showSlide(slideIndex = x);
}

