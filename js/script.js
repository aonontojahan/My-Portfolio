// Navbar Scroll Effect + Hide scroll arrow after hero
const navbar = document.getElementById('navbar');
const scrollIndicator = document.querySelector('.scroll-indicator');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    // Hide the down arrow once user scrolls past the hero section
    const heroHeight = document.getElementById('hero')?.offsetHeight || window.innerHeight;
    if (scrollIndicator) {
        if (window.scrollY > heroHeight * 0.4) {
            scrollIndicator.classList.add('hidden');
        } else {
            scrollIndicator.classList.remove('hidden');
        }
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
const modalSectionTitle = document.getElementById('modal-section-subtitle');
const cards = document.querySelectorAll('.interactive-card');

const portfolioData = {
    // ABOUT SECTION
    fullstack: {
        title: "Full Stack Developer",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,
        description: "Bridging the gap between front-end aesthetics and back-end logic with high-performance integrations.",
        github: "https://github.com/aonontojahan",
        sectionTitle: "Full-Stack Portfolio",
        projects: [
            { name: "Smart Calculator", desc: "A sophisticated calculator with advanced functions and a modern, high-performance UI.", link: "https://github.com/aonontojahan/Smart-Calculator", tech: ["PostgreSQL", "FastAPI", "HTML", "CSS", "JavaScript"] },
            { name: "Real-Time Chat App", desc: "A responsive instant messaging system utilizing WebSockets for zero-latency communication.", link: "https://github.com/aonontojahan/realtime-chat-app", tech: ["PostgreSQL", "FastAPI", "WebSockets", "JavaScript"] }
        ]
    },
    engineer: {
        title: "Software Engineer",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/><line x1="12" y1="2" x2="12" y2="22"/></svg>`,
        description: "Solving complex technical challenges with clean, efficient, and scalable code following SOLID principles.",
        github: "https://github.com/aonontojahan",
        sectionTitle: "Engineering Focus",
        projects: [
            { name: "Resale Electronics Marketplace", desc: "A robust platform for device trading featuring secure auth and real-time backend logic.", link: "https://github.com/aonontojahan/Resale-Marketplace-for-Electronics-Devices", tech: ["PostgreSQL", "FastAPI", "SQLAlchemy", "WebSockets"] }
        ]
    },
    manager: {
        title: "Project Manager",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
        description: "Leading cross-functional teams to deliver high-impact digital solutions using Agile methodologies.",
        sectionTitle: "Management Experience",
        projects: [
            { name: "Event Management System", desc: "Strategic orchestration of project lifecycles, team coordination, and quality benchmarks.", link: "https://github.com/aonontojahan/Event-Management-System", tech: ["PHP", "MySQL", "Agile", "Team Lead"] },
            { name: "Marketplace Delivery", desc: "Managed technical architecture and sprint cycles for a real-time electronic marketplace.", link: "https://github.com/aonontojahan/Resale-Marketplace-for-Electronics-Devices", tech: ["Architecture", "Strategy", "Agile"] }
        ]
    },
    solver: {
        title: "Problem Solver",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`,
        description: "An analytical thinker who thrives on dissecting intricate technical challenges and competitive programming.",
        github: "https://github.com/aonontojahan",
        sectionTitle: "Algorithmic Focus",
        projects: [
            { name: "Competitive Programming Hub", desc: "A curated repository of advanced algorithmic solutions and data structure implementations.", link: "https://github.com/aonontojahan/CP-Practice-Hub", tech: ["C++", "Python", "Algorithms", "Optimization"] },
            { name: "Code Education", desc: "Educational repository focused on mastering Python concepts and OOP principles.", link: "https://github.com/aonontojahan/Learn-Python", tech: ["Python", "Scripting", "OOP"] }
        ]
    },

    // BACKGROUND SECTION
    education: {
        title: "BSc in Computer Science and Engineering",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>`,
        description: "IUBAT - International University of Business Agriculture and Technology. CGPA: 3.49.",
        sectionTitle: "Key Coursework & Thesis",
        projects: [
            { name: "Core Coursework", desc: "C, C++, Java, C#, Compiler Design, Networking, Software Engineering, System Design, Theory of Computation, Data Structures, DBMS, Computer Architecture, MIS, Programming Logic Structure.", tech: [] },
            { name: "Thesis", desc: "Fusion-based Brain Tumor classification using Efficient Net-v2 and Swin Transformer: A deep learning approach. Achieved 96.5% accuracy.", tech: ["Deep Learning", "EfficientNet-v2", "Swin Transformer", "Python"] }
        ]
    },
    hsc: {
        title: "Higher Secondary Certificate (HSC)",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>`,
        description: "Collectorate School and College, Rangpur in Science group. GPA: 5.00 (Session 2019).",
        sectionTitle: "Academic Highlights",
        projects: [
            { name: "Science Track", desc: "Completed coursework focusing on Physics, Chemistry, Higher Mathematics, and Biology.", tech: [] }
        ]
    },
    ssc: {
        title: "Secondary School Certificate (SSC)",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>`,
        description: "Bhendabari M. L High School in Science group. GPA: 5.00 (Session 2017).",
        sectionTitle: "Foundational Education",
        projects: [
            { name: "Science Track", desc: "Built foundational knowledge in general sciences and analytical problem solving.", tech: [] }
        ]
    },

    // EXPERIENCE SECTION
    proj_calc: {
        title: "Smart Calculator",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,
        description: "Advanced calculator with clean UI.",
        github: "https://github.com/aonontojahan/Smart-Calculator",
        sectionTitle: "",
        projects: [
            { name: "Smart Calculator", desc: "Built with a modern frontend and a scalable API backend.", link: "https://github.com/aonontojahan/Smart-Calculator", tech: ["PostgreSQL", "FastAPI", "HTML", "CSS", "JavaScript"] }
        ]
    },
    proj_chat: {
        title: "Real Time Chat App",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`,
        description: "Instant messaging application utilizing WebSockets.",
        github: "https://github.com/aonontojahan/realtime-chat-app",
        sectionTitle: "",
        projects: [
            { name: "Chat Engine", desc: "Backend infrastructure for rapid message delivery using WebSockets.", link: "https://github.com/aonontojahan/realtime-chat-app", tech: ["PostgreSQL", "FastAPI", "HTML", "CSS", "JavaScript"] }
        ]
    },
    proj_marketplace: {
        title: "Resale Marketplace",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>`,
        description: "Electronic device marketplace platform using FastAPI and WebSockets.",
        github: "https://github.com/aonontojahan/Resale-Marketplace-for-Electronics-Devices",
        sectionTitle: "",
        projects: [
            { name: "Marketplace Core", desc: "Developed the core backend with secure authentication and WebSocket based trading logic.", link: "https://github.com/aonontojahan/Resale-Marketplace-for-Electronics-Devices", tech: ["PostgreSQL", "FastAPI", "SQLAlchemy", "WebSockets", "HTML", "CSS", "JavaScript"] }
        ]
    },
    proj_event: {
        title: "Event Management System",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>`,
        description: "System managing project lifecycles, team coordination, and business timelines.",
        github: "https://github.com/aonontojahan/Event-Management-System",
        sectionTitle: "",
        projects: [
            { name: "System Orchestration", desc: "Bridging the gap between technical execution and business goals.", link: "https://github.com/aonontojahan/Event-Management-System", tech: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"] }
        ]
    },
    proj_compiler: {
        title: "Young Programmer Compiler",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
        description: "A custom compiler written in Python capturing syntax trees and tokenization.",
        github: "https://github.com/aonontojahan/Young-Programmer-Compiler",
        sectionTitle: "",
        projects: [
            { name: "Python Compiler", desc: "Applying Python Tokenization and Abstract Syntax Tree extraction.", link: "https://github.com/aonontojahan/Young-Programmer-Compiler", tech: ["Python", "Tokenization", "Syntax Tree"] }
        ]
    },
    proj_bookshop: {
        title: "Bookshop Management System",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>`,
        description: "Full-stack backend integrating PostgreSQL, FastAPI, and an HTML API.",
        github: "https://github.com/aonontojahan/Bookshop-Management-System",
        sectionTitle: "",
        projects: [
            { name: "Bookshop API", desc: "Basic CRUD operations and includes a basic HTML + Bootstrap frontend integrated with the backend.", link: "https://github.com/aonontojahan/Bookshop-Management-System", tech: ["Python", "PostgreSQL", "FastAPI", "HTML", "Bootstrap"] }
        ]
    },
    proj_mslat: {
        title: "Mini System Monitoring & Log Analysis Toolkit",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>`,
        description: "Bash-orchestrated Linux system toolkit for health checks and log analysis.",
        github: "https://github.com/aonontojahan/Mini-System-Monitoring-Log-Analysis-Toolkit-MSLAT",
        sectionTitle: "",
        projects: [
            { name: "MSLAT", desc: "Scripts orchestrating setup, health checks, log collection, process monitoring, and report generation via master script (run_all.sh).", link: "https://github.com/aonontojahan/Mini-System-Monitoring-Log-Analysis-Toolkit-MSLAT", tech: ["Ubuntu/Linux", "Bash shell", "Terminal access"] }
        ]
    },

    // EXPERTISE SECTION
    exp_frontend: {
        title: "Frontend Mastery",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>`,
        description: "Building responsive, accessible, and performant user interfaces with modern tech stacks.",
        github: "https://github.com/aonontojahan",
        sectionTitle: "My Core Frontend Tools",
        contentHtml: `
            <div class="skills-container">
                <div class="skill-item"><i class="devicon-html5-plain colored"></i><p>HTML5</p></div>
                <div class="skill-item"><i class="devicon-css3-plain colored"></i><p>CSS3</p></div>
                <div class="skill-item"><i class="devicon-javascript-plain colored"></i><p>JavaScript</p></div>
                <div class="skill-item"><i class="devicon-react-original colored"></i><p>React</p></div>
                <div class="skill-item"><i class="devicon-nextjs-plain" style="color: var(--text-white);"></i><p>Next.js</p></div>
                <div class="skill-item"><i class="devicon-tailwindcss-original colored"></i><p>Tailwind</p></div>
            </div>
        `
    },
    exp_backend: {
        title: "Backend Scalability",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>`,
        description: "Architecting secure and efficient server-side infrastructures that scale with user demand.",
        github: "https://github.com/aonontojahan",
        sectionTitle: "My Core Backend Tools",
        contentHtml: `
            <div class="skills-container">
                <div class="skill-item"><i class="devicon-python-plain colored"></i><p>Python</p></div>
                <div class="skill-item"><i class="devicon-fastapi-plain colored"></i><p>FastAPI</p></div>
                <div class="skill-item"><i class="devicon-postgresql-plain colored"></i><p>PostgreSQL</p></div>
                <div class="skill-item"><i class="devicon-php-plain colored"></i><p>PHP</p></div>
                <div class="skill-item"><i class="devicon-mysql-plain colored"></i><p>MySQL</p></div>
                <div class="skill-item"><i class="devicon-sqlalchemy-plain" style="color: var(--text-white);"></i><p>Alchemy</p></div>
                <div class="skill-item"><div class="skill-box" style="background: #013243; color: white;">P</div><p>Pydantic</p></div>
            </div>
        `
    },
    exp_devops: {
        title: "Cloud & DevOps",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>`,
        description: "Optimizing deployment pipelines and managing cloud infrastructure for reliability.",
        github: "https://github.com/aonontojahan",
        sectionTitle: "My Core DevOps Tools",
        contentHtml: `
            <div class="skills-container">
                <div class="skill-item"><i class="devicon-docker-plain colored"></i><p>Docker</p></div>
                <div class="skill-item"><i class="devicon-kubernetes-plain colored"></i><p>Kubernetes</p></div>
                <div class="skill-item"><i class="devicon-amazonwebservices-plain-wordmark colored" style="color: var(--text-white);"></i><p>AWS</p></div>
            </div>
        `
    },
    exp_tools: {
        title: "Tools & Platform",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`,
        description: "Essential tools and platforms for streamlining development and collaboration.",
        github: "https://github.com/aonontojahan",
        sectionTitle: "My Core Tools",
        contentHtml: `
            <div class="skills-container">
                <div class="skill-item"><i class="devicon-git-plain colored"></i><p>Git</p></div>
                <div class="skill-item"><i class="devicon-githubactions-plain" style="color: var(--text-white);"></i><p>Actions</p></div>
                <div class="skill-item"><i class="devicon-vscode-plain colored"></i><p>VSCode</p></div>
                <div class="skill-item"><i class="devicon-figma-plain colored"></i><p>Figma</p></div>
                <div class="skill-item"><i class="devicon-linux-plain" style="color: var(--text-white);"></i><p>Linux</p></div>
                <div class="skill-item"><i class="devicon-ubuntu-plain colored"></i><p>Ubuntu</p></div>
                <div class="skill-item"><i class="devicon-windows8-plain colored"></i><p>Windows</p></div>
            </div>
        `
    },
    exp_languages: {
        title: "Programming Languages",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
        description: "Versatile in multiple programming languages to solve diverse computational challenges.",
        github: "https://github.com/aonontojahan",
        sectionTitle: "My Core Languages",
        contentHtml: `
            <div class="skills-container">
                <div class="skill-item"><i class="devicon-c-plain colored"></i><p>C</p></div>
                <div class="skill-item"><i class="devicon-cplusplus-plain colored"></i><p>C++</p></div>
                <div class="skill-item"><i class="devicon-java-plain colored"></i><p>Java</p></div>
                <div class="skill-item"><i class="devicon-csharp-plain colored"></i><p>C#</p></div>
                <div class="skill-item"><i class="devicon-python-plain colored"></i><p>Python</p></div>
            </div>
        `
    },
    exp_productivity: {
        title: "Productivity Tools",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>`,
        description: "Proficient with industry-standard software to manage documentation, spreadsheets, and presentations.",
        github: "https://github.com/aonontojahan",
        sectionTitle: "My Core Productivity Tools",
        contentHtml: `
            <div class="skills-container">
                <div class="skill-item"><div class="skill-box" style="background: #107C41; color: white;">X</div><p>MS Excel</p></div>
                <div class="skill-item"><div class="skill-box" style="background: #C43E1C; color: white;">P</div><p>PowerPoint</p></div>
                <div class="skill-item"><div class="skill-box" style="background: #2B579A; color: white;">W</div><p>MS Word</p></div>
                <div class="skill-item"><div class="skill-box" style="background: #4285F4; color: white;">📄</div><p>G-Docs</p></div>
                <div class="skill-item"><div class="skill-box" style="background: #0F9D58; color: white;">📊</div><p>G-Sheets</p></div>
                <div class="skill-item"><div class="skill-box" style="background: #F4B400; color: white;">📽</div><p>G-Slides</p></div>
            </div>
        `
    },

    // PROCESS SECTION
    process_discovery: {
        title: "Discovery Step",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`,
        description: "I dive deep into your vision to ensure every technical detail aligns with your business objectives.",
        sectionTitle: "Strategic Discovery Phase",
        projects: [
            { name: "Requirement Gathering", desc: "Detailed sessions to uncover every functional and non-functional need.", tech: ["Documentation", "Communication"] },
            { name: "Market Analysis", desc: "Understanding the landscape to build a competitive edge.", tech: ["Research"] },
            { name: "Technical Feasibility", desc: "Evaluating potential challenges and ensuring a viable path forward.", tech: ["Consulting"] }
        ]
    },
    process_planning: {
        title: "Planning Step",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`,
        description: "A solid blueprint is the foundation of any great project. I map out the most efficient path to success.",
        sectionTitle: "Technical Architecture Planning",
        projects: [
            { name: "Tech Stack Selection", desc: "Choosing the perfect combination of modern tools for your project.", tech: ["Architecture"] },
            { name: "Database Schema Design", desc: "Designing resilient and scalable data structures.", tech: ["SQL", "NoSQL"] },
            { name: "Project Roadmapping", desc: "Setting clear milestones and expectations for timeline and budget.", tech: ["Agile Planning"] }
        ]
    },
    process_feedback: {
        title: "Feedback & Review Step",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>`,
        description: "Building your trust is as important as building your software. Continuous feedback ensures complete alignment.",
        sectionTitle: "How Feedback Works",
        projects: [
            { name: "Design Review", desc: "Validating the UI/UX flows and visual language with you.", tech: ["UI/UX Validation"] },
            { name: "Architecture Validation", desc: "Ensuring the technical plan meets your long-term vision.", tech: ["Consulting"] },
            { name: "Continuous Alignment", desc: "Regular touchpoints to ensure the project stays on track.", tech: ["Communication"] }
        ]
    },
    process_development: {
        title: "Development Step",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/><line x1="12" y1="2" x2="12" y2="22"/></svg>`,
        description: "Transforming ideas into high-performance reality with clean, scalable, and maintainable code.",
        sectionTitle: "My Development Standards",
        projects: [
            { name: "Agile Sprints", desc: "Iterative development focusing on shipping functional features rapidly.", tech: ["Agile", "Scrum"] },
            { name: "Clean Code Principles", desc: "Ensuring the codebase is maintainable and follows SOLID patterns.", tech: ["Quality Control"] },
            { name: "Daily Progress Updates", desc: "Maintaining full transparency on what's being built.", tech: ["Transparency"] }
        ]
    },
    process_testing: {
        title: "Testing Step",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`,
        description: "Your users deserve perfection. I stress-test every feature to ensure a seamless experience.",
        sectionTitle: "My Quality Assurance Process",
        projects: [
            { name: "Unit & Integration Testing", desc: "Automated checks to prevent regressions and bugs.", tech: ["Automation"] },
            { name: "QA & Bug Squashing", desc: "Rigorous manual and automated passes for pure functionality.", tech: ["Reliability"] },
            { name: "Performance Auditing", desc: "Optimizing speed and ensuring the app handles load gracefully.", tech: ["Optimization"] }
        ]
    },
    process_deployment: {
        title: "Deployment Step",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>`,
        description: "Handling the entire launch process so your product starts strong and stays stable.",
        sectionTitle: "What's in Deployment",
        projects: [
            { name: "CI/CD Implementation", desc: "Automating the path from code pushing to live deployment.", tech: ["CI/CD", "DevOps"] },
            { name: "Security Hardening", desc: "Ensuring the production environment is resilient and safe.", tech: ["Security"] },
            { name: "Production Launch", desc: "The final step to making your project live and accessible.", tech: ["Cloud Infrastructure"] }
        ]
    },
    process_maintenance: {
        title: "Maintenance Step",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg>`,
        description: "Long-term support to ensure your platform stays modern, secure, and ready to grow.",
        sectionTitle: "Post-Launch Care",
        projects: [
            { name: "Ongoing Monitoring", desc: "Watching over server health and performance metrics.", tech: ["Health Checks"] },
            { name: "Version Upgrades", desc: "Keeping dependencies fresh and protected against vulnerabilities.", tech: ["Security Fixes"] },
            { name: "Performance Optimization", desc: "Continually refining speed and responsiveness as more users join.", tech: ["Refinement"] }
        ]
    },

    // SERVICES SECTION
    service_frontend: {
        title: "Frontend Development",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,
        description: "I design and develop modern, responsive portfolio websites to showcase your skills, projects, and personal brand. Clean UI, smooth animations, and optimized performance.",
        sectionTitle: "What I Provides",
        projects: [
            { name: "Responsive design", desc: "Ensuring an optimal experience seamlessly across all devices.", tech: ["Tailwind", "CSS3", "Media Queries"] },
            { name: "Clean UI implementation", desc: "Modern and intuitive interfaces designed to maximize engagement.", tech: ["React", "HTML5", "UX/UI"] },
            { name: "Cross-browser compatibility", desc: "Your site functions beautifully on Chrome, Firefox, Safari, and more.", tech: ["Polyfills", "Testing"] },
            { name: "Interactive elements", desc: "Micro-animations and dynamic components bringing your views to life.", tech: ["JavaScript", "Framer Motion"] }
        ]
    },
    service_backend: {
        title: "FastAPI Backend Development",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/><line x1="12" y1="2" x2="12" y2="22"/></svg>`,
        description: "I develop scalable and secure backend systems using FastAPI, including REST APIs, authentication systems, and database integration.",
        sectionTitle: "What I Provides",
        projects: [
            { name: "REST API development", desc: "Fast and reliable API endpoints that power your frontend.", tech: ["Python", "FastAPI"] },
            { name: "JWT authentication", desc: "Secure token-based authentication protecting your user data.", tech: ["Security", "OAuth", "JWT"] },
            { name: "OTP/email verification", desc: "Reliable verification methods for user registration.", tech: ["SMTP", "Cryptography"] },
            { name: "PostgreSQL integration", desc: "Robust database schemas built for efficiency and scale.", tech: ["SQLAlchemy", "PostgreSQL"] }
        ]
    },
    service_fullstack: {
        title: "Full Stack Web Applications",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>`,
        description: "I build complete web applications by combining modern frontend design with powerful backend systems, delivering fully functional and scalable solutions.",
        sectionTitle: "What I Provides",
        projects: [
            { name: "End-to-end development", desc: "Delivering complete applications ready for your users.", tech: ["Full Stack", "Project Management"] },
            { name: "Frontend + Backend integration", desc: "Seamless communication between client interfaces and server logic.", tech: ["APIs", "WebSockets"] },
            { name: "Database management", desc: "Ensuring your data structures are resilient, backed up, and optimized.", tech: ["SQL", "PostgreSQL" ] },
            { name: "Scalable architecture", desc: "Built with production-grade components that grow with your userbase.", tech: ["Microservices", "Docker"] }
        ]
    },
    service_consulting: {
        title: "Technical Consulting",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
        description: "Helping teams choose the right tech stack and architecture for their specific business needs.",
        sectionTitle: "What I Provides",
        projects: [
            { name: "Architecture design", desc: "Drafting robust technical architectures and deployment pipelines.", tech: ["System Design", "AWS", "Planning"] },
            { name: "Code Review & Refactoring", desc: "Improving code quality to minimize technical debt.", tech: ["Best Practices", "Clean Code"] },
            { name: "Performance Optimization", desc: "Auditing bottlenecks and drastically improving speed.", tech: ["Profiling", "Caching"] },
            { name: "Tech Stack Selection", desc: "Advising on the ideal modern tools for your business objective.", tech: ["Consulting", "Strategy"] }
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
            
            if (modalSectionTitle) {
                if (data.sectionTitle === "") {
                    modalSectionTitle.style.display = 'none';
                } else {
                    modalSectionTitle.style.display = 'block';
                    modalSectionTitle.textContent = data.sectionTitle || 'Recent Work';
                }
            }
            
            if (data.contentHtml) {
                modalProjects.innerHTML = data.contentHtml;
            } else if (data.projects) {
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
            }

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
// Theme Toggle Logic
const themeToggle = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme');

// Detection on load
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
} else {
    // Detect system preference if no previously saved theme
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = prefersDark ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', initialTheme);
    localStorage.setItem('theme', initialTheme);
}

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        let theme = document.documentElement.getAttribute('data-theme');
        let newTheme = theme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });
}
