/* ============================================
   LUXE STRANDS - Premium Salon JavaScript
   ============================================ */

// === SERVICES DATA ===
const services = [
    // Haircuts
    { id: 1, name: "Classic Men's Cut", category: "haircut", price: "₹800 - ₹1,200", duration: "45 min", desc: "Precision-cut with clippers & scissors for a timeless, sharp look", img: "http://static.photos/people/640x360/501" },
    { id: 2, name: "Premium Women's Cut", category: "haircut", price: "₹1,500 - ₹3,000", duration: "60 min", desc: "Designer cut tailored to your face shape, lifestyle & personality", img: "http://static.photos/people/640x360/502" },
    { id: 3, name: "Fade + Design", category: "haircut", price: "₹1,000 - ₹1,800", duration: "50 min", desc: "Sharp fades with custom artistic designs — bold & unique", img: "http://static.photos/people/640x360/503" },
    { id: 4, name: "Layered Cut & Blowout", category: "haircut", price: "₹2,000 - ₹3,500", duration: "75 min", desc: "Professional layers with a volumizing blowout finish", img: "http://static.photos/people/640x360/504" },

    // Beard Grooming
    { id: 5, name: "Royal Beard Sculpt", category: "beard", price: "₹700 - ₹1,200", duration: "30 min", desc: "Hot towel treatment, precision shaping & premium oil finish", img: "http://static.photos/people/640x360/505" },
    { id: 6, name: "Full Beard Restoration", category: "beard", price: "₹1,500 - ₹2,500", duration: "45 min", desc: "Complete beard revival — trim, condition, dye & style", img: "http://static.photos/people/640x360/506" },
    { id: 7, name: "Hot Towel Shave", category: "beard", price: "₹900 - ₹1,500", duration: "35 min", desc: "Traditional straight-razor shave with luxury hot towel ritual", img: "http://static.photos/people/640x360/507" },

    // Hair Patch / Hair Systems
    { id: 8, name: "Swiss Lace Hair System", category: "hairpatch", price: "₹15,000 - ₹35,000", duration: "3-4 hrs", desc: "Ultra-invisible hairline, undetectable even up close. Premium Swiss lace base", img: "http://static.photos/people/640x360/508" },
    { id: 9, name: "Ultra-Thin Skin System", category: "hairpatch", price: "₹12,000 - ₹28,000", duration: "2-3 hrs", desc: "0.03mm bio-skin base for natural scalp appearance & comfort", img: "http://static.photos/people/640x360/509" },
    { id: 10, name: "Mono-Filament Patch", category: "hairpatch", price: "₹18,000 - ₹40,000", duration: "3-4 hrs", desc: "Hand-tied on monofilament — moves naturally, ultimate durability", img: "http://static.photos/people/640x360/510" },
    { id: 11, name: "Full Cap Hair System", category: "hairpatch", price: "₹25,000 - ₹55,000", duration: "4-5 hrs", desc: "Complete coverage system for total baldness — natural & breathable", img: "http://static.photos/people/640x360/511" },
    { id: 12, name: "Hair Patch Maintenance", category: "hairpatch", price: "₹2,500 - ₹5,000", duration: "1-2 hrs", desc: "Reattachment, cleaning & styling — keep your patch looking brand new", img: "http://static.photos/people/640x360/512" },

    // Spa Treatments
    { id: 13, name: "Deep Conditioning Spa", category: "spa", price: "₹2,000 - ₹4,000", duration: "60 min", desc: "Intensive moisture therapy for dry, damaged hair — silky smooth results", img: "http://static.photos/people/640x360/513" },
    { id: 14, name: "Scalp Detox Treatment", category: "spa", price: "₹1,500 - ₹3,000", duration: "45 min", desc: "Purifying treatment — removes buildup, stimulates growth, revitalizes scalp", img: "http://static.photos/people/640x360/514" },
    { id: 15, name: "Hot Oil Head Massage", category: "spa", price: "₹1,200 - ₹2,500", duration: "40 min", desc: "Luxury warm oil massage — relieves stress & nourishes from root to tip", img: "http://static.photos/people/640x360/515" },

    // Hair Color
    { id: 16, name: "Global Hair Color", category: "color", price: "₹3,000 - ₹6,000", duration: "90 min", desc: "Full head color with premium ammonia-free formulas — vibrant & safe", img: "http://static.photos/people/640x360/516" },
    { id: 17, name: "Balayage / Ombré", category: "color", price: "₹5,000 - ₹10,000", duration: "120 min", desc: "Hand-painted highlights for a sun-kissed, graduated color effect", img: "http://static.photos/people/640x360/517" },
    { id: 18, name: "Grey Coverage Express", category: "color", price: "₹2,000 - ₹4,000", duration: "60 min", desc: "Quick grey blending for a youthful, natural appearance", img: "http://static.photos/people/640x360/518" },

    // Treatments (Keratin, Extensions)
    { id: 19, name: "Keratin Smoothing", category: "treatment", price: "₹6,000 - ₹12,000", duration: "3 hrs", desc: "Professional keratin treatment — frizz-free for 3-4 months", img: "http://static.photos/people/640x360/519" },
    { id: 20, name: "Hair Extensions", category: "treatment", price: "₹8,000 - ₹20,000", duration: "3-4 hrs", desc: "Premium clip-in, tape-in or fusion extensions for instant length & volume", img: "http://static.photos/people/640x360/520" },
    { id: 21, name: "PRP Hair Therapy", category: "treatment", price: "₹5,000 - ₹8,000", duration: "60 min", desc: "Platelet-rich plasma therapy to stimulate natural hair regrowth", img: "http://static.photos/people/640x360/521" },
    { id: 22, name: "Bond Repair Treatment", category: "treatment", price: "₹3,000 - ₹5,000", duration: "75 min", desc: "Deep molecular repair for chemically damaged hair — restores strength", img: "http://static.photos/people/640x360/522" },

    // Facials
    { id: 23, name: "Men's Signature Facial", category: "facial", price: "₹2,500 - ₹4,000", duration: "60 min", desc: "Deep cleanse, exfoliate & hydrate — designed for men's thicker skin", img: "http://static.photos/people/640x360/523" },
    { id: 24, name: "Luxury Gold Facial", category: "facial", price: "₹4,000 - ₹7,000", duration: "75 min", desc: "24K gold leaf treatment — luminous, firm & radiant skin", img: "http://static.photos/people/640x360/524" },
    { id: 25, name: "Charcoal Detox Facial", category: "facial", price: "₹2,000 - ₹3,500", duration: "50 min", desc: "Activated charcoal deep purification — clear pores & refreshed skin", img: "http://static.photos/people/640x360/525" },
];

