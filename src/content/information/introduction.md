---
title: 关于
timestamp: 2026-02-06T00:00:00+00:00
---

<style>
* { line-height: normal; }

:root {
  --accent: #667eea;
  --accent-glow: rgba(102, 126, 234, 0.4);
  --bg-dots: var(--shadow-color);
}

.about-container {
  min-height: 70vh;
  position: relative;
  overflow: hidden;
}

/* Dot grid background */
.dot-grid {
  position: absolute;
  inset: 0;
  background-image: radial-gradient(var(--bg-dots) 1px, transparent 1px);
  background-size: 24px 24px;
  opacity: 0.3;
  animation: gridFloat 20s ease-in-out infinite;
}

@keyframes gridFloat {
  0%, 100% { transform: translateY(0) translateX(0); }
  50% { transform: translateY(-10px) translateX(5px); }
}

/* Floating particles */
.particles {
  position: absolute;
  inset: 0;
  pointer-events: none;
  overflow: hidden;
}

.particle {
  position: absolute;
  width: 4px;
  height: 4px;
  background: var(--accent);
  border-radius: 50%;
  opacity: 0;
  animation: particleFloat 15s infinite;
}

.particle:nth-child(1) { left: 10%; animation-delay: 0s; }
.particle:nth-child(2) { left: 20%; animation-delay: 2s; }
.particle:nth-child(3) { left: 30%; animation-delay: 4s; }
.particle:nth-child(4) { left: 40%; animation-delay: 1s; }
.particle:nth-child(5) { left: 50%; animation-delay: 3s; }
.particle:nth-child(6) { left: 60%; animation-delay: 5s; }
.particle:nth-child(7) { left: 70%; animation-delay: 2.5s; }
.particle:nth-child(8) { left: 80%; animation-delay: 4.5s; }
.particle:nth-child(9) { left: 90%; animation-delay: 1.5s; }

@keyframes particleFloat {
  0% {
    opacity: 0;
    transform: translateY(100vh) scale(0);
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: translateY(-100px) scale(1);
  }
}

/* Hero section */
.hero {
  position: relative;
  text-align: center;
  padding: 4rem 0 3rem;
  z-index: 1;
}

.avatar {
  width: 100px;
  height: 100px;
  margin: 0 auto 1.5rem;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--accent), #764ba2);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  font-weight: 900;
  color: white;
  animation: avatarFloat 3s ease-in-out infinite;
  box-shadow: 0 10px 40px var(--accent-glow);
}

@keyframes avatarFloat {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
}

.name {
  font-size: 3rem;
  font-weight: 900;
  letter-spacing: -0.03em;
  margin-bottom: 0.5rem;
  background: linear-gradient(135deg, var(--accent) 0%, #764ba2 50%, #f093fb 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: gradientShift 4s ease infinite;
  background-size: 200% 200%;
}

@keyframes gradientShift {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

/* Terminal style typing effect */
.terminal-line {
  font-family: 'SF Mono', 'Fira Code', monospace;
  font-size: 0.95rem;
  color: var(--secondary-color);
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.terminal-prompt {
  color: #4ade80;
}

.terminal-cursor {
  display: inline-block;
  width: 10px;
  height: 1.2em;
  background: var(--accent);
  margin-left: 2px;
  animation: cursorBlink 1s step-end infinite;
}

@keyframes cursorBlink {
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
}

/* Cards grid */
.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.25rem;
  padding: 2rem 0;
  position: relative;
  z-index: 1;
}

.info-card {
  background: var(--block-color);
  border: 1px solid var(--shadow-color);
  border-radius: 12px;
  padding: 1.5rem;
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  position: relative;
  overflow: hidden;
}

.info-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, var(--accent), #764ba2);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s ease;
}

.info-card:hover {
  transform: translateY(-4px);
  border-color: var(--accent);
  box-shadow: 0 12px 40px var(--accent-glow);
}

.info-card:hover::before {
  transform: scaleX(1);
}

.card-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
}

.card-icon {
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, var(--accent), #764ba2);
  border-radius: 8px;
  font-size: 1.1rem;
}

.card-title {
  font-size: 0.75rem;
  font-family: monospace;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: var(--remark-color);
}

.card-title::before {
  content: '// ';
  color: var(--accent);
}

/* Skills tags */
.skills-wrap {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.skill-tag {
  padding: 0.35rem 0.85rem;
  background: var(--background-color);
  border: 1px solid var(--shadow-color);
  border-radius: 6px;
  font-family: monospace;
  font-size: 0.8rem;
  color: var(--secondary-color);
  transition: all 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);
  cursor: default;
}

