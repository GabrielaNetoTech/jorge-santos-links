// WhatsApp function
function openWhatsApp(number, name) {
    const message = encodeURIComponent(`Olá, ${name}! Gostaria de falar contigo sobre os serviços do Jorge Santos Despachante.`);
    const whatsappUrl = `https://wa.me/${number}?text=${message}`;
    window.open(whatsappUrl, '_blank');
}

// Website function
function openWebsite() {
    // Substitua pela URL real do site
    const websiteUrl = 'https://jorgesantosdespachante.com.br';
    window.open(websiteUrl, '_blank');
}

// Smooth scroll animation
document.addEventListener('DOMContentLoaded', function() {
    const scrollIndicator = document.querySelector('.scroll-arrow');
    
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', function() {
            const linksSection = document.querySelector('.links-section');
            if (linksSection) {
                linksSection.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    }
    
    // Add entrance animations
    const elements = document.querySelectorAll('.link-item, .team-member');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
            }
        });
    }, {
        threshold: 0.1
    });
    
    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
});

// Add click effects
document.addEventListener('click', function(e) {
    if (e.target.closest('.link-item')) {
        const linkItem = e.target.closest('.link-item');
        linkItem.style.transform = 'scale(0.98)';
        setTimeout(() => {
            linkItem.style.transform = '';
        }, 150);
    }
});

// Add parallax effect to background
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const background = document.querySelector('.container::before');
    if (background) {
        background.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});