// Category label mapping
const categoryLabels = {
    haircut: 'Haircut',
    beard: 'Beard Grooming',
    hairpatch: 'Hair Patch',
    spa: 'Spa Treatment',
    color: 'Hair Color',
    treatment: 'Treatment',
    facial: 'Facial',
};

// Service options for booking (by category)
const servicesByCategory = {
    haircut: ['Classic Men\'s Cut', 'Premium Women\'s Cut', 'Fade + Design', 'Layered Cut & Blowout'],
    beard: ['Royal Beard Sculpt', 'Full Beard Restoration', 'Hot Towel Shave'],
    hairpatch: ['Swiss Lace Hair System', 'Ultra-Thin Skin System', 'Mono-Filament Patch', 'Full Cap Hair System', 'Hair Patch Maintenance'],
    spa: ['Deep Conditioning Spa', 'Scalp Detox Treatment', 'Hot Oil Head Massage'],
    color: ['Global Hair Color', 'Balayage / Ombré', 'Grey Coverage Express'],
    treatment: ['Keratin Smoothing', 'Hair Extensions', 'PRP Hair Therapy', 'Bond Repair Treatment'],
    facial: ['Men\'s Signature Facial', 'Luxury Gold Facial', 'Charcoal Detox Facial'],
};


// === DOM READY ===
document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    // Initialize everything
    initPreloader();
    initTheme();
    initNavigation();
    initParticles();
    initServices();
    initScrollAnimations();
    initBookingForm();
    initContactForm();
    initNewsletterForm();
    initBackToTop();
    initHeroParallax();
    initTiltCards();

    // Set minimum date for booking
    const dateInput = document.getElementById('bookingDate');
    if (dateInput) {
        const today = new Date().toISOString().split('T')[0];
        dateInput.setAttribute('min', today);
        dateInput.value = today;
    }
});


