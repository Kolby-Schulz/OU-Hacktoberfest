import './App.css'

function App() {
  return (
    <>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Hacktoberfest at OU home">
          <span className="wordmark-ou">OU</span>
          <span>HACKTOBERFEST</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#prizes">Prizes</a>
          <a href="#faq">FAQ</a>
        </nav>
        <a className="header-link" href="#details">Event details <span aria-hidden="true">↘</span></a>
      </header>

      <main>
        <section className="hero" id="top">
          <div className="hero-inner">
            <p className="eyebrow"><span className="live-dot" /> University of Oklahoma · Norman, OK</p>
            <h1>Hacktoberfest<br /><span>at OU.</span></h1>
            <div className="hero-bottom">
              <p className="hero-copy">A month for making things, sharing what you know, and finding your people in open source.</p>
              <a className="primary-link" href="#about">Explore the event <span aria-hidden="true">↘</span></a>
            </div>
            <span className="hero-mark" aria-hidden="true">10</span>
            <span className="hero-coordinate" aria-hidden="true">35°12' N<br />97°26' W</span>
          </div>
          <div className="hero-index" aria-hidden="true"><span>01</span><span>OPEN SOURCE, OPEN TO ALL</span><span>OCTOBER</span></div>
        </section>

        <section className="facts" id="details" aria-label="Event details">
          <div className="fact"><span className="fact-label">When</span><strong>To be announced</strong></div>
          <div className="fact"><span className="fact-label">Where</span><strong>To be announced</strong></div>
          <div className="fact"><span className="fact-label">Cost</span><strong>To be announced</strong></div>
          <p className="facts-note">Event details are being finalized.</p>
        </section>

        <section className="about section-wrap" id="about">
          <div className="section-heading">
            <p className="eyebrow">THE IDEA / 01</p>
            <h2>Make something<br />that matters.</h2>
          </div>
          <div className="about-copy">
            <p>Hacktoberfest is a celebration of open source and the people who make it possible. Join the OU community to learn, contribute, and build alongside other curious minds.</p>
            <p className="muted-copy">More on the format, participation, and what to bring will be posted here as plans are confirmed.</p>
            <a className="text-link" href="https://hacktoberfest.com/" target="_blank" rel="noreferrer">Explore the global event <span aria-hidden="true">↗</span></a>
          </div>
        </section>

        <section className="prizes-band" id="prizes">
          <div className="section-wrap prizes-inner">
            <div>
              <p className="eyebrow">THE GOOD STUFF / 02</p>
              <h2>Good work<br />gets noticed.</h2>
            </div>
            <div className="prize-note">
              <span className="prize-star" aria-hidden="true">✳</span>
              <p>Prize details are<br />coming soon.</p>
              <span className="prize-caption">Check back for updates</span>
            </div>
          </div>
        </section>

        <section className="faq section-wrap" id="faq">
          <div className="section-heading">
            <p className="eyebrow">GOOD TO KNOW / 03</p>
            <h2>On your<br />mind?</h2>
          </div>
          <div className="faq-list">
            <details>
              <summary>When is the event?</summary>
              <p>The date and schedule will be announced soon.</p>
            </details>
            <details>
              <summary>Who can attend?</summary>
              <p>Eligibility and registration information are coming soon.</p>
            </details>
            <details>
              <summary>Do I need open-source experience?</summary>
              <p>Event participation details are being finalized. Check back for guidance for first-time contributors.</p>
            </details>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <a className="wordmark footer-wordmark" href="#top"><span className="wordmark-ou">OU</span><span>HACKTOBERFEST</span></a>
        <span>University of Oklahoma · Norman, Oklahoma</span>
        <a href="#top">Back to top ↑</a>
      </footer>
    </>
  )
}

export default App
