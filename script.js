// Dynamic Greeting
const greetingBox = document.getElementById('greeting-box');
const greetBtn = document.getElementById('greet-btn');

function updateGreeting() {
    const hours = new Date().getHours();
    let message = "";
    if (hours < 12) message = "Good Morning! ☀️";
    else if (hours < 17) message = "Good Afternoon! 🌤️";
    else message = "Good Evening! 🌙";
    
    greetingBox.textContent = message;
    return message;
}

greetBtn.addEventListener('click', () => {
    const msg = updateGreeting();
    alert(`👋 Welcome! ${msg} Today is ${new Date().toLocaleDateString()}`);
});

// Initial call
updateGreeting();

// Color Magician
const colorBtn = document.getElementById('color-btn');
const colors = ['#8338ec', '#3a86ff', '#ff006e', '#ffbe0b', '#fb5607', '#06d6a0'];
let colorIndex = 0;

colorBtn.addEventListener('click', () => {
    colorIndex = (colorIndex + 1) % colors.length;
    const nextColor = colors[colorIndex];
    colorBtn.style.backgroundColor = nextColor;
    colorBtn.style.boxShadow = `0 10px 20px ${nextColor}44`;
});

// Calculator Logic
const display = document.getElementById('display');

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = "Error";
        setTimeout(clearDisplay, 1500);
    }
}

// Reveal Logic
const revealElements = document.querySelectorAll('.reveal, .reveal-delay, .reveal-late');

const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    revealElements.forEach(el => {
        const top = el.getBoundingClientRect().top;
        if (top < windowHeight - 50) {
            el.classList.add('active');
        }
    });
};

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// Form Handling
document.getElementById('simple-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const val = document.getElementById('msg').value;
    alert(`Thank you for your message: "${val}"\nWe have received it!`);
    document.getElementById('msg').value = "";
});
