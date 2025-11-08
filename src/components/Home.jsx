import React from 'react';
import './Home.css';

// Uses /Hero.png from the public folder. Copy your image to public/Hero.png
const Home = () => {
  return (
    <div className="home">
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            Varnan is where stories find <br /> their voice and form
          </h1>
          <div className="hero-categories">
            <span className="category-highlight">Films</span> . 
            <span>Brands</span> . 
            <span>Art</span>
          </div>
          <p className="hero-description">
            Since 2009, V've been telling stories - stories of people,
            their journeys, and the places that shape them.
            Some begin in polished boardrooms, others in humble
            village squares, but every story starts the same way - by
            listening with intention. V believes it takes trust, patience,
            and an eye for the unseen to capture what truly matters.
            V doesn't just tell stories - V honors them.
          </p>
        </div>
        <div className="mandala-pattern"></div>
      </section>

      <section className="team-section">
        <div className="team-content">
          <div className="note-card">
            <p>
              Some craft films. Some build brands. Some curate art.
              We bring it all together - a collective of storytellers driven by one
              belief: every project deserves to be more than just a message, it should become a
              masterpiece.
              <br /><br />
              From first spark to final frame, from raw ideas to timeless visuals - we shape stories
              that stay with you.
            </p>
          </div>
          <div className="team-info">
            <h2>Take a closer look at the stories V bring to life.</h2>
            <div className="team-categories">
              <div>Film Makers</div>
              <div>Art Curators</div>
              <div>Branding Experts</div>
            </div>
            <button className="view-portfolio">View Portfolio</button>
          </div>
        </div>
      </section>

      <section className="highlight-section">
        <h2>The Highlight Reel</h2>
        <p>Watch the magic we've captured.</p>
        <div className="video-container">
          {/* Video player component would go here */}
        </div>
      </section>

      <section className="portfolio-section">
        <h2>The storyboard reveals the breadth of our craft.</h2>
        <div className="portfolio-grid">
          <div className="portfolio-item">
            <img src="/portfolio1.jpg" alt="Film Production" />
            <span>Film Production</span>
          </div>
          <div className="portfolio-item">
            <img src="/portfolio2.jpg" alt="Art Curation" />
            <span>Art Curation</span>
          </div>
          <div className="portfolio-item">
            <img src="/portfolio3.jpg" alt="Branding" />
            <span>Branding</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;