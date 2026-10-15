import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowDownRight, ArrowRight, ArrowUpRight, BarChart3, BrainCircuit, BriefcaseBusiness, Check, Code2, Database, Download, Github, Linkedin, Mail, Menu, MousePointer2, Sparkles, Workflow, X } from 'lucide-react';
import './styles.css';

const PROFILE = {
  name: 'Vishv Undavia',
  email: 'YOUR_EMAIL@example.com',
  linkedin: 'https://www.linkedin.com/',
  github: 'https://github.com/Vishv18',
  resume: '#contact',
};

const projects = [
  {
    number: '01', type: 'BUSINESS INTELLIGENCE', title: 'Retail Sales Intelligence',
    description: 'From raw Superstore data to business-ready insights—exploring sales, profit, customer patterns and opportunities through SQL and analytics.',
    tags: ['MySQL', 'SQL', 'Python', 'Power BI'], icon: BarChart3,
    outcome: 'Turning transactional data into clearer business decisions.',
    href: 'https://github.com/Vishv18/Retail-Sales-Analysis', tone: 'mint'
  },
  {
    number: '02', type: 'PEOPLE ANALYTICS · ML', title: 'HR Analytics System',
    description: 'An end-to-end employee attrition analytics experience combining a Power BI dashboard, predictive modelling and an interactive Streamlit app.',
    tags: ['Python', 'scikit-learn', 'Power BI', 'Streamlit'], icon: BrainCircuit,
    outcome: 'Connecting historical trends with predictive signals.',
    href: 'https://github.com/Vishv18', tone: 'violet'
  },
  {
    number: '03', type: 'AI · E-COMMERCE ANALYTICS', title: 'AI Business Analyst',
    description: 'Exploring e-commerce data and AI-assisted analysis to make business questions easier to investigate and communicate.',
    tags: ['Python', 'Pandas', 'NumPy', 'Jupyter'], icon: Workflow,
    outcome: 'Bridging data exploration and business understanding.',
    href: 'https://github.com/Vishv18/AI-Business-Analyst', tone: 'blue'
  }
];

