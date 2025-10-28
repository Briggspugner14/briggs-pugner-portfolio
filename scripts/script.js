// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 70; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    }
});

// Active navigation link highlighting
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Animate skill bars on scroll
const animateSkillBars = () => {
    const skillBars = document.querySelectorAll('.skill-progress');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const skillBar = entry.target;
                const width = skillBar.getAttribute('data-width');
                skillBar.style.width = width;
            }
        });
    }, { threshold: 0.5 });
    
    skillBars.forEach(bar => {
        observer.observe(bar);
    });
};

// Fade in animation for elements
const fadeInElements = () => {
    const elements = document.querySelectorAll('.timeline-item, .publication-card, .award-card, .project-card');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in', 'visible');
            }
        });
    }, { threshold: 0.1 });
    
    elements.forEach(element => {
        element.classList.add('fade-in');
        observer.observe(element);
    });
};

// Counter animation for statistics
const animateCounters = () => {
    const counters = document.querySelectorAll('.counter');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.getAttribute('data-target'));
                const duration = 2000; // 2 seconds
                const increment = target / (duration / 16); // 60fps
                let current = 0;
                
                const updateCounter = () => {
                    current += increment;
                    if (current < target) {
                        counter.textContent = Math.floor(current);
                        requestAnimationFrame(updateCounter);
                    } else {
                        counter.textContent = target;
                    }
                };
                
                updateCounter();
                observer.unobserve(counter);
            }
        });
    }, { threshold: 0.5 });
    
    counters.forEach(counter => {
        observer.observe(counter);
    });
};

// Contact form handling
const contactForm = document.querySelector('.contact-form form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const name = contactForm.querySelector('input[type="text"]').value;
        const email = contactForm.querySelector('input[type="email"]').value;
        const subject = contactForm.querySelector('input[placeholder="Subject"]').value;
        const message = contactForm.querySelector('textarea').value;
        
        // Simple validation
        if (!name || !email || !subject || !message) {
            showNotification('Please fill in all fields.', 'error');
            return;
        }
        
        if (!isValidEmail(email)) {
            showNotification('Please enter a valid email address.', 'error');
            return;
        }
        
        // Simulate form submission
        showNotification('Thank you for your message! I\'ll get back to you soon.', 'success');
        contactForm.reset();
    });
}

// Email validation helper
const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

// Notification system
const showNotification = (message, type = 'info') => {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 10px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 400px;
    `;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Close button functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => notification.remove(), 300);
    });
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
};

// Typing animation for hero title
const typeWriter = (element, text, speed = 100) => {
    let i = 0;
    element.innerHTML = '';
    
    const timer = setInterval(() => {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
        } else {
            clearInterval(timer);
        }
    }, speed);
};

// Initialize typing animation when page loads
window.addEventListener('load', () => {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        typeWriter(heroTitle, originalText, 80);
    }
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    // Disable parallax on small screens for better performance/layout
    if (window.innerWidth <= 768) {
        const heroEl = document.querySelector('.hero');
        if (heroEl) heroEl.style.transform = '';
        return;
    }
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        const rate = scrolled * -0.5;
        hero.style.transform = `translateY(${rate}px)`;
    }
});

// Lazy loading for images (if any are added later)
const lazyLoadImages = () => {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
};

// Print functionality
const addPrintButton = () => {
    const printBtn = document.createElement('button');
    printBtn.innerHTML = '<i class="fas fa-print"></i> Print Portfolio';
    printBtn.className = 'print-btn';
    printBtn.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: #2563eb;
        color: white;
        border: none;
        padding: 12px 20px;
        border-radius: 50px;
        cursor: pointer;
        box-shadow: 0 4px 15px rgba(37, 99, 235, 0.3);
        transition: all 0.3s ease;
        z-index: 1000;
        font-family: inherit;
        font-weight: 500;
    `;
    
    printBtn.addEventListener('click', () => {
        window.print();
    });
    
    printBtn.addEventListener('mouseenter', () => {
        printBtn.style.transform = 'translateY(-2px)';
        printBtn.style.boxShadow = '0 6px 20px rgba(37, 99, 235, 0.4)';
    });
    
    printBtn.addEventListener('mouseleave', () => {
        printBtn.style.transform = 'translateY(0)';
        printBtn.style.boxShadow = '0 4px 15px rgba(37, 99, 235, 0.3)';
    });
    
    document.body.appendChild(printBtn);
};

