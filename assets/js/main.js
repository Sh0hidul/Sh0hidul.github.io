// Main JavaScript file for portfolio

document.addEventListener('DOMContentLoaded', function() {
    // Tab navigation functionality
    const tabLinks = document.querySelectorAll('.tabs a');
    
    tabLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Only handle internal links
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                
                // Remove active class from all tabs
                document.querySelectorAll('.tabs li').forEach(tab => {
                    tab.classList.remove('active');
                });
                
                // Add active class to current tab
                this.parentElement.classList.add('active');
                
                // Show the corresponding section
                const targetId = this.getAttribute('href');
                document.querySelectorAll('.section').forEach(section => {
                    section.style.display = 'none';
                });
                document.querySelector(targetId).style.display = 'block';
            }
        });
    });
});
