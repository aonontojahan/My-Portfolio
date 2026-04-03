// Navbar Scroll Effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Scroll Reveal Animation (Intersection Observer)
const revealElements = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.1 });

revealElements.forEach(el => revealObserver.observe(el));

// Active Section Highlighting
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - 150)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(a => {
        a.classList.remove('active');
        if (a.getAttribute('href').includes(current)) {
            a.classList.add('active');
        }
    });
});

// Smooth Scrolling for all internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
            // Close mobile menu after clicking a link
            navRight.classList.remove('mobile-active');
        }
    });
});

const hamburger = document.getElementById('hamburger');
const navRight = document.querySelector('.nav-right');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navRight.classList.toggle('mobile-active');
        // Optional: Toggle hamburger icon animation here
    });
}

// Modal Logic for About Section
const modal = document.getElementById('about-modal');
const modalClose = document.querySelector('.modal-close');
const modalTitle = document.getElementById('modal-title');
const modalDesc = document.getElementById('modal-description');
const modalIcon = document.querySelector('.modal-body .modal-icon');
const modalProjects = document.getElementById('modal-projects');
const cards = document.querySelectorAll('.about-card');

const roleData = {
    fullstack: {
        title: "Full Stack Developer",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,
        description: "I specialize in bridging the gap between front-end aesthetics and back-end logic, focusing on end-to-end performance and seamless API integrations.",
        projects: [
            { name: "E-Commerce Platform", desc: "A full-featured online store with Stripe integration and dynamic inventory management.", tech: ["React", "Node.js", "Stripe", "MongoDB"] },
            { name: "Collaborative Whiteboard", desc: "Real-time shared workspace for remote teams using WebSockets for low-latency updates.", tech: ["Socket.io", "React", "Express"] }
        ]
    },
    engineer: {
        title: "Software Engineer",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/><line x1="12" y1="2" x2="12" y2="22"/></svg>`,
        description: "Focused on solving complex technical challenges with clean, efficient, and scalable code following advanced software design patterns.",
        projects: [
            { name: "Distributed Logging System", desc: "Highly available log aggregator with structured storage and optimized search capabilities.", tech: ["Go", "Kafka", "Elasticsearch"] },
            { name: "API Gateway Proxy", desc: "High-performance middleware handling centralized authentication and intelligent rate limiting.", tech: ["Python", "Redis", "Nginx"] }
        ]
    },
    manager: {
        title: "Project Manager",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
        description: "Skilled in leading cross-functional teams to deliver high-impact digital solutions using Agile and Scrum methodologies.",
        projects: [
            { name: "FinTech App Launch", desc: "Led a team of 15 to release a cross-platform mobile banking solution in record time.", tech: ["Agile", "Scrum", "Jira"] },
            { name: "System Modernization", desc: "Managed the full-scale migration of legacy data to a cloud-native AWS architecture.", tech: ["AWS", "Cloud Migration"] }
        ]
    },
    solver: {
        title: "Problem Solver",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`,
        description: "An analytical thinker who thrives on dissecting intricate technical bugs and optimizing systems for maximum performance.",
        projects: [
            { name: "Query Optimizer", desc: "Identified and resolved critical database bottlenecks, gaining 10x faster lookups.", tech: ["Database Admin", "Optimization"] },
            { name: "Auth Flow Security Audit", desc: "Fixed deep-rooted session vulnerability that protected over 50k users globally.", tech: ["Cybersecurity", "Ethics"] }
        ]
    }
};

cards.forEach(card => {
    card.addEventListener('click', () => {
        const role = card.getAttribute('data-role');
        const data = roleData[role];
        
        if (data) {
            modalTitle.textContent = data.title;
            modalDesc.textContent = data.description;
            modalIcon.innerHTML = data.icon;
            
            // Clear and render projects
            modalProjects.innerHTML = '';
            data.projects.forEach(project => {
                const projectEl = document.createElement('div');
                projectEl.className = 'project-item';
                projectEl.innerHTML = `
                    <h4>${project.name}</h4>
                    <p>${project.desc}</p>
                    <div class="project-tech">
                        ${project.tech.map(t => `<span class="project-tag">${t}</span>`).join('')}
                    </div>
                `;
                modalProjects.appendChild(projectEl);
            });

            modal.classList.add('active');
            document.body.style.overflow = 'hidden'; 
        }
    });
});

const closeModal = () => {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
};

if (modalClose) {
    modalClose.addEventListener('click', closeModal);
}

// Close on backdrop click
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

// Close on Escape key
window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
});
