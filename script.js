// DOM elements
const mobileMenuToggle = document.querySelector(".mobile-menu-toggle");
const navLinks = document.querySelector(".nav-links");
const contactForm = document.getElementById("contactForm");
const ctaPrimary = document.getElementById("cta-primary");

// Mobile menu functionality
mobileMenuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  mobileMenuToggle.classList.toggle("active");
});

// Close mobile menu when clicking on a link
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    mobileMenuToggle.classList.remove("active");
  });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      const headerHeight = document.querySelector(".header").offsetHeight;
      const targetPosition = target.offsetTop - headerHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  });
});

// Contact form submission
contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  // Get form data
  const formData = new FormData(contactForm);
  const data = {
    name: formData.get("name"),
    email: formData.get("email"),
    service: formData.get("service"),
    message: formData.get("message"),
  };

  // Simulate form submission (replace with actual API call)
  submitForm(data);
});

// Simulate form submission
function submitForm(data) {
  // Show loading state
  const submitBtn = contactForm.querySelector('button[type="submit"]');
  const originalText = submitBtn.textContent;
  submitBtn.textContent = "Sending...";
  submitBtn.disabled = true;

  // Simulate API call
  setTimeout(() => {
    // Reset form
    contactForm.reset();

    // Show success message
    showNotification(
      "Message sent successfully! We'll get back to you soon.",
      "success"
    );

    // Reset button
    submitBtn.textContent = originalText;
    submitBtn.disabled = false;

    console.log("Form submitted:", data);
  }, 2000);
}

// CTA button click tracking
ctaPrimary.addEventListener("click", () => {
  // Track button click (replace with actual analytics)
  trackEvent("CTA Click", "Hero Section", "Get Started");

  // Scroll to contact form
  document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
});

// Event tracking function (for A/B testing analytics)
function trackEvent(action, category, label) {
  // This is where you would integrate with your analytics service
  // Examples: Google Analytics, Mixpanel, Amplitude, etc.
  console.log("Event tracked:", { action, category, label });

  // Example: Google Analytics 4
  // gtag('event', action, {
  //     event_category: category,
  //     event_label: label,
  //     value: 1
  // });
}

// Notification system
function showNotification(message, type = "info") {
  // Create notification element
  const notification = document.createElement("div");
  notification.className = `notification notification-${type}`;
  notification.innerHTML = `
        <span>${message}</span>
        <button class="notification-close">&times;</button>
    `;

  // Add styles
  Object.assign(notification.style, {
    position: "fixed",
    top: "20px",
    right: "20px",
    background:
      type === "success" ? "#10b981" : type === "error" ? "#ef4444" : "#3b82f6",
    color: "white",
    padding: "1rem 1.5rem",
    borderRadius: "8px",
    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)",
    zIndex: "10000",
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    maxWidth: "400px",
    animation: "slideInRight 0.3s ease",
  });

  // Style close button
  const closeBtn = notification.querySelector(".notification-close");
  Object.assign(closeBtn.style, {
    background: "none",
    border: "none",
    color: "white",
    fontSize: "1.5rem",
    cursor: "pointer",
    padding: "0",
    lineHeight: "1",
  });

  // Add to page
  document.body.appendChild(notification);

  // Close functionality
  closeBtn.addEventListener("click", () => {
    notification.remove();
  });

  // Auto remove after 5 seconds
  setTimeout(() => {
    if (notification.parentNode) {
      notification.remove();
    }
  }, 5000);
}

// Scroll animations
function animateOnScroll() {
  const elements = document.querySelectorAll(
    ".feature-card, .about-text, .stats"
  );

  elements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    const elementVisible = 150;

    if (elementTop < window.innerHeight - elementVisible) {
      element.classList.add("fade-in-up");
    }
  });
}

// Throttle function for performance
function throttle(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Add scroll event listener with throttling
window.addEventListener("scroll", throttle(animateOnScroll, 100));

// Header scroll effect
window.addEventListener(
  "scroll",
  throttle(() => {
    const header = document.querySelector(".header");
    if (window.scrollY > 100) {
      header.style.background = "rgba(255, 255, 255, 0.95)";
      header.style.backdropFilter = "blur(10px)";
    } else {
      header.style.background = "#ffffff";
      header.style.backdropFilter = "none";
    }
  }, 100)
);

// Initialize animations on page load
document.addEventListener("DOMContentLoaded", () => {
  animateOnScroll();

  // Add some interactive feedback
  document.querySelectorAll(".btn").forEach((btn) => {
    btn.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-2px)";
    });

    btn.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)";
    });
  });
});

// A/B Testing utilities (for future use)
window.ABTest = {
  // Get visitor's variant (could be stored in localStorage or cookie)
  getVariant: function () {
    let variant = localStorage.getItem("ab_variant");
    if (!variant) {
      // Randomly assign variant A or B
      variant = Math.random() < 0.5 ? "A" : "B";
      localStorage.setItem("ab_variant", variant);
    }
    return variant;
  },

  // Track conversion events
  trackConversion: function (event) {
    const variant = this.getVariant();
    trackEvent("Conversion", event, variant);
    console.log(`Conversion tracked: ${event} for variant ${variant}`);
  },

  // Apply variant-specific changes
  applyVariant: function () {
    const variant = this.getVariant();
    document.body.setAttribute("data-variant", variant);
    console.log(`Applied variant: ${variant}`);

    // Example variant modifications:
    // if (variant === 'B') {
    //     document.querySelector('.btn-primary').textContent = 'Start Now';
    //     document.querySelector('.hero h2').textContent = 'Alternative Headline';
    // }
  },
};

// Initialize A/B test on page load
document.addEventListener("DOMContentLoaded", () => {
  window.ABTest.applyVariant();
});

// Add CSS animation for notifications
const style = document.createElement("style");
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    .nav-links.active {
        display: flex !important;
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: white;
        flex-direction: column;
        padding: 1rem;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
    
    .mobile-menu-toggle.active span:nth-child(1) {
        transform: rotate(-45deg) translate(-5px, 6px);
    }
    
    .mobile-menu-toggle.active span:nth-child(2) {
        opacity: 0;
    }
    
    .mobile-menu-toggle.active span:nth-child(3) {
        transform: rotate(45deg) translate(-5px, -6px);
    }
`;
document.head.appendChild(style);