.skill-tag:hover {
  background: var(--accent);
  color: white;
  border-color: var(--accent);
  transform: scale(1.05);
}

/* Stats grid */
.stats-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-top: 1rem;
}

.stat-item {
  text-align: center;
  padding: 0.75rem;
  background: var(--background-color);
  border-radius: 8px;
  transition: all 0.2s ease;
}

.stat-item:hover {
  transform: scale(1.05);
}

.stat-value {
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--accent);
  font-family: monospace;
}

.stat-label {
  font-size: 0.7rem;
  color: var(--remark-color);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-top: 0.25rem;
}

/* Contact section */
.contact-section {
  text-align: center;
  padding: 2rem 0;
  position: relative;
  z-index: 1;
}

.contact-links {
  display: inline-flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
}

.contact-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.25rem;
  background: var(--block-color);
  border: 1px solid var(--shadow-color);
  border-radius: 8px;
  font-family: monospace;
  font-size: 0.9rem;
  color: var(--secondary-color);
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.contact-link:hover {
  background: var(--accent);
  border-color: var(--accent);
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px var(--accent-glow);
}

/* Footer */
.footer {
  text-align: center;
  padding: 2rem 0 1rem;
  font-family: monospace;
  font-size: 0.8rem;
  color: var(--remark-color);
  position: relative;
  z-index: 1;
}

.footer a {
  color: var(--secondary-color);
  text-decoration: none;
  border-bottom: 1px dotted var(--shadow-color);
  transition: border-color 0.2s;
}

.footer a:hover {
  border-bottom-color: var(--accent);
}

/* Responsive */
@media (max-width: 640px) {
  .name { font-size: 2rem; }
  .cards-grid { grid-template-columns: 1fr; }
  .stats-grid { grid-template-columns: 1fr; }
}
</style>

<div class="about-container">
  <div class="dot-grid"></div>
  <div class="particles">
    <div class="particle"></div>
    <div class="particle"></div>
    <div class="particle"></div>
    <div class="particle"></div>
    <div class="particle"></div>
    <div class="particle"></div>
    <div class="particle"></div>
    <div class="particle"></div>
    <div class="particle"></div>
  </div>

  <div class="hero">
    <div class="avatar">S</div>
    <div class="name">Sophomores</div>
    <div class="terminal-line">
      <span class="terminal-prompt">➜</span>
      <span>~</span>
      <span style="color: var(--accent)">cat</span>
      <span style="color: #f472b6">README.md</span>
      <span class="terminal-cursor"></span>
    </div>
  </div>

  <div class="cards-grid">
    <div class="info-card">
      <div class="card-header">
        <div class="card-icon">👨‍💻</div>
        <div class="card-title">About</div>
      </div>
      <p style="font-size: 0.95rem; color: var(--secondary-color)">
        程序员 / 折腾党 / 终身学习
      </p>
      <p style="margin-top: 0.75rem; font-family: monospace; font-size: 0.8rem; color: var(--remark-color)">
        $ cat /dev/brain > /dev/stdout
      </p>
    </div>

    <div class="info-card">
      <div class="card-header">
        <div class="card-icon">🛠️</div>
        <div class="card-title">Stack</div>
      </div>
      <div class="skills-wrap">
        <span class="skill-tag">Astro</span>
        <span class="skill-tag">React</span>
        <span class="skill-tag">Vue</span>
        <span class="skill-tag">Python</span>
        <span class="skill-tag">Rust</span>
        <span class="skill-tag">Docker</span>
        <span class="skill-tag">Linux</span>
      </div>
    </div>

    <div class="info-card">
      <div class="card-header">
        <div class="card-icon">📊</div>
        <div class="card-title">Stats</div>
      </div>
      <div class="stats-grid">
        <div class="stat-item">
          <div class="stat-value">∞</div>
          <div class="stat-label">Learning</div>
        </div>
        <div class="stat-item">
          <div class="stat-value">∞</div>
          <div class="stat-label">Building</div>
        </div>
        <div class="stat-item">
          <div class="stat-value">∞</div>
          <div class="stat-label">Breaking</div>
        </div>
      </div>
    </div>
  </div>

  <div class="contact-section">
    <div class="contact-links">
      <a href="https://github.com/Sophomoresty" target="_blank" class="contact-link">
        <span>GitHub</span>
      </a>
      <a href="mailto:hi@sophomoresty.github.io" class="contact-link">
        <span>Email</span>
      </a>
    </div>
  </div>

  <div class="footer">
    <p>© 2026 · Powered by Astro + Coffee</p>
    <p style="margin-top: 0.5rem">
      <a href="https://github.com/Sophomoresty/blog">源码</a>
    </p>
  </div>
</div>