// === PRELOADER ===
function initPreloader() {
    const preloader = document.getElementById('preloader');
    if (!preloader) return;

    window.addEventListener('load', () => {
        setTimeout(() => {
            preloader.classList.add('hidden');
            document.body.style.overflowY = 'auto';
        }, 1500);
    });

    // Fallback: hide preloader after 4s regardless
    setTimeout(() => {
        preloader.classList.add('hidden');
        document.body.style.overflowY = 'auto';
    }, 4000);
}


// === THEME (Dark/Light) ===
function initTheme() {
    const toggle = document.getElementById('themeToggle');
    const html = document.documentElement;

    // Load saved preference
    const savedTheme = localStorage.getItem('luxe-theme');
    if (savedTheme === 'light') {
        html.classList.remove('dark');
        html.classList.add('light-mode');
    } else {
        html.classList.add('dark');
        html.classList.remove('light-mode');
    }

    if (toggle) {
        toggle.addEventListener('click', () => {
            html.classList.toggle('dark');
            const isDark = html.classList.contains('dark');

            if (!isDark) {
                html.classList.add('light-mode');
            } else {
                html.classList.remove('light-mode');
            }

            localStorage.setItem('luxe-theme', isDark ? 'dark' : 'light');

            // Reinitialize particles with new colors
            initParticles();
        });
    }
}


// === NAVIGATION ===
function initNavigation() {
    const navbar = document.getElementById('navbar');
    const menuToggle = document.getElementById('menuToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    let lastScroll = 0;

    // Scroll effects
    window.addEventListener('scroll', () => {
        const currentScroll = window.scrollY;

        // Add scrolled class
        if (currentScroll > 50) {
            navbar.classList.add('nav-scrolled');
        } else {
            navbar.classList.remove('nav-scrolled');
        }

        // Auto-hide on scroll down
        if (currentScroll > lastScroll && currentScroll > 200) {
            navbar.style.transform = 'translateY(-120%)';
        } else {
            navbar.style.transform = 'translateY(0)';
        }
        lastScroll = currentScroll;

        // Active section tracking
        updateActiveNav();
    });

    // Mobile menu toggle
    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', () => {
            const isOpen = !mobileMenu.classList.contains('hidden');

            if (isOpen) {
                mobileMenu.classList.add('hidden');
                menuToggle.setAttribute('aria-expanded', 'false');
                menuToggle.querySelector('.hamburger-icon').classList.remove('hidden');
                menuToggle.querySelector('.close-icon').classList.add('hidden');
            } else {
                mobileMenu.classList.remove('hidden');
                menuToggle.setAttribute('aria-expanded', 'true');
                menuToggle.querySelector('.hamburger-icon').classList.add('hidden');
                menuToggle.querySelector('.close-icon').classList.remove('hidden');
            }
        });

        // Close on link click
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                menuToggle.setAttribute('aria-expanded', 'false');
                menuToggle.querySelector('.hamburger-icon').classList.remove('hidden');
                menuToggle.querySelector('.close-icon').classList.add('hidden');
            });
        });
    }
}

