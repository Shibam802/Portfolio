import React, { useState } from "react";
import {
  ArrowUpRight, Github, Linkedin, Mail, Download, Menu, X, Code2,
  BrainCircuit, Database, Cpu, ExternalLink, MapPin, GraduationCap,
  Sparkles, ChevronRight
} from "lucide-react";

const PROFILE = {
  name: "Shibam Banik",
  role: "Aspiring Software Developer",
  location: "Vellore, India",
  phone: "+91 9612706843",
  email: "shibambanik0@gmail.com",
  github: "https://github.com/Shibam802",
  linkedin: "https://www.linkedin.com/in/shibam-banik-aa2b1925a/",
  resume: "/resume.pdf",
  // Add your portrait as public/profile.jpg. The fallback initials show until then.
};

const skills = [
  { title: "Programming", items: ["C++", "Java", "Python"], icon: Code2 },
  { title: "Frontend", items: ["HTML", "CSS", "JavaScript", "React.js"], icon: Sparkles },
  { title: "Backend & APIs", items: ["Python", "FastAPI", "REST APIs"], icon: Database },
  { title: "AI & Data", items: ["NLP", "Machine Learning", "Pandas", "NumPy"], icon: BrainCircuit },
  { title: "Tools & Platforms", items: ["Git", "GitHub", "VS Code", "Vercel", "Render"], icon: Cpu },
  { title: "IoT", items: ["ESP32", "Firebase", "Sensors", "Wokwi"], icon: Database },
];

