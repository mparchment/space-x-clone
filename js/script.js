const btn = document.getElementById('menu-btn');
btn.classList.toggle('open');
const menu = document.getElementById('mobile-menu');
menu.classList.toggle('show-menu');

let scrollStarted = false;

const overlay = document.getElementById('overlay');
const counters = document.querySelectorAll('.counter')

btn.addEventListener('click', navToggle);
function navToggle () {
    btn.classList.toggle('open');
    overlay.classList.toggle('overlay-show');
    document.body.classList.toggle('stop-scrolling');
    menu.classList.toggle('show-menu');
}

document.addEventListener('scroll', scrollPage)
function scrollPage () {
    const scrollPos = window.scrollY;
    if (scrollPos > 100 && !scrollStarted) {
        countUp()
        scrollStarted = true;
    } else if (scrollPos < 100 && scrollStarted) {
        reset();
        scrollStarted = false;
    }
}

function countUp() {
    counters.forEach((counter) => {

        counter.innerText = '0';

        const updateCounter = () => {
            // Get count target
            const target = +counter.getAttribute('data-target');
            // Get current counter value
            const count = +counter.innerText;
            // Create an increment
            const icr = target / 100;
            // Check if counter is less than target
            if (count < target) {
                // Round up and set counter value
                counter.innerText = `${Math.ceil(count + icr)}`
                setTimeout(updateCounter, 75);
            }
            else {
                counter.innerText = target;
            }
        }

        updateCounter();
    })
}

function reset(){
    counters.forEach((counter) => counter.innerHTML = '0')
}