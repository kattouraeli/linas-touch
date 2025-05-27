
/**
 * Stellar Nails - Main JavaScript
 */

// DOM Elements
const header = document.getElementById('header');
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const mobileMenu = document.querySelector('.mobile-menu');
const contactForm = document.getElementById('contactForm');
const galleryItems = document.querySelectorAll('.gallery-item');
const galleryModal = document.getElementById('galleryModal');
const modalImg = document.getElementById('modalImg');
const modalTitle = document.getElementById('modalTitle');
const modalCategory = document.getElementById('modalCategory');
const closeModal = document.querySelector('.close-modal');
const toast = document.getElementById('toast');
const closeToast = document.querySelector('.close-toast');
const backToTop = document.querySelector('.back-to-top');
const currentYearSpan = document.getElementById('currentYear');

// Set current year in footer
if (currentYearSpan) {
  currentYearSpan.textContent = new Date().getFullYear();
}

// Header scroll effect
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Mobile menu toggle
if (mobileMenuBtn) {
  mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');

    const icon = mobileMenuBtn.querySelector('i');

    if (mobileMenu.classList.contains('active')) {
      icon.classList.remove('fa-bars');
      icon.classList.add('fa-times');
      mobileMenuBtn.setAttribute('aria-expanded', 'true');
    } else {
      icon.classList.remove('fa-times');
      icon.classList.add('fa-bars');
      mobileMenuBtn.setAttribute('aria-expanded', 'false');
    }
  });
}

// Close mobile menu when clicking on a link
const mobileMenuLinks = document.querySelectorAll('.mobile-menu .nav-link');
mobileMenuLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
    
    // Reset hamburger icon
    const spans = mobileMenuBtn.querySelectorAll('span');
    spans[0].style.transform = 'none';
    spans[1].style.opacity = '1';
    spans[2].style.transform = 'none';
  });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    const target = document.querySelector(this.getAttribute('href'));
    if (!target) return;
    
    const headerOffset = 80;
    const elementPosition = target.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  });
});

// Gallery modal
galleryItems.forEach(item => {
  item.addEventListener('click', () => {
    const imgSrc = item.querySelector('img').src;
    const title = item.getAttribute('data-title');
    const category = item.getAttribute('data-category');
    
    modalImg.src = imgSrc;
    modalTitle.textContent = title;
    modalCategory.textContent = category;
    galleryModal.style.display = 'block';
    
    // Prevent body scrolling when modal is open
    document.body.style.overflow = 'hidden';
  });
});

// Close modal
if (closeModal) {
  closeModal.addEventListener('click', () => {
    galleryModal.style.display = 'none';
    document.body.style.overflow = 'auto';
  });
}

// Close modal when clicking outside of the content
window.addEventListener('click', (e) => {
  if (e.target === galleryModal) {
    galleryModal.style.display = 'none';
    document.body.style.overflow = 'auto';
  }
});

// Contact form submission
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Simulate form submission (in a real site, this would send data to a server)
    const formData = new FormData(contactForm);
    const formDataObj = Object.fromEntries(formData.entries());
    
    console.log('Form submitted with:', formDataObj);
    
    // Reset form
    contactForm.reset();
    
    // Show success toast
    showToast();
  });
}

// Show toast message
function showToast() {
  toast.classList.add('show');
  
  // Auto hide toast after 5 seconds
  setTimeout(() => {
    hideToast();
  }, 5000);
}

// Hide toast message
function hideToast() {
  toast.classList.remove('show');
}

// Close toast when clicking the X
if (closeToast) {
  closeToast.addEventListener('click', hideToast);
}

// Show/hide back to top button based on scroll position
window.addEventListener('scroll', () => {
  if (window.scrollY > 500) {
    backToTop.style.opacity = '1';
  } else {
    backToTop.style.opacity = '0';
  }
});

// Create folder structure and initialize the app
function initApp() {
  console.log('StellarNails website initialized!');
  
  // Add animation classes when elements enter viewport
  const animateOnScroll = () => {
    const elements = document.querySelectorAll('.stats-grid, .service-card, .studio-image, .info-card');
    
    elements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      const elementBottom = element.getBoundingClientRect().bottom;
      const windowHeight = window.innerHeight;
      
      if (elementTop < windowHeight - 100 && elementBottom > 0) {
        element.classList.add('animate-fade-in');
      }
    });
  };
  
  // Check on scroll
  window.addEventListener('scroll', animateOnScroll);
  
  // Check on initial load
  animateOnScroll();
}

// Initialize once DOM is fully loaded
document.addEventListener('DOMContentLoaded', initApp);