function updateActiveNav() {
    const sections = ['hero', 'testimonials', 'services', 'about', 'booking', 'contact'];
    const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');

    let currentSection = 'hero';
    sections.forEach(id => {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 200) {
            currentSection = id;
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.dataset.section === currentSection) {
            link.classList.add('active');
        }
    });
}


// === PARTICLE EFFECTS ===
function initParticles() {
    const canvas = document.getElementById('particleCanvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let particles = [];
    let animFrame;

    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    const isDark = document.documentElement.classList.contains('dark');

    class Particle {
        constructor() {
            this.reset();
        }
        reset() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 2 + 0.5;
            this.speedX = (Math.random() - 0.5) * 0.5;
            this.speedY = (Math.random() - 0.5) * 0.5;
            this.opacity = Math.random() * 0.5 + 0.1;
            this.color = isDark
                ? `rgba(201, 164, 97, ${this.opacity})`
                : `rgba(160, 120, 48, ${this.opacity * 0.5})`;
        }
        update() {
            this.x += this.speedX;
            this.y += this.speedY;

            if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
            if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
        }
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.fill();
        }
    }

    // Create particles
    const count = Math.min(60, Math.floor(window.innerWidth / 25));
    particles = [];
    for (let i = 0; i < count; i++) {
        particles.push(new Particle());
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Draw connections
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < 150) {
                    const alpha = (1 - dist / 150) * 0.15;
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.strokeStyle = isDark
                        ? `rgba(201, 164, 97, ${alpha})`
                        : `rgba(160, 120, 48, ${alpha * 0.5})`;
                    ctx.lineWidth = 0.5;
                    ctx.stroke();
                }
            }
        }

        particles.forEach(p => {
            p.update();
            p.draw();
        });

        animFrame = requestAnimationFrame(animate);
    }

    // Cancel previous animation
    if (window._particleAnim) cancelAnimationFrame(window._particleAnim);
    window._particleAnim = animFrame;
    animate();
}


// === SERVICES GRID ===
function initServices() {
    const grid = document.getElementById('servicesGrid');
    if (!grid) return;

    function renderServices(filter = 'all') {
        const filtered = filter === 'all' ? services : services.filter(s => s.category === filter);
        
        grid.innerHTML = filtered.map((s, i) => `
            <div class="service-card glass-card rounded-2xl overflow-hidden" data-category="${s.category}" style="animation-delay: ${i * 0.06}s">
                <div class="relative overflow-hidden h-48">
                    <img src="${s.img}" alt="${s.name}" class="service-img w-full h-full object-cover" loading="lazy">
                    <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <div class="absolute top-3 left-3">
                        <span class="badge-${s.category} px-2.5 py-1 rounded-lg text-xs font-semibold">${categoryLabels[s.category]}</span>
                    </div>
                    <div class="service-overlay absolute inset-0 bg-black/20 flex items-center justify-center">
                        <button class="book-btn btn-primary text-sm px-5 py-2.5" onclick="bookService('${s.name}')">
                            <i data-lucide="calendar-plus" class="w-4 h-4"></i>
                            <span>Book Now</span>
                        </button>
                    </div>
                </div>
                <div class="p-5">
                    <h3 class="dark:text-white text-luxe-black font-semibold text-lg mb-1">${s.name}</h3>
                    <p class="dark:text-white/50 text-luxe-black/50 text-sm mb-3 line-clamp-2">${s.desc}</p>
                    <div class="flex items-center justify-between">
                        <span class="text-gold-400 font-bold text-lg">${s.price}</span>
                        <span class="dark:text-white/30 text-luxe-black/30 text-sm flex items-center gap-1">
                            <i data-lucide="clock" class="w-3.5 h-3.5"></i>
                            ${s.duration}
                        </span>
                    </div>
                </div>
            </div>
        `).join('');

        // Reinit Lucide for new icons
        if (typeof lucide !== 'undefined') lucide.createIcons();
    }

    renderServices();

    // Filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filter-btn').forEach(b => {
                b.classList.remove('active');
                b.setAttribute('aria-selected', 'false');
            });
            btn.classList.add('active');
            btn.setAttribute('aria-selected', 'true');

            const filter = btn.dataset.filter;
            renderServices(filter);
        });
    });
}

