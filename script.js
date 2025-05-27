// Typing Animation
const typedTextSpan = document.querySelector(".typed-text");
const skills = [
  "Good Student",
  "Honest",
  "Creative",
  "Punctual",
  "Responsible",
  "Hard worker",
  "Dedicated"
];
const languages = [
  "Team Player",
  "Respectful",
  "Innovatuve",
  "Problem Solver",
  "Organized",
  "Ambitious"
];

let currentTextIndex = 0;
let currentSet = skills;
let isDeleting = false;
let text = '';
let typeSpeed = 200;

function type() {
  const current = currentTextIndex % currentSet.length;
  const fullText = currentSet[current];
  
  if (isDeleting) {
    text = fullText.substring(0, text.length - 1);
  } else {
    text = fullText.substring(0, text.length + 1);
  }
  
  typedTextSpan.textContent = text;
  
  if (!isDeleting && text === fullText) {
    isDeleting = true;
    typeSpeed = 200;
  } else if (isDeleting && text === '') {
    isDeleting = false;
    currentTextIndex++;
    typeSpeed = 100;
    
    if (currentTextIndex % currentSet.length === 0) {
      currentSet = currentSet === skills ? languages : skills;
    }
  }
  
  setTimeout(type, typeSpeed);
}

// Setup clock numbers
function setupClockNumbers() {
  const numbers = document.querySelectorAll('.number');
  numbers.forEach(number => {
    const rotation = parseInt(number.style.getPropertyValue('--i')) * 30;
    const span = document.createElement('span');
    span.textContent = number.textContent;
    number.textContent = '';
    number.appendChild(span);
    number.style.transform = `rotate(${rotation}deg)`;
    span.style.transform = `rotate(-${rotation}deg)`;
  });
}

// Analog Clock
function updateClock() {
  const now = new Date();
  const hours = now.getHours() % 12;
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  
  const hourHand = document.querySelector('.hour');
  const minuteHand = document.querySelector('.minute');
  const secondHand = document.querySelector('.second');
  
  const hourDeg = (hours + minutes / 60) * 30;
  const minuteDeg = (minutes + seconds / 60) * 6;
  const secondDeg = seconds * 6;
  
  hourHand.style.transform = `rotate(${hourDeg}deg)`;
  minuteHand.style.transform = `rotate(${minuteDeg}deg)`;
  secondHand.style.transform = `rotate(${secondDeg}deg)`;
  
  // Update digital date time display
  const dateTimeElement = document.getElementById('current-datetime');
  const formattedDateTime = formatDateTime(now);
  dateTimeElement.textContent = formattedDateTime;
}

// Format date time
function formatDateTime(date) {
  const year = date.getUTCFullYear();
  const month = String(date.getUTCMonth() + 1).padStart(2, '0');
  const day = String(date.getUTCDate()).padStart(2, '0');
  const hours = String(date.getUTCHours()).padStart(2, '0');
  const minutes = String(date.getUTCMinutes()).padStart(2, '0');
  const seconds = String(date.getUTCSeconds()).padStart(2, '0');
  
  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  type();
  setupClockNumbers();
  setInterval(updateClock, 1000);
  updateClock();
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Form Submission
const contactForm = document.querySelector('.contact-form form');
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  // Add your form submission logic here
  alert('Thank you for your message! I will get back to you soon.');
  contactForm.reset();
});





document.addEventListener('DOMContentLoaded', function() {
  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('nav');
  
  navToggle.addEventListener('click', function() {
    nav.classList.toggle('active');
  });
  
  // Close menu when clicking outside
  document.addEventListener('click', function(e) {
    if (!nav.contains(e.target) && !navToggle.contains(e.target)) {
      nav.classList.remove('active');
    }
  });
  
  // Close menu when clicking a link
  const navLinks = document.querySelectorAll('nav ul li a');
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      nav.classList.remove('active');
    });
  });
});


// Blog Popup Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Get all read more buttons
    const readMoreBtns = document.querySelectorAll('.read-more-btn');
    
    readMoreBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const popup = this.parentElement.nextElementSibling;
            popup.classList.add('active');
        });
    });
    
    // Get all close buttons
    const closeBtns = document.querySelectorAll('.close-btn');
    
    closeBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const popup = this.closest('.blog-popup');
            popup.classList.remove('active');
        });
    });
});