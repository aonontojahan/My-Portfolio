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
        if (window.scrollY >= (sectionTop - 150)) {
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

const hamburger = document.getElementById('hamburger');
const navRight = document.querySelector('.nav-right');

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
            navRight?.classList.remove('mobile-active');
        }
    });
});

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navRight?.classList.toggle('mobile-active');
        // Optional: Toggle hamburger icon animation here
    });
}

// Modal Logic for All Sections
const modal = document.getElementById('about-modal');
const modalClose = document.querySelector('.modal-close');
const modalTitle = document.getElementById('modal-title');
const modalDesc = document.getElementById('modal-description');
const modalIcon = document.querySelector('.modal-body .modal-icon');
const modalProjects = document.getElementById('modal-projects');
const modalGithub = document.getElementById('modal-github');
const cards = document.querySelectorAll('.interactive-card');

const portfolioData = {
    // ABOUT SECTION
    fullstack: {
        title: "Full Stack Developer",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,
        description: "Bridging the gap between front-end aesthetics and back-end logic with high-performance integrations.",
        github: "https://github.com/aonontojahan",
        projects: [
            { name: "Smart Calculator", desc: "A smart calculator application providing advanced features with a clean UI.", link: "https://github.com/aonontojahan/Smart-Calculator", tech: ["PostgreSQL", "FastAPI", "HTML", "CSS", "JavaScript"] },
            { name: "Real Time Chat App", desc: "A real-time chat application utilizing WebSockets for instant messaging.", link: "https://github.com/aonontojahan/realtime-chat-app", tech: ["PostgreSQL", "FastAPI", "HTML", "CSS", "JavaScript"] }
        ]
    },
    engineer: {
        title: "Software Engineer",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/><line x1="12" y1="2" x2="12" y2="22"/></svg>`,
        description: "Solving complex technical challenges with clean, efficient, and scalable code following SOLID principles.",
        github: "https://github.com/aonontojahan",
        projects: [
            { name: "Resale Marketplace for Electronics Devices", desc: "A robust electronic device marketplace platform with real-time features and secure backend.", link: "https://github.com/aonontojahan/Resale-Marketplace-for-Electronics-Devices", tech: ["PostgreSQL", "FastAPI", "SQLAlchemy", "WebSockets", "HTML", "CSS", "JavaScript"] }
        ]
    },
    manager: {
        title: "Project Manager",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
        description: "Leading cross-functional teams to deliver high-impact digital solutions using Agile methodologies.",
        projects: [
            { name: "Event Management System", desc: "I manage software projects from planning to delivery. Focused on team coordination, timelines, and quality outcomes. Bridging the gap between technical execution and business goals.", link: "https://github.com/aonontojahan/Event-Management-System", tech: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"] },
            { name: "Resale Marketplace for Electronics", desc: "Managed the technical architecture and delivery of a real-time electronic marketplace, ensuring scalability and performance.", link: "https://github.com/aonontojahan/Resale-Marketplace-for-Electronics-Devices", tech: ["PostgreSQL", "FastAPI", "SQLAlchemy", "WebSockets", "HTML", "CSS", "JavaScript"] }
        ]
    },
    solver: {
        title: "Problem Solver",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`,
        description: "An analytical thinker who thrives on dissecting intricate technical challenges and competitive programming.",
        github: "https://github.com/aonontojahan",
        projects: [
            { name: "Competitive Programming Practice Hub", desc: "My approach and solution repository for learning and solving algorithmic challenges.", link: "https://github.com/aonontojahan/CP-Practice-Hub", tech: ["C++", "Python", "Algorithms", "Data Structures"] },
            { name: "Learn Python", desc: "Educational repository focused on mastering Python concepts.", link: "https://github.com/aonontojahan/Learn-Python", tech: ["Python", "Scripting", "OOP"] }
        ]
    },

    // BACKGROUND SECTION
    education: {
        title: "BSc in Computer Science",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>`,
        description: "Graduated with Honours from the University of Engineering and Technology. Specialized in AI and Software Engineering.",
        projects: [
            { name: "Thesis: Neural Nets", desc: "Research on optimizing convolutional layers for edge devices.", tech: ["Python", "TensorFlow", "Keras"] }
        ]
    },
    career_current: {
        title: "Software Engineer",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>`,
        description: "Currently at Innovative Solutions Inc. delivering high-quality, robust production code for global clients.",
        github: "https://github.com/aonontojahan",
        projects: [
            { name: "Prudential Integration", desc: "Seamless legacy data migration for a major insurance firm.", tech: ["Java", "Spring Boot", "SQL"] }
        ]
    },
    career_early: {
        title: "Junior Web Developer",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
        description: "Early career growth at Creative Pulse Agency, focused on responsive design and PHP-based CMS development.",
        github: "https://github.com/aonontojahan",
        projects: [
            { name: "Marketing Site v2", desc: "Complete redesign of the agency's primary client-facing platform.", tech: ["PHP", "WordPress", "jQuery"] }
        ]
    },

    // EXPERIENCE SECTION
    project_one: {
        title: "Productivity Organizer",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>`,
        description: "A specialized daily routine tracker that helps users optimize their productivity via data visualization.",
        github: "https://github.com/aonontojahan/productivity-app",
        projects: [
            { name: "Task Engine", desc: "Sub-millisecond state updates for intensive user interaction.", tech: ["Redux", "Worker Threads"] }
        ]
    },
    project_two: {
        title: "E-Commerce Platform",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>`,
        description: "Modern, secure marketplace with real-time inventory management and multi-currency Stripe support.",
        github: "https://github.com/aonontojahan/ecommerce-site",
        projects: [
            { name: "Checkout Flow", desc: "Highly secure, PCI-compliant payment processing system.", tech: ["Stripe API", "Next.js", "Supabase"] }
        ]
    },
    project_three: {
        title: "Security Audit Flow",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
        description: "Implemented an automated security audit pipeline that protected over 50k users from session hijacking.",
        github: "https://github.com/aonontojahan",
        projects: [
            { name: "Vulnerability Scanner", desc: "Automated pattern matching for outdated dependencies.", tech: ["Python", "OWASP ZAP"] }
        ]
    },

    // EXPERTISE SECTION
    exp_frontend: {
        title: "Frontend Mastery",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>`,
        description: "Building responsive, accessible, and performant user interfaces with modern tech stacks.",
        github: "https://github.com/aonontojahan",
        projects: [
            { name: "React Components", desc: "Library of high-performance UI elements for internal use.", tech: ["React", "Storybook", "Tailwind"] }
        ]
    },
    exp_backend: {
        title: "Backend Scalability",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>`,
        description: "Architecting secure and efficient server-side infrastructures that scale with user demand.",
        github: "https://github.com/aonontojahan",
        projects: [
            { name: "Microservices API", desc: "Modular backend handling millions of requests per day.", tech: ["Node.js", "Express", "RabbitMQ"] }
        ]
    },
    exp_devops: {
        title: "Cloud & DevOps",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>`,
        description: "Optimizing deployment pipelines and managing cloud infrastructure for reliability.",
        github: "https://github.com/aonontojahan",
        projects: [
            { name: "CI/CD Pipeline", desc: "Automated testing and deployment flow using GitHub Actions.", tech: ["Docker", "AWS", "GitHub Actions"] }
        ]
    },

    // SERVICES SECTION
    service_web: {
        title: "Web Development",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,
        description: "I provide end-to-end web solutions, from initial wireframing to full production deployment.",
        projects: [
            { name: "SaaS Platforms", desc: "Building subscription-based software with robust user management.", tech: ["Next.js", "Stripe", "PostgreSQL"] }
        ]
    },
    service_api: {
        title: "API & Integration",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/><line x1="12" y1="2" x2="12" y2="22"/></svg>`,
        description: "Seamlessly connecting your platforms with third-party software and complex backend services.",
        projects: [
            { name: "Third-party Sync", desc: "Integrating CRMs, Payment Gateways, and ERPs into existing apps.", tech: ["REST", "GraphQL", "OAuth"] }
        ]
    },
    service_consulting: {
        title: "Tech Consulting",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
        description: "Helping teams choose the right tech stack and architecture for their specific business needs.",
        projects: [
            { name: "Dev Team Mentorship", desc: "Upskilling junior engineers in modern JavaScript practices.", tech: ["Code Review", "Architecture Planning"] }
        ]
    }
};

cards.forEach(card => {
    card.addEventListener('click', () => {
        const role = card.getAttribute('data-role');
        const data = portfolioData[role];
        
        if (data) {
            modalTitle.textContent = data.title;
            modalDesc.textContent = data.description;
            modalIcon.innerHTML = data.icon;
            
            // Handle GitHub visibility
            if (data.github) {
                modalGithub.href = data.github;
                modalGithub.style.display = 'flex';
            } else {
                modalGithub.style.display = 'none';
            }
            
            // Clear and render projects
            modalProjects.innerHTML = '';
            data.projects.forEach(project => {
                const projectEl = document.createElement('div');
                projectEl.className = 'project-item';
                
                const titleHtml = project.link 
                    ? `<a href="${project.link}" target="_blank" style="color: var(--text-white); text-decoration: none; transition: color 0.2s;" onmouseover="this.style.color='var(--accent-color)'" onmouseout="this.style.color='var(--text-white)'">${project.name} <svg style="width:14px;height:14px;margin-left:4px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg></a>`
                    : project.name;
                    
                projectEl.innerHTML = `
                    <h4>${titleHtml}</h4>
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
