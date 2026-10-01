import { motion } from 'framer-motion'
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Download,
  ExternalLink,
  Home,
  Instagram,
  Mail,
  Moon,
  Sun,
  UserRound,
} from 'lucide-react'
import { useTheme } from './context/ThemeContext'
import { FloatingNav } from './components/ui/floating-navbar'
import BounceCards from './components/BounceCards'

const projects = [
  {
    number: '01',
    title: 'After The Beat',
    type: 'Music visual concept',
    description: 'A rhythm-first visual built around atmosphere, movement, and the energy of a track.',
    href: 'https://drive.google.com/file/d/1dlsTyFl4qrQUtW7wAg6ENZ3hhUin4Jj7/view?usp=drive_link',
  },
  {
    number: '02',
    title: 'Frame By Frame',
    type: 'Fashion film concept',
    description: 'A considered sequence exploring silhouette, texture, pacing, and image-led storytelling.',
    href: 'https://drive.google.com/file/d/1Cn19aRuJQNOnFKXOqnsKftl3g50vHju-/view?usp=drive_link',
  },
  {
    number: '03',
    title: 'House of Creations',
    type: 'Creative culture platform',
    description: 'A digital home for a creative brand, designed to present visual work with clarity and character.',
    href: 'https://houseofcreations.vercel.app/',
  },
]

const socials = [
  { label: 'Instagram', href: 'https://www.instagram.com/yashhkhope/', icon: Instagram },
  { label: 'Email', href: 'mailto:khopeyash830@gmail.com', icon: Mail },
]

function ThemeButton() {
  const { theme, toggleTheme } = useTheme()
  return (
    <button className="icon-button theme-button" onClick={toggleTheme} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}>
      {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  )
}

function Navigation() {
  const links = [
    { name: 'Home', link: '#home', icon: <Home className="h-4 w-4" /> },
    { name: 'Profile', link: '#profile', icon: <UserRound className="h-4 w-4" /> },
    { name: 'Projects', link: '#projects', icon: <BriefcaseBusiness className="h-4 w-4" /> },
    { name: 'Contact', link: '#contact', icon: <Mail className="h-4 w-4" /> },
  ]
  return (
    <FloatingNav navItems={links} cta={<ThemeButton />} />
  )
}

function SectionLabel({ number, children }) {
  return <p className="section-label"><span>{number}</span>{children}</p>
}

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-copy">
        <motion.p className="eyebrow" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>Fashion / music / visual storytelling</motion.p>
        <motion.h1 initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}>
          YASH<br /><span>KH<span className="accent-letter">O</span>PE</span>
        </motion.h1>
        <motion.div className="hero-foot" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.55 }}>
          <p>Building visual worlds where<br />sound, style, and motion meet.</p>
          <a className="text-link" href="#projects">View selected work <ArrowUpRight size={15} /></a>
        </motion.div>
      </div>
      <div className="hero-portrait">
        <div className="hero-image-frame">
          <div className="portrait-ring" />
          <img src="/Yash1.JPG" alt="Yash Khope, video editor" />
        </div>
        <span className="portrait-note">EDITOR<br />VISUALS<br />2025—</span>
      </div>
      <span className="hero-index">01 / 04</span>
    </section>
  )
}

function Profile() {
  return (
    <section className="profile section-wrap" id="profile">
      <div className="section-heading">
        <SectionLabel number="02">Profile</SectionLabel>
        <h2>Style has<br /><em>a rhythm.</em></h2>
      </div>
      <div className="profile-grid">
        <div className="profile-portrait"><img src="/Profile.jpg" alt="Yash Khope at Cloud Community Day Pune" /><span>YASH / 21</span></div>
        <div className="profile-copy">
          <p className="lead">I am Yash, a video editor and visual storyteller drawn to fashion, music, and culture.</p>
          <p>I shape ideas into visual worlds through pacing, sound, styling, and movement. I am interested in the space between a fashion image and a music moment, where texture, attitude, and emotion make a story feel alive. I also build digital homes for creative brands.</p>
          <div className="skill-list">
            <div><span>01</span><strong>Story & pacing</strong><i><b style={{ width: '88%' }} /></i></div>
            <div><span>02</span><strong>Music-led editing</strong><i><b style={{ width: '84%' }} /></i></div>
            <div><span>03</span><strong>Style & art direction</strong><i><b style={{ width: '66%' }} /></i></div>
            <div><span>04</span><strong>Colour & finish</strong><i><b style={{ width: '76%' }} /></i></div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Projects() {
  const projectImages = ['/1.png', '/2.png', '/3.png']

  return (
    <section className="projects section-wrap" id="projects">
      <div className="section-heading projects-heading">
        <SectionLabel number="03">Selected visual studies</SectionLabel>
        <h2>Sound.<br /><em>Style. Motion.</em></h2>
        <p>A growing collection of edits, visual experiments, and creative digital work.</p>
      </div>
      <div className="projects-showcase">
        <BounceCards
          className="projects-bounce-cards"
          images={projectImages}
          links={projects.map((project) => project.href)}
          containerWidth={520}
          containerHeight={410}
          transformStyles={['rotate(-8deg) translate(-150px)', 'rotate(3deg)', 'rotate(8deg) translate(150px)']}
          enableHover
        />
        <div className="project-list">
          {projects.map((project) => (
            <motion.a className="project-item" href={project.href} target="_blank" rel="noreferrer" key={project.number} whileHover={{ x: 8 }}>
              <div className="project-meta"><span>{project.type}</span><span>{project.number}</span></div>
              <h3>{project.title} <ExternalLink size={18} /></h3>
              <p>{project.description}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section className="contact section-wrap" id="contact">
      <div className="contact-mark">YK</div>
      <div className="contact-content">
        <SectionLabel number="04">Contact</SectionLabel>
        <h2>Let’s make<br /><em>something resonate.</em></h2>
        <a className="contact-email" href="mailto:khopeyash830@gmail.com">khopeyash830@gmail.com <ArrowUpRight size={20} /></a>
        <div className="contact-actions">
          <a className="outline-link" href="/Yash_Resume.pdf" download><Download size={16} /> Download resume</a>
          <div className="social-links">{socials.map(({ label, href, icon: Icon }) => <a href={href} target="_blank" rel="noreferrer" key={label} aria-label={label}><Icon size={17} /></a>)}</div>
        </div>
      </div>
      <div className="contact-note">Available for fashion, music<br />and culture collaborations.</div>
    </section>
  )
}

function App() {
  return (
    <div className="portfolio-shell">
      <Navigation />
      <main><Hero /><Profile /><Projects /><Contact /></main>
      <footer><span>YASH KHOPE / FASHION + MUSIC VISUALS</span><span>© {new Date().getFullYear()}</span></footer>
    </div>
  )
}

export default App