// Theme toggle functionality (optional)
const addThemeToggle = () => {
    const themeToggle = document.createElement('button');
    themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    themeToggle.className = 'theme-toggle';
    themeToggle.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #f3f4f6;
        border: none;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        transition: all 0.3s ease;
        z-index: 1000;
    `;
    
    let isDark = false;
    
    themeToggle.addEventListener('click', () => {
        isDark = !isDark;
        document.body.classList.toggle('dark-theme', isDark);
        themeToggle.innerHTML = isDark ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
        themeToggle.style.background = isDark ? '#374151' : '#f3f4f6';
        themeToggle.style.color = isDark ? '#f9fafb' : '#374151';
    });
    
    document.body.appendChild(themeToggle);
};

// Content loading from JSON data
let websiteData = null;

const loadWebsiteData = async () => {
    try {
        const response = await fetch('data.json');
        websiteData = await response.json();
        populateWebsiteContent();
    } catch (error) {
        console.log('Could not load data.json, using static content');
        // Website will use the static HTML content if data.json is not available
    }
};

const populateWebsiteContent = () => {
    if (!websiteData) return;

    // Update personal info
    updatePersonalInfo();
    
    // Update awards
    updateAwards();
    
    // Update projects
    updateProjects();
    
    // Update skills
    updateSkills();
    
    // Update education
    updateEducation();
};

const updatePersonalInfo = () => {
    const data = websiteData.personalInfo;
    
    // Update hero section
    const heroTitle = document.querySelector('.hero-title');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    const heroDescription = document.querySelector('.hero-description');
    
    if (heroTitle) heroTitle.textContent = data.name;
    if (heroSubtitle) heroSubtitle.textContent = data.title;
    if (heroDescription) heroDescription.textContent = data.description;
    
    // Update contact info
    const emailElement = document.querySelector('.contact-item:nth-child(3) p');
    const phoneElement = document.querySelector('.contact-item:nth-child(4) p');
    const locationElement = document.querySelector('.contact-item:nth-child(2) p');
    
    if (emailElement) emailElement.textContent = data.email;
    if (phoneElement) phoneElement.textContent = data.phone;
    if (locationElement) locationElement.textContent = data.location;
};

const updateAwards = () => {
    const awardsGrid = document.querySelector('.awards-grid');
    if (!awardsGrid || !websiteData.awards) return;
    
    awardsGrid.innerHTML = websiteData.awards.map(award => `
        <div class="award-card">
            <div class="award-icon">
                <i class="fas fa-${award.icon}"></i>
            </div>
            <div class="award-content">
                <h3>${award.title}</h3>
                <p class="award-organization">${award.organization}</p>
                <p class="award-date">${award.date}</p>
                <p class="award-description">${award.description}</p>
            </div>
        </div>
    `).join('');
};

const updateProjects = () => {
    const projectsGrid = document.querySelector('.projects-grid');
    if (!projectsGrid || !websiteData.projects) return;
    
    projectsGrid.innerHTML = websiteData.projects.map(project => `
        <div class="project-card">
            <div class="project-image">
                <img src="${project.image}" alt="${project.title}" style="width: 100%; height: 100%; object-fit: cover;">
            </div>
            <div class="project-content">
                <h3>${project.title}</h3>
                <p class="project-role">${project.role}</p>
                <p class="project-duration">${project.duration}</p>
                <p class="project-description">${project.description}</p>
                <div class="project-tech">
                    ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
                <div class="project-links">
                    <a href="${project.link}" class="project-link">
                        <i class="fas fa-external-link-alt"></i> View Details
                    </a>
                </div>
            </div>
        </div>
    `).join('');
};

const updateSkills = () => {
    const skills = websiteData.skills;
    if (!skills) return;
    
    // Update programming skills
    const programmingGrid = document.querySelector('.skills-category:first-child .skills-grid');
    if (programmingGrid && skills.programming) {
        programmingGrid.innerHTML = skills.programming.map(skill => `
            <div class="skill-item">
                <span class="skill-name">${skill.name}</span>
                <div class="skill-bar">
                    <div class="skill-progress" data-width="${skill.level}%"></div>
                </div>
            </div>
        `).join('');
    }
    
    // Update software skills
    const softwareGrid = document.querySelector('.skills-category:nth-child(2) .skills-grid');
    if (softwareGrid && skills.software) {
        softwareGrid.innerHTML = skills.software.map(skill => `
            <div class="skill-item">
                <span class="skill-name">${skill.name}</span>
                <div class="skill-bar">
                    <div class="skill-progress" data-width="${skill.level}%"></div>
                </div>
            </div>
        `).join('');
    }
    
    // Update languages
    const languagesGrid = document.querySelector('.languages-grid');
    if (languagesGrid && skills.languages) {
        languagesGrid.innerHTML = skills.languages.map(lang => `
            <div class="language-item">
                <span class="language-name">${lang.name}</span>
                <span class="language-level">${lang.level}</span>
            </div>
        `).join('');
    }
};

const updateEducation = () => {
    const education = websiteData.education;
    if (!education) return;
    
    const timelineContent = document.querySelector('.timeline-content');
    if (timelineContent) {
        timelineContent.innerHTML = `
            <h3>${education.degree}</h3>
            <h4>${education.institution}</h4>
            <p class="timeline-date">${education.duration}</p>
            <p class="timeline-description">${education.description}</p>
            <div class="achievements">
                ${education.achievements.map(achievement => `<span class="achievement-tag">${achievement}</span>`).join('')}
            </div>
        `;
    }
};

// Initialize all functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    loadWebsiteData();
    animateSkillBars();
    fadeInElements();
    animateCounters();
    lazyLoadImages();
    addPrintButton();
    // addThemeToggle(); // Uncomment if you want dark mode toggle
});

// Handle window resize
window.addEventListener('resize', () => {
    // Close mobile menu on resize
    if (window.innerWidth > 768) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// Add loading animation
window.addEventListener('load', () => {
    const loader = document.querySelector('.loader');
    if (loader) {
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.style.display = 'none';
        }, 500);
    }
});

// Export functions for potential external use
window.AcademicPortfolio = {
    showNotification,
    typeWriter,
    isValidEmail
};
