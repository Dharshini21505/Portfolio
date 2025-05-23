import React from 'react';
import './App.css';
import dharshiniPhoto from './assets/dharshini.jpg';

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
        <p>I’m Dharshini N, a passionate B.Tech student specializing in Artificial Intelligence and Data Science at Anna University Regional Campus, Coimbatore. I am deeply interested in leveraging cutting-edge technologies to solve real-world problems through data-driven solutions. Over the course of my studies and internships, I have gained hands-on experience in machine learning, app development, and data analysis, which has strengthened my technical skills and problem-solving abilities. I enjoy exploring new tools and frameworks, participating in tech workshops, and collaborating on projects that challenge me to grow. My goal is to build innovative AI-driven applications that make a meaningful impact while continuously expanding my knowledge in this exciting field.







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
  <ul>
    <li>Python</li>
    <li>C (Basic)</li>
    <li>SQL</li>
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript (Basic)</li>
    <li>Microsoft Excel</li>
    <li>Communication</li>
    <li>Teamwork</li>
  </ul>
</section>


      <section className="projects">
        <h2>Projects</h2>
        <ul>
          <li><strong>Fake Product Link Detection</strong> – Python + Web Scraping | Dec 2023<br/>Detects fake product listings using URL analysis and data filtering.</li>
          <li><strong>Money Matters – Financial App</strong> – Kotlin, Android Studio | Sep–Dec 2024<br/>Manages personal expenses, budgets, and visualizes data.</li>
          <li><strong>Restaurant Management System</strong> – HTML, CSS, JavaScript | Aug 2024<br/>Manages orders, table reservations, and billing.</li>
        </ul>
      </section>

      <section className="achievements">
        <h2>Achievements</h2>
        <ul>
          <li>1st Place – Dark Code (National Level Technical Symposium)</li>
          <li>AI Workshop – Coimbatore Institute of Technology</li>
          <li>Employability Training – RUSA 2.0</li>
        </ul>
      </section>

      <section className="education">
        <h2>Education</h2>
        <p>B.Tech – AI & Data Science, Anna University Regional Campus, Coimbatore<br/>CGPA: 7.64 (up to 4th semester)</p>
      </section>

      <section className="contact">
  <h2>Contact</h2>
 <p>
  Email: <a href="mailto:dharshinin165@gmail.com" className="blue-link">dharshinin165@gmail.com</a><br/>
  Phone: <a href="tel:+919789445458" className="blue-link">+91 9789445458</a><br/>
  LinkedIn: <a href="https://www.linkedin.com/in/dharshini-n-64b4a32a1" target="_blank" rel="noreferrer" className="blue-link">/dharshini-n-64b4a32a1</a><br/>
  Location: Namakkal, Tamil Nadu – 637019
</p>

</section>


      <footer className="footer">
        <p>© 2025 Dharshini N. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Portfolio;
