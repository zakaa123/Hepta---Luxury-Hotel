// menu functionality
document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const overlay = document.querySelector('.overlay');
    const navLinks = document.querySelectorAll('.overlay-menu ul li a');

    // Toggle menu
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        overlay.classList.toggle('active');

        // Prevent scrolling when menu is open
        document.body.style.overflow = overlay.classList.contains('active') ? 'hidden' : 'auto';
    });

    // Close menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            // 👇 IMPORTANT: Allow normal link navigation
            if (link.getAttribute('href') !== "#") {
                menuToggle.classList.remove('active');
                overlay.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });
    });
});




// menu fuctionality
// document.addEventListener('DOMContentLoaded', function() {
//     const menuToggle = document.querySelector('.menu-toggle');
//     const overlay = document.querySelector('.overlay');
//     const navLinks = document.querySelectorAll('.overlay-menu ul li a');
    
    // Toggle menu
    // menuToggle.addEventListener('click', () => {
    //     menuToggle.classList.toggle('active');
    //     overlay.classList.toggle('active');
        
    //     // Prevent scrolling when menu is open
    //     if (overlay.classList.contains('active')) {
    //         document.body.style.overflow = 'hidden';
    //     } else {
    //         document.body.style.overflow = 'auto';
    //     }
    // });
    
    // Close menu when clicking on a link
//     navLinks.forEach(link => {
//         link.addEventListener('click', () => {
//             menuToggle.classList.remove('active');
//             overlay.classList.remove('active');
//             document.body.style.overflow = 'auto';
//         });
//     });
// });

//  issue section
// Select all menu links
// const menuLinks = document.querySelectorAll('.overlay-menu a');
// const overlay = document.querySelector('.overlay');
// const menuToggle = document.querySelector('.menu-toggle');

// Close menu when a link is clicked
// menuLinks.forEach(link => {
//   link.addEventListener('click', () => {
//     overlay.classList.remove('active'); // Hide overlay
//     menuToggle.classList.remove('active'); // Reset toggle button
//   });
// });


// slider fuctionality
document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelector('.slides');
    const slideItems = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    const dotsContainer = document.querySelector('.slider-dots');
    let currentIndex = 0;
    const slideCount = slideItems.length;

    // Create dots
    for (let i = 0; i < slideCount; i++) {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (i === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(i));
        dotsContainer.appendChild(dot);
    }

    const dots = document.querySelectorAll('.dot');

    function updateSlider() {
        slides.style.transform = `translateX(-${currentIndex * 100}%)`;
        
        // Update dots
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }

    function goToSlide(index) {
        currentIndex = (index + slideCount) % slideCount;
        updateSlider();
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slideCount;
        updateSlider();
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + slideCount) % slideCount;
        updateSlider();
    }

    // Event listeners
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);

    // Auto slide every 1 second (1000ms)
    let slideInterval = setInterval(nextSlide, 1000);

    // Pause on hover
    const slider = document.querySelector('.slider');
    slider.addEventListener('mouseenter', () => clearInterval(slideInterval));
    slider.addEventListener('mouseleave', () => {
        slideInterval = setInterval(nextSlide, 2000);
    });
});

// blog section
document.addEventListener('DOMContentLoaded', function() {
    // Animation on scroll
    const animateElements = document.querySelectorAll('.animate');
    
    function checkAnimation() {
        animateElements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                const delay = element.dataset.delay || 0;
                
                setTimeout(() => {
                    element.classList.add('animated');
                }, delay * 1000);
            }
        });
    }
    
    // Initial check
    checkAnimation();
    
    // Check on scroll
    window.addEventListener('scroll', checkAnimation);
    
    // Card hover effects
    const blogCards = document.querySelectorAll('.blog-card');
    
    blogCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
            this.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.15)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
        });
    });
});

// suggestion section
document.addEventListener('DOMContentLoaded', function() {
    // Add intersection observer for scroll animations
    const destinationCards = document.querySelectorAll('.destination-card');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };
    
    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    destinationCards.forEach(card => {
        observer.observe(card);
    });
    
    // Add hover effect enhancement
    destinationCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
            this.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.15)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
        });
    });
});

// footer

