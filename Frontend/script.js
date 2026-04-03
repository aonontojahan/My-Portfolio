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
const modalSectionTitle = document.querySelector('.modal-section h3');
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
        title: "BSc in Computer Science and Engineering",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>`,
        description: "IUBAT - International University of Business Agriculture and Technology. CGPA: 3.49.",
        projects: [
            { name: "Core Coursework", desc: "C, C++, Java, C#, Compiler Design, Networking, Software Engineering, System Design, Theory of Computation, Data Structures, DBMS, Computer Architecture, MIS, Programming Logic Structure.", tech: [] },
            { name: "Thesis", desc: "Fusion-based Brain Tumor classification using Efficient Net-v2 and Swin Transformer: A deep learning approach. Achieved 96.5% accuracy.", tech: ["Deep Learning", "EfficientNet-v2", "Swin Transformer", "Python"] }
        ]
    },
    hsc: {
        title: "Higher Secondary Certificate (HSC)",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>`,
        description: "Collectorate School and College, Rangpur in Science group. GPA: 5.00 (Session 2019).",
        projects: [
            { name: "Science Track", desc: "Completed coursework focusing on Physics, Chemistry, Higher Mathematics, and Biology.", tech: [] }
        ]
    },
    ssc: {
        title: "Secondary School Certificate (SSC)",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>`,
        description: "Bhendabari M. L High School in Science group. GPA: 5.00 (Session 2017).",
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
        projects: [
            { name: "Smart Calculator", desc: "Built with a modern frontend and a scalable API backend.", link: "https://github.com/aonontojahan/Smart-Calculator", tech: ["PostgreSQL", "FastAPI", "HTML", "CSS", "JavaScript"] }
        ]
    },
    proj_chat: {
        title: "Real Time Chat App",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`,
        description: "Instant messaging application utilizing WebSockets.",
        github: "https://github.com/aonontojahan/realtime-chat-app",
        projects: [
            { name: "Chat Engine", desc: "Backend infrastructure for rapid message delivery using WebSockets.", link: "https://github.com/aonontojahan/realtime-chat-app", tech: ["PostgreSQL", "FastAPI", "HTML", "CSS", "JavaScript"] }
        ]
    },
    proj_marketplace: {
        title: "Resale Marketplace",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>`,
        description: "Electronic device marketplace platform using FastAPI and WebSockets.",
        github: "https://github.com/aonontojahan/Resale-Marketplace-for-Electronics-Devices",
        projects: [
            { name: "Marketplace Core", desc: "Developed the core backend with secure authentication and WebSocket based trading logic.", link: "https://github.com/aonontojahan/Resale-Marketplace-for-Electronics-Devices", tech: ["PostgreSQL", "FastAPI", "SQLAlchemy", "WebSockets", "HTML", "CSS", "JavaScript"] }
        ]
    },
    proj_event: {
        title: "Event Management System",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>`,
        description: "System managing project lifecycles, team coordination, and business timelines.",
        github: "https://github.com/aonontojahan/Event-Management-System",
        projects: [
            { name: "System Orchestration", desc: "Bridging the gap between technical execution and business goals.", link: "https://github.com/aonontojahan/Event-Management-System", tech: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"] }
        ]
    },
    proj_compiler: {
        title: "Young Programmer Compiler",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
        description: "A custom compiler written in Python capturing syntax trees and tokenization.",
        github: "https://github.com/aonontojahan/Young-Programmer-Compiler",
        projects: [
            { name: "Python Compiler", desc: "Applying Python Tokenization and Abstract Syntax Tree extraction.", link: "https://github.com/aonontojahan/Young-Programmer-Compiler", tech: ["Python", "Tokenization", "Syntax Tree"] }
        ]
    },
    proj_bookshop: {
        title: "Bookshop Management System",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>`,
        description: "Full-stack backend integrating PostgreSQL, FastAPI, and an HTML API.",
        github: "https://github.com/aonontojahan/Bookshop-Management-System",
        projects: [
            { name: "Bookshop API", desc: "Basic CRUD operations and includes a basic HTML + Bootstrap frontend integrated with the backend.", link: "https://github.com/aonontojahan/Bookshop-Management-System", tech: ["Python", "PostgreSQL", "FastAPI", "HTML", "Bootstrap"] }
        ]
    },
    proj_mslat: {
        title: "Mini System Monitoring & Log Analysis Toolkit",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>`,
        description: "Bash-orchestrated Linux system toolkit for health checks and log analysis.",
        github: "https://github.com/aonontojahan/Mini-System-Monitoring-Log-Analysis-Toolkit-MSLAT",
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
            <div style="display: flex; gap: 20px; flex-wrap: wrap; justify-content: flex-start; padding: 20px 0;">
                <div style="text-align: center; width: 80px;"><i class="devicon-html5-plain colored" style="font-size: 48px;"></i><p style="margin-top: 10px; font-size: 14px;">HTML5</p></div>
                <div style="text-align: center; width: 80px;"><i class="devicon-css3-plain colored" style="font-size: 48px;"></i><p style="margin-top: 10px; font-size: 14px;">CSS3</p></div>
                <div style="text-align: center; width: 80px;"><i class="devicon-javascript-plain colored" style="font-size: 48px;"></i><p style="margin-top: 10px; font-size: 14px;">JavaScript</p></div>
                <div style="text-align: center; width: 80px;"><i class="devicon-react-original colored" style="font-size: 48px;"></i><p style="margin-top: 10px; font-size: 14px;">React</p></div>
                <div style="text-align: center; width: 80px;"><i class="devicon-nextjs-plain" style="font-size: 48px; color: var(--text-white);"></i><p style="margin-top: 10px; font-size: 14px;">Next.js</p></div>
                <div style="text-align: center; width: 80px;"><i class="devicon-tailwindcss-original colored" style="font-size: 48px;"></i><p style="margin-top: 10px; font-size: 14px;">Tailwind</p></div>
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
            <div style="display: flex; gap: 20px; flex-wrap: wrap; justify-content: flex-start; padding: 20px 0;">
                <div style="text-align: center; width: 80px;"><i class="devicon-python-plain colored" style="font-size: 48px;"></i><p style="margin-top: 10px; font-size: 14px;">Python</p></div>
                <div style="text-align: center; width: 80px;"><i class="devicon-fastapi-plain colored" style="font-size: 48px;"></i><p style="margin-top: 10px; font-size: 14px;">FastAPI</p></div>
                <div style="text-align: center; width: 80px;"><i class="devicon-postgresql-plain colored" style="font-size: 48px;"></i><p style="margin-top: 10px; font-size: 14px;">PostgreSQL</p></div>
                <div style="text-align: center; width: 80px;"><i class="devicon-php-plain colored" style="font-size: 48px;"></i><p style="margin-top: 10px; font-size: 14px;">PHP</p></div>
                <div style="text-align: center; width: 80px;"><i class="devicon-mysql-plain colored" style="font-size: 48px;"></i><p style="margin-top: 10px; font-size: 14px;">MySQL</p></div>
                <div style="text-align: center; width: 80px;"><i class="devicon-sqlalchemy-plain" style="font-size: 48px; color: var(--text-white);"></i><p style="margin-top: 10px; font-size: 14px;">SQLAlchemy</p></div>
                <div style="text-align: center; width: 80px;"><div style="font-size: 48px; display: flex; align-items: center; justify-content: center; width: 48px; height: 48px; margin: 0 auto;"><span class="tag" style="border: 1px solid var(--accent-color); background: transparent; padding: 2px 5px; font-size: 10px;">Pydantic</span></div><p style="margin-top: 10px; font-size: 14px;">Pydantic</p></div>
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
            <div style="display: flex; gap: 20px; flex-wrap: wrap; justify-content: flex-start; padding: 20px 0;">
                <div style="text-align: center; width: 80px;"><i class="devicon-docker-plain colored" style="font-size: 48px;"></i><p style="margin-top: 10px; font-size: 14px;">Docker</p></div>
                <div style="text-align: center; width: 80px;"><i class="devicon-kubernetes-plain colored" style="font-size: 48px;"></i><p style="margin-top: 10px; font-size: 14px;">Kubernetes</p></div>
                <div style="text-align: center; width: 80px;"><i class="devicon-amazonwebservices-plain-wordmark colored" style="font-size: 48px; color: var(--text-white);"></i><p style="margin-top: 10px; font-size: 14px;">AWS</p></div>
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
            <div style="display: flex; gap: 20px; flex-wrap: wrap; justify-content: flex-start; padding: 20px 0;">
                <div style="text-align: center; width: 80px;"><i class="devicon-git-plain colored" style="font-size: 48px;"></i><p style="margin-top: 10px; font-size: 14px;">Git</p></div>
                <div style="text-align: center; width: 80px;"><i class="devicon-githubactions-plain" style="font-size: 48px; color: var(--text-white);"></i><p style="margin-top: 10px; font-size: 14px;">GH Actions</p></div>
                <div style="text-align: center; width: 80px;"><i class="devicon-vscode-plain colored" style="font-size: 48px;"></i><p style="margin-top: 10px; font-size: 14px;">VSCode</p></div>
                <div style="text-align: center; width: 80px;"><i class="devicon-figma-plain colored" style="font-size: 48px;"></i><p style="margin-top: 10px; font-size: 14px;">Figma</p></div>
                <div style="text-align: center; width: 80px;"><i class="devicon-linux-plain" style="font-size: 48px; color: var(--text-white);"></i><p style="margin-top: 10px; font-size: 14px;">Linux</p></div>
                <div style="text-align: center; width: 80px;"><i class="devicon-ubuntu-plain colored" style="font-size: 48px;"></i><p style="margin-top: 10px; font-size: 14px;">Ubuntu</p></div>
                <div style="text-align: center; width: 80px;"><i class="devicon-windows8-plain colored" style="font-size: 48px;"></i><p style="margin-top: 10px; font-size: 14px;">Windows</p></div>
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
            <div style="display: flex; gap: 20px; flex-wrap: wrap; justify-content: flex-start; padding: 20px 0;">
                <div style="text-align: center; width: 80px;"><i class="devicon-c-plain colored" style="font-size: 48px;"></i><p style="margin-top: 10px; font-size: 14px;">C</p></div>
                <div style="text-align: center; width: 80px;"><i class="devicon-cplusplus-plain colored" style="font-size: 48px;"></i><p style="margin-top: 10px; font-size: 14px;">C++</p></div>
                <div style="text-align: center; width: 80px;"><i class="devicon-java-plain colored" style="font-size: 48px;"></i><p style="margin-top: 10px; font-size: 14px;">Java</p></div>
                <div style="text-align: center; width: 80px;"><i class="devicon-csharp-plain colored" style="font-size: 48px;"></i><p style="margin-top: 10px; font-size: 14px;">C#</p></div>
                <div style="text-align: center; width: 80px;"><i class="devicon-python-plain colored" style="font-size: 48px;"></i><p style="margin-top: 10px; font-size: 14px;">Python</p></div>
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
            <div style="display: flex; gap: 20px; flex-wrap: wrap; justify-content: flex-start; padding: 20px 0;">
                <div style="text-align: center; width: 90px;"><div style="font-size: 24px; height: 48px; display: flex; align-items: center; justify-content: center; margin: 0 auto; background: #107C41; color: white; border-radius: 8px; width: 48px; font-weight: bold; box-shadow: 0 4px 6px rgba(0,0,0,0.3);">X</div><p style="margin-top: 10px; font-size: 14px;">MS Excel</p></div>
                <div style="text-align: center; width: 90px;"><div style="font-size: 24px; height: 48px; display: flex; align-items: center; justify-content: center; margin: 0 auto; background: #C43E1C; color: white; border-radius: 8px; width: 48px; font-weight: bold; box-shadow: 0 4px 6px rgba(0,0,0,0.3);">P</div><p style="margin-top: 10px; font-size: 14px;">MS PowerPoint</p></div>
                <div style="text-align: center; width: 90px;"><div style="font-size: 24px; height: 48px; display: flex; align-items: center; justify-content: center; margin: 0 auto; background: #2B579A; color: white; border-radius: 8px; width: 48px; font-weight: bold; box-shadow: 0 4px 6px rgba(0,0,0,0.3);">W</div><p style="margin-top: 10px; font-size: 14px;">MS Word</p></div>
                <div style="text-align: center; width: 90px;"><div style="font-size: 24px; height: 48px; display: flex; align-items: center; justify-content: center; margin: 0 auto; background: #4285F4; color: white; border-radius: 8px; width: 48px; box-shadow: 0 4px 6px rgba(0,0,0,0.3);">📄</div><p style="margin-top: 10px; font-size: 14px;">Google Docs</p></div>
                <div style="text-align: center; width: 90px;"><div style="font-size: 24px; height: 48px; display: flex; align-items: center; justify-content: center; margin: 0 auto; background: #0F9D58; color: white; border-radius: 8px; width: 48px; box-shadow: 0 4px 6px rgba(0,0,0,0.3);">📊</div><p style="margin-top: 10px; font-size: 14px;">Google Sheets</p></div>
                <div style="text-align: center; width: 90px;"><div style="font-size: 24px; height: 48px; display: flex; align-items: center; justify-content: center; margin: 0 auto; background: #F4B400; color: white; border-radius: 8px; width: 48px; box-shadow: 0 4px 6px rgba(0,0,0,0.3);">📽</div><p style="margin-top: 10px; font-size: 14px;">Google Slides</p></div>
            </div>
        `
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
            { name: "Database management", desc: "Ensuring your data structures are resilient, backed up, and optimized.", tech: ["SQL", "NoSQL"] },
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
                modalSectionTitle.textContent = data.sectionTitle || 'Recent Work';
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