// Book a specific service
function bookService(serviceName) {
    const bookingSection = document.getElementById('booking');
    bookingSection.scrollIntoView({ behavior: 'smooth' });

    // Pre-fill service in form
    setTimeout(() => {
        const categorySelect = document.getElementById('serviceCategory');
        const serviceSelect = document.getElementById('serviceSelect');

        // Find matching category
        for (const [cat, svcs] of Object.entries(servicesByCategory)) {
            if (svcs.includes(serviceName)) {
                categorySelect.value = cat;
                updateServiceOptions();

                setTimeout(() => {
                    serviceSelect.value = serviceName;
                }, 100);
                break;
            }
        }
    }, 800);
}


// === BOOKING FORM LOGIC ===
let currentStep = 1;

function initBookingForm() {
    const form = document.getElementById('bookingForm');
    const categorySelect = document.getElementById('serviceCategory');

    if (categorySelect) {
        categorySelect.addEventListener('change', updateServiceOptions);
    }

    if (form) {
        form.addEventListener('submit', handleBookingSubmit);
    }
}

function updateServiceOptions() {
    const category = document.getElementById('serviceCategory').value;
    const serviceSelect = document.getElementById('serviceSelect');
    
    serviceSelect.innerHTML = '<option value="">Choose a service</option>';

    if (category && servicesByCategory[category]) {
        servicesByCategory[category].forEach(svc => {
            const opt = document.createElement('option');
            opt.value = svc;
            opt.textContent = svc;
            serviceSelect.appendChild(opt);
        });
    }
}

function nextStep(step) {
    // Validation for step 1
    if (step === 2 && currentStep === 1) {
        const cat = document.getElementById('serviceCategory').value;
        const svc = document.getElementById('serviceSelect').value;
        const date = document.getElementById('bookingDate').value;
        const time = document.getElementById('bookingTime').value;

        if (!cat || !svc || !date || !time) {
            // Shake the first empty field
            const fields = [
                { el: document.getElementById('serviceCategory'), val: cat },
                { el: document.getElementById('serviceSelect'), val: svc },
                { el: document.getElementById('bookingDate'), val: date },
                { el: document.getElementById('bookingTime'), val: time }
            ];
            const emptyField = fields.find(f => !f.val);
            if (emptyField) {
                emptyField.el.classList.add('border-red-400');
                emptyField.el.focus();
                setTimeout(() => emptyField.el.classList.remove('border-red-400'), 2000);
            }
            return;
        }
    }

    // Validation for step 2
    if (step === 3 && currentStep === 2) {
        const name = document.getElementById('clientName').value.trim();
        const phone = document.getElementById('clientPhone').value.trim();
        const email = document.getElementById('clientEmail').value.trim();

        let valid = true;

        if (!name) {
            document.getElementById('nameError').classList.remove('hidden');
            valid = false;
        } else {
            document.getElementById('nameError').classList.add('hidden');
        }

        if (!phone || phone.length < 8) {
            document.getElementById('phoneError').classList.remove('hidden');
            valid = false;
        } else {
            document.getElementById('phoneError').classList.add('hidden');
        }

        if (!email || !email.includes('@')) {
            document.getElementById('emailError').classList.remove('hidden');
            valid = false;
        } else {
            document.getElementById('emailError').classList.add('hidden');
        }

        if (!valid) return;

        // Populate confirmation summary
        populateBookingSummary();
    }

    currentStep = step;

    // Show/hide steps
    document.querySelectorAll('.booking-step').forEach(el => el.classList.add('hidden'));
    document.getElementById(`bookingStep${step}`).classList.remove('hidden');

    // Update progress indicators
    updateStepIndicators(step);
}