document.addEventListener('DOMContentLoaded', function() {
    // Animate footer columns on scroll
    const footerCols = document.querySelectorAll('.footer-col');
    
    const footerObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                
                // Add staggered animation
                const index = Array.from(footerCols).indexOf(entry.target);
                entry.target.style.transitionDelay = `${index * 0.1}s`;
                
                footerObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    footerCols.forEach(col => {
        footerObserver.observe(col);
    });
    
    // Add hover effect to social icons
    const socialIcons = document.querySelectorAll('.social-icons a');
    socialIcons.forEach(icon => {
        icon.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.1)';
        });
        
        icon.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Form submission
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            if (emailInput.value) {
                alert('Thank you for subscribing!');
                emailInput.value = '';
            }
        });
    }
});


// whatsapp 



        document.addEventListener('DOMContentLoaded', function() {
    // Form submission
    const contactForm = document.querySelector('.contact-form');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const message = document.getElementById('message').value;
        
        // Here you would typically send the data to a server
        console.log('Form submitted:', { name, email, phone, message });
        
        // Show success message
        alert('Thank you for your message! We will get back to you soon.');
        
        // Reset form
        contactForm.reset();
    });
    
    // WhatsApp button functionality
    const whatsappBtn = document.querySelector('.whatsapp-btn');
    
    whatsappBtn.addEventListener('click', function() {
        // Get form values
        const name = document.getElementById('name').value;
        const message = document.getElementById('message').value;
        
        if (!name || !message) {
            alert('Please enter your name and message before sending via WhatsApp');
            return;
        }
        
        // Encode message for WhatsApp URL
        const encodedMessage = encodeURIComponent(
            `Hello, my name is ${name}. ${message}`
        );
        
        // Open WhatsApp (this would work on mobile devices)
        window.open(`https://wa.me/?text=${encodedMessage}`, '_blank');
    });
    
    // Animate form fields on focus
    const formGroups = document.querySelectorAll('.form-group');
    
    formGroups.forEach(group => {
        const input = group.querySelector('input, textarea');
        
        input.addEventListener('focus', function() {
            group.querySelector('.underline').style.width = '100%';
        });
        
        input.addEventListener('blur', function() {
            if (!input.value) {
                group.querySelector('.underline').style.width = '0';
            }
        });
    });
});
        // Animate elements when they come into view
        document.addEventListener('DOMContentLoaded', function() {
            // Search bar animation on focus
            const searchInput = document.querySelector('.search-bar input');
            searchInput.addEventListener('focus', function() {
                this.style.width = '300px';
                if (window.innerWidth > 768) {
                    this.style.width = '350px';
                }
            });
            
            searchInput.addEventListener('blur', function() {
                if (window.innerWidth > 768) {
                    this.style.width = '250px';
                } else {
                    this.style.width = '100%';
                }
            });
            
            // Add hover effect to posts
            const posts = document.querySelectorAll('.post, .sidebar-post');
            posts.forEach(post => {
                post.addEventListener('mouseenter', function() {
                    this.style.transform = 'translateY(-5px)';
                    this.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
                });
                
                post.addEventListener('mouseleave', function() {
                    this.style.transform = 'translateY(0)';
                    this.style.boxShadow = 'none';
                });
            });
            
            // Responsive adjustments
            function handleResize() {
                if (window.innerWidth <= 768) {
                    // Mobile adjustments
                } else {
                    // Desktop adjustments
                }
            }
            
            window.addEventListener('resize', handleResize);
            handleResize();
        });


        document.addEventListener('DOMContentLoaded', function() {
    // Add animation to cards when they come into view
    const cards = document.querySelectorAll('.post-card, .popular-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    cards.forEach(card => {
        card.style.opacity = 0;
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(card);
    });
    
    // Search functionality
    const searchBtn = document.getElementById('search-btn');
    const searchInput = document.getElementById('search-input');
    
    searchBtn.addEventListener('click', function() {
        if (searchInput.value.trim() !== '') {
            alert('Searching for: ' + searchInput.value);
            // In a real implementation, you would perform search here
        }
    });
    
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter' && searchInput.value.trim() !== '') {
            alert('Searching for: ' + searchInput.value);
            // In a real implementation, you would perform search here
        }
    });
});