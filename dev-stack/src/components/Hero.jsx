import bannerText from "../assets/banner-text.png";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero-container">
        {/* Hero Content */}
        <div className="hero-content">
          <h1 className="hero-title">
            Build Your Ideal
            <br />
            <span className="gradient-text">Development Stack</span>
          </h1>

          <p className="hero-description">
            Explore frontend, backend, database, and tooling options.
            Compare them side-by-side and put together the stack that
            fits your next project.
          </p>

          <div className="hero-buttons">
            <a href="#technologies" className="primary-btn">
              Explore Technologies
            </a>

            <a href="#technologies" className="secondary-btn">
              Learn More
            </a>
          </div>
        </div>

        {/* Hero Image */}
        <div className="hero-image">
          <img src={bannerText} alt="Development Stack Illustration" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