function updateStepIndicators(step) {
    for (let i = 1; i <= 3; i++) {
        const indicator = document.getElementById(`step${i}Indicator`);
        const circle = indicator.querySelector('.step-circle');
        const label = indicator.querySelector('span');

        if (i < step) {
            circle.classList.add('active');
            circle.innerHTML = '<i data-lucide="check" class="w-4 h-4"></i>';
            if (label) label.className = 'dark:text-white text-luxe-black text-sm font-medium hidden sm:inline';
        } else if (i === step) {
            circle.classList.add('active');
            circle.textContent = i;
            if (label) label.className = 'dark:text-white text-luxe-black text-sm font-medium hidden sm:inline';
        } else {
            circle.classList.remove('active');
            circle.textContent = i;
            if (label) label.className = 'dark:text-white/40 text-luxe-black/40 text-sm font-medium hidden sm:inline';
        }
    }

    // Update progress bars
    document.getElementById('step1Progress').style.width = step >= 2 ? '100%' : step === 1 ? '50%' : '0%';
    document.getElementById('step2Progress').style.width = step >= 3 ? '100%' : step === 2 ? '50%' : '0%';

    // Reinit icons
    if (typeof lucide !== 'undefined') lucide.createIcons();
}

function populateBookingSummary() {
    const summary = document.getElementById('bookingSummary');
    const fields = {
        'Service': document.getElementById('serviceSelect').value,
        'Date': formatDate(document.getElementById('bookingDate').value),
        'Time': document.getElementById('bookingTime').value ? formatTime(document.getElementById('bookingTime').value) : '',
        'Name': document.getElementById('clientName').value,
        'Phone': document.getElementById('clientPhone').value,
        'Email': document.getElementById('clientEmail').value,
        'Notes': document.getElementById('clientNotes').value || 'None',
    };

    summary.innerHTML = Object.entries(fields).map(([key, val]) => `
        <div class="flex items-center justify-between py-3 border-b dark:border-luxe-border border-gray-100 last:border-0">
            <span class="dark:text-white/50 text-luxe-black/50 text-sm">${key}</span>
            <span class="dark:text-white text-luxe-black font-medium text-sm text-right">${val}</span>
        </div>
    `).join('');
}

function handleBookingSubmit(e) {
    e.preventDefault();
    
    // Show success
    document.getElementById('bookingStep3').classList.add('hidden');
    document.getElementById('bookingSuccess').classList.remove('hidden');

    if (typeof lucide !== 'undefined') lucide.createIcons();
}

function resetBooking() {
    currentStep = 1;
    document.getElementById('bookingForm').reset();
    document.getElementById('bookingSuccess').classList.add('hidden');
    document.getElementById('bookingStep1').classList.remove('hidden');
    updateStepIndicators(1);

    // Reset date
    const dateInput = document.getElementById('bookingDate');
    if (dateInput) {
        dateInput.value = new Date().toISOString().split('T')[0];
    }
}

function formatDate(dateStr) {
    if (!dateStr) return '';
    const d = new Date(dateStr);
    return d.toLocaleDateString('en-IN', { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' });
}

function formatTime(timeStr) {
    if (!timeStr) return '';
    const [h, m] = timeStr.split(':');
    const hour = parseInt(h);
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const displayHour = hour > 12 ? hour - 12 : hour === 0 ? 12 : hour;
    return `${displayHour}:${m} ${ampm}`;
}


// === CONTACT FORM ===
function initContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('contactName').value.trim();
        const email = document.getElementById('contactEmail').value.trim();
        const subject = document.getElementById('contactSubject').value;
        const message = document.getElementById('contactMessage').value.trim();

        if (!name || !email || !subject || !message) return;

        // Simulate submit
        form.classList.add('hidden');
        document.getElementById('contactSuccess').classList.remove('hidden');

        if (typeof lucide !== 'undefined') lucide.createIcons();

        // Reset after 5 seconds
        setTimeout(() => {
            form.reset();
            form.classList.remove('hidden');
            document.getElementById('contactSuccess').classList.add('hidden');
        }, 5000);
    });
}