const skillGroups = [
  { title: 'DATA & QUERYING', icon: Database, items: ['SQL / MySQL', 'Excel', 'Data cleaning', 'Exploratory analysis'] },
  { title: 'ANALYTICS & VISUALS', icon: BarChart3, items: ['Power BI', 'Pandas & NumPy', 'Matplotlib', 'Business KPIs'] },
  { title: 'AI & APPLICATIONS', icon: BrainCircuit, items: ['scikit-learn', 'Streamlit', 'AI-assisted analytics', 'Python'] },
  { title: 'BUSINESS THINKING', icon: BriefcaseBusiness, items: ['Insight storytelling', 'Problem framing', 'Process thinking', 'Decision support'] },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('Home');
  const [copied, setCopied] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) setActive(entry.target.dataset.nav || entry.target.id || 'Home');
    }), { rootMargin: '-35% 0px -55% 0px' });
    document.querySelectorAll('[data-nav], section[id]').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  const closeMenu = () => setMenuOpen(false);
  const copyEmail = async () => {
    try { await navigator.clipboard.writeText(PROFILE.email); setCopied(true); setTimeout(() => setCopied(false), 1800); }
    catch { window.location.href = `mailto:${PROFILE.email}`; }
  };
  const nav = [['Home', '#home'], ['About', '#about'], ['Work', '#work'], ['Toolkit', '#toolkit'], ['Contact', '#contact']];

  return <>
    <div className="grain" aria-hidden="true" />
    <header className="topbar">
      <a className="brand" href="#home" onClick={closeMenu} aria-label="Vishv home"><span className="brand-mark">V<span>.</span></span><span className="brand-name">VISHV UNDAVIA</span></a>
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? <X size={20}/> : <Menu size={20}/>}</button>
      <nav className={menuOpen ? 'nav open' : 'nav'}>{nav.map(([label, href]) => <a key={label} className={active === label ? 'nav-link active' : 'nav-link'} href={href} onClick={closeMenu}>{label}</a>)}<a className="nav-cta" href="#contact" onClick={closeMenu}>Let's talk <ArrowUpRight size={15}/></a></nav>
    </header>

    <main>
      <section className="hero section-wrap" id="home" data-nav="Home">
        <div className="hero-copy">
          <div className="availability"><span className="pulse"/> OPEN TO INTERNSHIPS & OPPORTUNITIES</div>
          <p className="eyebrow">DATA <span>×</span> BUSINESS <span>×</span> AI</p>
          <h1>I turn data<br/>into <em>direction.</em></h1>
          <p className="hero-lede">I'm Vishv, a Computer Engineering student drawn to the space where analytical thinking, business problems and technology meet.</p>
          <div className="hero-actions"><a className="button button-primary" href="#work">Explore my work <ArrowDownRight size={17}/></a><a className="text-link" href="#about">A little about me <ArrowRight size={16}/></a></div>
          <div className="hero-meta"><span><span className="meta-dot"/> BASED IN INDIA</span><span>CURIOUS BY DEFAULT.</span></div>
        </div>
        <div className="hero-visual" aria-label="Abstract data visualization">
          <div className="visual-orbit orbit-one"/><div className="visual-orbit orbit-two"/><div className="visual-orbit orbit-three"/>
          <div className="visual-label label-top"><span className="tiny-square"/> SIGNAL FOUND <span className="label-line"/></div>
          <div className="data-core"><div className="core-ring"><div className="core-center"><BarChart3 size={39} strokeWidth={1.25}/></div></div><span className="core-caption">MAKE SENSE<br/>OF THE MESS.</span></div>
          <div className="float-card card-a"><span className="float-icon mint-bg"><Database size={16}/></span><div><b>Raw data</b><small>Find the signal</small></div><span className="status-check"><Check size={12}/></span></div>
          <div className="float-card card-b"><span className="float-icon violet-bg"><BrainCircuit size={16}/></span><div><b>Insight</b><small>Make it actionable</small></div><ArrowUpRight size={15} className="muted-icon"/></div>
          <div className="chart-window"><div className="chart-head"><span>INSIGHT / 001</span><span className="chart-live">● LIVE THINKING</span></div><div className="chart-bars">{[34,49,40,66,54,78,61,91,72,84,64,100,76,89].map((h,i)=><span key={i} style={{height:`${h}%`}} className={i===11?'bar-highlight':''}/>)}</div><div className="chart-foot"><span>OBSERVE</span><span>ANALYSE</span><span>ACT</span></div></div>
          <div className="visual-index">FIG. 01 — THE ANALYTICAL MINDSET</div>
        </div>
        <a className="scroll-cue" href="#about"><span className="scroll-line"/> SCROLL TO EXPLORE</a>
      </section>

      <div className="ticker" aria-label="Areas of interest"><div className="ticker-track">{Array.from({length:2}).flatMap((_,n)=>['BUSINESS INTELLIGENCE','DATA STORYTELLING','AI-ASSISTED ANALYTICS','DECISION SUPPORT','CURIOUS THINKING'].map((t,i)=><span key={`${n}-${i}`}>{t}<i>✳</i></span>))}</div></div>

      <section className="about section-wrap section-pad" id="about" data-nav="About">
        <div className="section-kicker"><span>01 / THE PERSON</span><span>BEYOND THE SPREADSHEET</span></div>
        <div className="about-grid"><div><h2>Analytical by nature.<br/><em>Business-minded</em><br/>by choice.</h2></div><div className="about-copy"><p className="large-copy">I like asking better questions as much as I like finding answers.</p><p>I'm studying Computer Engineering at CHARUSAT, building my way into Data and Business Analytics. My sweet spot is understanding a problem, working through the data, and communicating what it actually means.</p><p>I'm not here to make dashboards that just look good. I want to build work that helps someone see a problem differently, make a sharper decision, or find an opportunity they had missed.</p><div className="about-signoff"><span className="signature">Vishv.</span><span>LEARNING IN PUBLIC · BUILDING WITH INTENT</span></div></div></div>
        <div className="principles"><div><span className="principle-num">01</span><b>Ask why.</b><p>Understand the problem before reaching for a tool.</p></div><div><span className="principle-num">02</span><b>Find the signal.</b><p>Turn messy information into a useful perspective.</p></div><div><span className="principle-num">03</span><b>Make it matter.</b><p>Connect the analysis to an actual decision.</p></div></div>
      </section>

      <section className="work section-wrap section-pad" id="work" data-nav="Work">
        <div className="section-kicker"><span>02 / SELECTED WORK</span><span>BUILT TO LEARN. DESIGNED TO SOLVE.</span></div>
        <div className="work-heading"><h2>Projects with<br/><em>a point of view.</em></h2><p>A growing collection of experiments in analytics, business intelligence and AI — each one a chance to turn a question into something tangible.</p></div>
        <div className="project-list">{projects.map(project => { const Icon = project.icon; return <article className={`project-card ${project.tone}`} key={project.number}><div className="project-top"><span className="project-number">/{project.number}</span><span className="project-type">{project.type}</span><a href={project.href} target="_blank" rel="noreferrer" className="project-open" aria-label={`Open ${project.title}`}><ArrowUpRight size={20}/></a></div><div className="project-body"><div className="project-info"><h3>{project.title}</h3><p>{project.description}</p><div className="tag-row">{project.tags.map(tag=><span key={tag}>{tag}</span>)}</div><div className="project-outcome"><span className="outcome-line"/><span>{project.outcome}</span></div></div><div className="project-art"><div className="art-grid"/><div className="art-icon"><Icon size={42} strokeWidth={1.15}/></div><span className="art-index">ANALYSIS / {project.number}</span><span className="art-corner corner-one"/><span className="art-corner corner-two"/></div></div><a className="project-bottom-link" href={project.href} target="_blank" rel="noreferrer">EXPLORE PROJECT <ArrowUpRight size={14}/></a></article>})}</div>
        <div className="work-note"><Sparkles size={16}/><span>More experiments are in progress. This portfolio grows as the work gets better.</span></div>
      </section>

      <section className="toolkit section-wrap section-pad" id="toolkit" data-nav="Toolkit">
        <div className="section-kicker"><span>03 / THE TOOLKIT</span><span>TOOLS ARE MEANS, NOT THE POINT</span></div>
        <div className="toolkit-heading"><h2>Curiosity, meet<br/><em>capability.</em></h2><p>I’m building a practical toolkit that helps me move from raw information to clear, confident decisions.</p></div>
        <div className="skill-grid">{skillGroups.map(group=>{const Icon=group.icon;return <article className="skill-card" key={group.title}><div className="skill-card-head"><span className="skill-icon"><Icon size={19}/></span><span className="skill-code">TOOLKIT / 0{skillGroups.indexOf(group)+1}</span></div><h3>{group.title}</h3><div className="skill-items">{group.items.map(item=><span key={item}>{item}</span>)}</div></article>})}</div>
        <div className="learning-strip"><div className="learning-symbol"><Code2 size={19}/></div><div><b>Always learning. Never pretending to know it all.</b><p>Currently focused on sharpening my analytics workflow, project storytelling and ability to connect technical work with business context.</p></div><span className="learning-status"><i/> IN PROGRESS</span></div>
      </section>

      <section className="contact section-wrap section-pad" id="contact" data-nav="Contact"><div className="contact-panel"><div className="contact-glow"/><div className="section-kicker"><span>04 / YOUR MOVE</span><span>GOOD WORK STARTS WITH A CONVERSATION</span></div><div className="contact-content"><p className="eyebrow">HAVE A QUESTION, IDEA OR OPPORTUNITY?</p><h2>Let's make<br/><em>something useful.</em></h2><p className="contact-copy">I'm open to internships, collaborations and conversations around analytics, business problems and thoughtful uses of AI.</p><div className="contact-actions"><button className="button button-primary" onClick={copyEmail}>{copied ? <><Check size={17}/> Email copied</> : <>Copy email <Mail size={16}/></>}</button><a className="button button-ghost" href={PROFILE.github} target="_blank" rel="noreferrer">GitHub <Github size={16}/></a><a className="button button-ghost" href={PROFILE.linkedin} target="_blank" rel="noreferrer">LinkedIn <Linkedin size={16}/></a></div><p className="contact-hint">Before launch, update the email and LinkedIn links in <code>src/main.jsx</code>.</p></div><div className="contact-watermark">V.</div></div></section>
    </main>
    <footer className="footer section-wrap"><a className="brand footer-brand" href="#home"><span className="brand-mark">V<span>.</span></span><span className="brand-name">VISHV UNDAVIA</span></a><span>BUILT WITH CURIOSITY & INTENTION.</span><a href="#home" className="back-top">BACK TO TOP ↑</a><span className="copyright">© {new Date().getFullYear()} VISHV UNDAVIA</span></footer>
  </>;
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>);
