import React from 'react';
import './App.css';
import dharshiniPhoto from './assets/dharshini.jpg';
import { SiPython, SiC, SiMysql, SiHtml5, SiCss3, SiJavascript } from 'react-icons/si';
import { MdPeople, MdEmail, MdPhone } from 'react-icons/md';
import { FaProjectDiagram, FaLinkedin } from 'react-icons/fa';
import { BsFileExcel } from 'react-icons/bs';
 import { GiTrophy } from 'react-icons/gi'; 
 import { FiAward } from 'react-icons/fi';


function Portfolio() {
  return (
    <div className="App">
      <header className="header">
        <img src={dharshiniPhoto} alt="Dharshini N" className="profile-pic" />
        <h1>Dharshini N</h1>
        <p>Aspiring AI & Data Science Engineer</p>
      </header>

      <section className="about">
        <h2>About Me</h2>
        <p>
          I’m Dharshini N, a passionate B.Tech student specializing in Artificial Intelligence and Data Science at Anna University Regional Campus, Coimbatore. I am deeply interested in leveraging cutting-edge technologies to solve real-world problems through data-driven solutions. Over the course of my studies and internships, I have gained hands-on experience in machine learning, app development, and data analysis, which has strengthened my technical skills and problem-solving abilities. I enjoy exploring new tools and frameworks, participating in tech workshops, and collaborating on projects that challenge me to grow. My goal is to build innovative AI-driven applications that make a meaningful impact while continuously expanding my knowledge in this exciting field.
        </p>
      </section>

      <section className="hobbies">
        <h2>Hobbies</h2>
        <ul>
          <li>Exploring new technologies</li>
          <li>Creative content writing</li>
          <li>Solving logic puzzles</li>
          <li>Watching tech talks</li>
          <li>Traveling and discovering new cultures</li>
        </ul>
      </section>

      <section className="skills">
        <h2>Skills</h2>
        <div className="skills-container">
          {[
            { name: 'Python', icon: <SiPython /> },
            { name: 'C (Basic)', icon: <SiC /> },
            { name: 'SQL', icon: <SiMysql /> },
            { name: 'HTML', icon: <SiHtml5 /> },
            { name: 'CSS', icon: <SiCss3 /> },
          ].map(skill => (
            <div key={skill.name} className="skill-tag">
              {skill.icon} &nbsp; {skill.name}
            </div>
          ))}
        </div>
        <div className="skills-container" style={{ marginTop: '10px' }}>
          {[
            { name: 'JavaScript (Basic)', icon: <SiJavascript /> },
            { name: 'Microsoft Excel', icon: <BsFileExcel /> },
            { name: 'Communication', icon: <MdPeople /> },
            { name: 'Teamwork', icon: <MdPeople /> },
          ].map(skill => (
            <div key={skill.name} className="skill-tag">
              {skill.icon} &nbsp; {skill.name}
            </div>
          ))}
        </div>
      </section>

      <section className="projects">
        <h2>Projects</h2>
        <ul>
          <li>
            <FaProjectDiagram style={{ color: '#2b2d42' }} />{' '}
            <strong>Fake Product Link Detection</strong> – Python + Web Scraping | Dec 2023
            <br />
            Detects fake product listings using URL analysis and data filtering.
          </li>
          <li>
            <FaProjectDiagram style={{ color: '#2b2d42' }} />{' '}
            <strong>Money Matters – Financial App</strong> – Kotlin, Android Studio | Sep–Dec 2024
            <br />
            Manages personal expenses, budgets, and visualizes data.
          </li>
          <li>
            <FaProjectDiagram style={{ color: '#2b2d42' }} />{' '}
            <strong>Restaurant Management System</strong> – HTML, CSS, JavaScript | Aug 2024
            <br />
            Manages orders, table reservations, and billing.
          </li>
        </ul>
      </section>

<section className="achievements">
  <h2>Achievements</h2>
  <div className="achievement-list">
    <div className="achievement-card">
      <FiAward className="achievement-icon" />
      <span>1st Place – Dark Code (National Level Technical Symposium)</span>
    </div>
    <div className="achievement-card">
      <FiAward className="achievement-icon" />
      <span>AI Workshop – Coimbatore Institute of Technology</span>
    </div>
    <div className="achievement-card">
      <FiAward className="achievement-icon" />
      <span>Employability Training – RUSA 2.0</span>
    </div>
  </div>
</section>



      <section className="education">
        <h2>Education</h2>
        <p>
          B.Tech – AI & Data Science, Anna University Regional Campus, Coimbatore
          <br />
          CGPA: 7.64 (up to 4th semester)
        </p>
      </section>

      <section className="contact">
  <h2>Contact</h2>
  <div className="contact-icons">
    <a href="mailto:dharshinin165@gmail.com" className="icon-link" title="Email">
      <MdEmail size={40} />
    </a>
    <a href="tel:+919789445458" className="icon-link" title="Phone">
      <MdPhone size={40} />
    </a>
    <a
      href="https://www.linkedin.com/in/dharshini-n-64b4a32a1"
      target="_blank"
      rel="noreferrer"
      className="icon-link"
      title="LinkedIn"
    >
      <FaLinkedin size={40} />
    </a>
  </div>
</section>


      <footer className="footer">
        <p>© 2025 Dharshini N. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Portfolio;
