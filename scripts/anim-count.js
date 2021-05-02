window.addEventListener('DOMContentLoaded', () => {
    function getScrollPosition() {
        const counter_section = document.querySelectorAll('.fade');
        let win_height = window.innerHeight;
        counter_section.forEach((section) => {
            let counter_position = section.getBoundingClientRect().top;
            if (counter_position < win_height) {
                section.classList.add('appear');
            } else {
                section.classList.add('fade');
            }
        })
    }
    window.addEventListener('scroll', getScrollPosition);
})
const speed = 100;

// counters.forEach(counter => {
//      const updateCount = () => {
//          const target = +counter.getAttribute('data-target');
//          const count = +counter.innerText;

//          const inc = target / speed;

//          if (count < target) {
//              counter.innerText = Math.ceil(count + inc);
//              setTimeout(updateCount, 1);
//          } else {
//              count.innerText = target;
//          }
//      }

//      updateCount();
//  });