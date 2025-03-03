// Simple function to display an alert
function showAlert() {
    alert("Thank you for visiting Vionext! Let's create something great together.");
}

// Apply animations when scrolling
document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll(".animate-fade, .animate-slide");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, { threshold: 0.1 });

    elements.forEach(el => observer.observe(el));
});

// Contact form submission
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Your message has been sent successfully!");
    this.reset();
});