// === NEWSLETTER ===
function initNewsletterForm() {
    const form = document.getElementById('newsletterForm');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('newsletterEmail').value.trim();
            if (!email || !email.includes('@')) return;

            form.classList.add('hidden');
            document.getElementById('newsletterSuccess').classList.remove('hidden');

            if (typeof lucide !== 'undefined') lucide.createIcons();
        });
    }
}

function openNewsletter() {
    document.getElementById('newsletterModal').classList.remove('hidden');
    document.body.style.overflowY = 'hidden';

    // Reset form
    const form = document.getElementById('newsletterForm');
    const success = document.getElementById('newsletterSuccess');
    if (form) form.classList.remove('hidden');
    if (success) success.classList.add('hidden');
    if (form) form.reset();
}

function closeNewsletter() {
    document.getElementById('newsletterModal').classList.add('hidden');
    document.body.style.overflowY = 'auto';
}


// === BACK TO TOP ===
function initBackToTop() {
    const btn = document.getElementById('backToTop');
    if (!btn) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 600) {
            btn.classList.add('visible');
        } else {
            btn.classList.remove('visible');
        }
    });

    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}


// === SCROLL ANIMATIONS ===
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    document.querySelectorAll('[data-animate]').forEach(el => {
        observer.observe(el);
    });
}


// === HERO PARALLAX ===
function initHeroParallax() {
    const hero = document.getElementById('hero');
    if (!hero) return;

    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        const heroContent = hero.querySelector('.relative.z-10');
        if (heroContent && scrolled < window.innerHeight) {
            heroContent.style.transform = `translateY(${scrolled * 0.2}px)`;
            heroContent.style.opacity = 1 - (scrolled / (window.innerHeight * 1.2));
        }
    });
}


// === 3D TILT CARDS ===
function initTiltCards() {
    document.querySelectorAll('[data-tilt]').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = (y - centerY) / centerY * -5;
            const rotateY = (x - centerX) / centerX * 5;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
        });
    });
}


// === CAROUSEL ===
function scrollCarousel(direction) {
    const carousel = document.getElementById('testimonialCarousel');
    if (!carousel) return;

    const cardWidth = carousel.querySelector('div')?.offsetWidth || 380;
    const scrollAmount = (cardWidth + 24) * direction; // gap = 24px

    carousel.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
    });
}


// === VIDEO PLAY (Placeholder) ===
function playVideo(element) {
    // In real implementation, replace with YouTube/Instagram embed
    const placeholder = document.createElement('div');
    placeholder.className = 'absolute inset-0 flex items-center justify-center bg-luxe-black/90 rounded-xl';
    placeholder.innerHTML = `
        <div class="text-center">
            <i data-lucide="film" class="w-10 h-10 text-gold-400 mx-auto mb-2"></i>
            <p class="text-white font-semibold">Video Player</p>
            <p class="text-white/40 text-sm">Embed URL would load here</p>
        </div>
    `;

    element.parentElement.appendChild(placeholder);

    if (typeof lucide !== 'undefined') lucide.createIcons();
}


// === LINE CLAMP UTILITY ===
// Add line-clamp-2 utility since Tailwind might not include it by default
const style = document.createElement('style');
style.textContent = `.line-clamp-2{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}`;
document.head.appendChild(style);


// === KEYBOARD ACCESSIBILITY ===
document.addEventListener('keydown', (e) => {
    // Close modals on Escape
    if (e.key === 'Escape') {
        closeNewsletter();

        // Close mobile menu
        const mobileMenu = document.getElementById('mobileMenu');
        const menuToggle = document.getElementById('menuToggle');
        if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.add('hidden');
            menuToggle.setAttribute('aria-expanded', 'false');
            menuToggle.querySelector('.hamburger-icon').classList.remove('hidden');
            menuToggle.querySelector('.close-icon').classList.add('hidden');
        }
    }
});