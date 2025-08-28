
// ========== THEME TOGGLE ==========
const toggle = document.getElementById('theme-toggle');
const html = document.documentElement;

if (localStorage.getItem('theme') === 'light') {
  html.classList.remove('dark');
  toggle.textContent = '🌙';
} else {
  html.classList.add('dark');
  toggle.textContent = '🌞';
}

toggle.addEventListener('click', () => {
  html.classList.toggle('dark');
  if (html.classList.contains('dark')) {
    localStorage.setItem('theme', 'dark');
    toggle.textContent = '🌞';
  } else {
    localStorage.setItem('theme', 'light');
    toggle.textContent = '🌙';
  }
});

// ========== PROJECT FILTERING ==========
function filterProjects(category) {
  const cards = document.querySelectorAll('.project-card');
  cards.forEach(card => {
    const categories = card.getAttribute('data-category');
    if (category === 'all' || categories.includes(category)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

// ========== FORM VALIDATION ==========
document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('#contact form');
  if (form) {
    form.addEventListener('submit', function (e) {
      const email = form.querySelector('input[type="email"]').value.trim();
      const name = form.querySelector('input[placeholder="Your Name"]').value.trim();
      const subject = form.querySelector('input[placeholder="Subject"]').value.trim();
      const message = form.querySelector('textarea').value.trim();

      if (!email || !name || !subject || !message) {
        e.preventDefault();
        alert("Please fill in all fields.");
      } else if (!validateEmail(email)) {
        e.preventDefault();
        alert("Please enter a valid email address.");
      }
    });
  }
});

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

// ========== SMOOTH SCROLLING ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// ========== AOS ANIMATIONS ==========
document.addEventListener('DOMContentLoaded', function () {
  AOS.init({
    duration: 1000,
    once: true,
  });
});

// ========== DYNAMIC CONTENT LOADING (EXAMPLE) ==========
function loadMoreProjects() {
  // Example placeholder for loading more project cards
  const projectGrid = document.getElementById('project-grid');
  const newCard = document.createElement('div');
  newCard.className = 'project-card bg-gray-800 border border-purple-500/20 rounded-2xl p-4 shadow-md text-white';
  newCard.innerHTML = '<h3 class="text-xl font-semibold mb-2">New Project</h3><p class="text-sm mb-3">Description for the dynamically loaded project.</p>';
  projectGrid.appendChild(newCard);
}

// Add this to your existing scripts.js file

// ========== PHONE COPY FUNCTIONALITY ==========
document.addEventListener('DOMContentLoaded', function() {
  const copyPhoneBtn = document.getElementById('copy-phone');
  const phoneNumber = document.getElementById('phone-number');
  
  if (copyPhoneBtn && phoneNumber) {
    copyPhoneBtn.addEventListener('click', function() {
      // Get the phone number text without any formatting
      const phoneText = phoneNumber.textContent.replace(/[^0-9+]/g, '');
      
      // Copy to clipboard
      navigator.clipboard.writeText(phoneText).then(function() {
        // Visual feedback
        const originalText = copyPhoneBtn.querySelector('span').textContent;
        copyPhoneBtn.querySelector('span').textContent = 'Copied!';
        
        // If device supports tel: protocol, open dialer
        if (/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
          window.location.href = `tel:${phoneText}`;
        }
        
        // Reset button text after 2 seconds
        setTimeout(function() {
          copyPhoneBtn.querySelector('span').textContent = originalText;
        }, 2000);
      }).catch(function(err) {
        console.error('Could not copy text: ', err);
      });
    });
  }
});