const projects = [
  {
    number: "01",
    type: "FULL STACK · RECOMMENDATION SYSTEM",
    title: "CineMatch — Movie Recommendation System",
    description: "Built a content-based movie recommendation engine using CountVectorizer and cosine similarity on the TMDB 5000 dataset. Developed a Flask REST API with an auto-retrain-on-startup fallback for large pickle files, and created a cinematic dark-themed React frontend.",
    stack: ["Flask", "React.js", "CountVectorizer", "Cosine Similarity", "TMDB API"],
    github: "",
    live: "",
  },
  {
    number: "02",
    type: "AI · NLP · FULL STACK",
    title: "LexSentinel — Legal Document Sentiment Analyzer",
    description: "Built a full-stack legal document sentiment analyzer using FLAN-T5 for sentence-level Positive, Negative and Neutral classification. Implemented a FastAPI backend with JWT authentication, user history and asynchronous document processing, plus a responsive React interface with visualizations and CSV export.",
    stack: ["FastAPI", "React.js", "SQLite", "FLAN-T5", "JWT", "Render", "Vercel"],
    github: "",
    live: "https://legal-sentiment-analysis-website.vercel.app/",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <header className="topbar">
        <a className="brand" href="#home" onClick={closeMenu}><span className="brand-mark">S</span> shibam<span className="brand-dot">.</span></a>
        <button className="mobile-menu" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
        <nav className={menuOpen ? "nav nav-open" : "nav"}>
          {["About", "Skills", "Projects", "Experience", "Contact"].map((item) =>
            <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>{item}</a>
          )}
          <a className="nav-cta" href={PROFILE.resume} target="_blank" rel="noreferrer" onClick={closeMenu}><Download size={15}/> Resume</a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="eyebrow"><span className="status-dot" /> OPEN TO SOFTWARE DEVELOPMENT OPPORTUNITIES</div>
            <h1>Building thoughtful<br/><span className="gradient-text">digital experiences.</span></h1>
            <p className="hero-lead">Hi, I'm <strong>Shibam Banik</strong> — a B.Tech student and aspiring software developer who enjoys solving problems and turning ideas into useful applications.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">Explore my work <ArrowUpRight size={17}/></a>
              <a className="button button-ghost" href="#contact">Let's connect <Mail size={16}/></a>
            </div>
            <div className="social-row">
              <a href={PROFILE.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18}/></a>
              <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18}/></a>
              <a href={`mailto:${PROFILE.email}`} aria-label="Email"><Mail size={18}/></a>
              <span className="social-location"><MapPin size={14}/> {PROFILE.location}</span>
            </div>
          </div>
          <div className="hero-visual">
            <div className="portrait-frame">
              <div className="portrait-glow" />
              <img
                className="portrait"
                src="/profile.jpg"
                alt="Portrait of Shibam Banik"
                onError={(e) => { e.currentTarget.style.display = "none"; e.currentTarget.nextSibling.style.display = "grid"; }}
              />
              <div className="portrait-fallback">SB</div>
              <div className="portrait-caption"><span className="caption-line"/> SOFTWARE DEVELOPER</div>
            </div>
            <div className="float-card float-card-top"><Code2 size={17}/><span>Build · Learn · Improve</span></div>
            <div className="float-card float-card-bottom"><BrainCircuit size={18}/><span>AI + Software</span></div>
          </div>
          <a className="scroll-cue" href="#about"><span/> SCROLL TO EXPLORE</a>
        </section>

        <section className="section-wrap content-section" id="about">
          <div className="section-kicker">01 / ABOUT ME</div>
          <div className="section-heading-row">
            <h2>A little about <span className="gradient-text">me.</span></h2>
            <p className="section-intro">Curious by nature. Developer by passion.</p>
          </div>
          <div className="about-grid">
            <div className="about-main panel">
              <div className="panel-icon"><GraduationCap size={21}/></div>
              <h3>Learning today. Building for tomorrow.</h3>
              <p>I'm pursuing a B.Tech in Computer Science and Engineering at Vellore Institute of Technology (2023–2027), specializing in Blockchain Technology. I enjoy building practical software and exploring AI/ML, full-stack development and cloud technologies.</p>
              <p>My experience includes an AI/ML research internship at NIT Sikkim, where I worked on adversarial robustness and multi-class attack detection, alongside full-stack projects in movie recommendations and legal document analysis.</p>
            </div>
            <div className="about-side">
              <div className="mini-panel panel"><span className="mini-label">FOCUS</span><strong>Software Development</strong><span className="mini-note">Web apps · Problem solving · AI</span></div>
              <div className="mini-panel panel"><span className="mini-label">EDUCATION</span><strong>Bachelor of Technology</strong><span className="mini-note">Vellore Institute of Technology · 2023–2027</span></div>
            </div>
          </div>
        </section>

        <section className="section-wrap content-section" id="skills">
          <div className="section-kicker">02 / TOOLKIT</div>
          <div className="section-heading-row">
            <h2>Skills & <span className="gradient-text">technologies.</span></h2>
            <p className="section-intro">Tools I use to bring ideas to life.</p>
          </div>
          <div className="skills-grid">
            {skills.map(({title, items, icon: Icon}) => (
              <article className="skill-card panel" key={title}>
                <div className="skill-icon"><Icon size={20}/></div>
                <h3>{title}</h3>
                <div className="tag-list">{items.map(item => <span className="tag" key={item}>{item}</span>)}</div>
              </article>
            ))}
          </div>
        </section>

        <section className="section-wrap content-section" id="projects">
          <div className="section-kicker">03 / SELECTED WORK</div>
          <div className="section-heading-row">
            <h2>Projects I've <span className="gradient-text">worked on.</span></h2>
            <p className="section-intro">A selection of academic and personal projects.</p>
          </div>
          <div className="projects-list">
            {projects.map(project => (
              <article className="project-card panel" key={project.number}>
                <div className="project-number">{project.number}</div>
                <div className="project-content">
                  <div className="project-type">{project.type}</div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tag-list project-tags">{project.stack.map(tag => <span className="tag" key={tag}>{tag}</span>)}</div>
                  <div className="project-links">
                    {project.github && <a href={project.github} target="_blank" rel="noreferrer">Source code <Github size={15}/></a>}
                    {project.live && <a href={project.live} target="_blank" rel="noreferrer">Live project <ExternalLink size={15}/></a>}
                    {!project.github && !project.live && <span className="private-note">Project link to be added</span>}
                  </div>
                </div>
                <ChevronRight className="project-arrow" size={20}/>
              </article>
            ))}
          </div>
        </section>

        <section className="section-wrap content-section" id="experience">
          <div className="section-kicker">04 / EXPERIENCE</div>
          <div className="education-card panel">
            <div className="education-icon"><BrainCircuit size={24}/></div>
            <div>
              <div className="project-type">JUN 2025 — JUL 2025 · AI/ML RESEARCH INTERN</div>
              <h3>National Institute of Technology (NIT), Sikkim</h3>
              <p>Developed a PyTorch-based GhostNet pipeline for multi-class adversarial attack detection on CIFAR-100, achieving 80.5% classification accuracy. Implemented Local Histogram Equalization and Butterworth high-pass filtering, with comparative evaluation and hyperparameter optimization using Optuna.</p>
              <div className="tag-list project-tags"><span className="tag">PyTorch</span><span className="tag">GhostNet</span><span className="tag">CIFAR-100</span><span className="tag">Optuna</span><span className="tag">Adversarial Robustness</span></div>
            </div>
          </div>
        </section>

        <section className="section-wrap content-section education-section">
          <div className="section-kicker">05 / EDUCATION</div>
          <div className="education-card panel">
            <div className="education-icon"><GraduationCap size={24}/></div>
            <div><div className="project-type">UNDERGRADUATE</div><h3>Bachelor of Technology (B.Tech)</h3><p>Vellore Institute of Technology, Vellore · 2023–2027</p><p>B.Tech in Computer Science and Engineering</p></div>
          </div>
        </section>

        <section className="section-wrap contact-section" id="contact">
          <div className="contact-panel panel">
            <div className="section-kicker">06 / GET IN TOUCH</div>
            <h2>Have a project or<br/><span className="gradient-text">opportunity in mind?</span></h2>
            <p>I'm interested in connecting with teams, learning from experienced developers and exploring software development opportunities.</p>
            <a className="button button-primary" href={`mailto:${PROFILE.email}`}>Say hello <ArrowUpRight size={17}/></a>
            <div className="contact-links">
              <a href={`mailto:${PROFILE.email}`}><Mail size={17}/> {PROFILE.email}</a>
              <a href={`tel:${PROFILE.phone}`}><Mail size={17}/> {PROFILE.phone}</a>
              <a href={PROFILE.github} target="_blank" rel="noreferrer"><Github size={17}/> GitHub <ExternalLink size={13}/></a>
              <a href={PROFILE.linkedin} target="_blank" rel="noreferrer"><Linkedin size={17}/> LinkedIn <ExternalLink size={13}/></a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer section-wrap">
        <a className="brand" href="#home"><span className="brand-mark">S</span> shibam<span className="brand-dot">.</span></a>
        <span>Designed & built by Shibam Banik · {new Date().getFullYear()}</span>
        <a href="#home" className="back-top">Back to top ↑</a>
      </footer>
    </div>
  );
}

export default App;