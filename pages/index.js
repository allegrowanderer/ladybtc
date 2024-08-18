import { useEffect, useRef } from 'react';

export default function Home() {
  const sliderRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    let index = 0;
    const slider = sliderRef.current;
    const slides = slider.querySelectorAll('.slide');
    const totalSlides = slides.length;

    const updateSlides = () => {
      slides.forEach((slide, i) => {
        slide.classList.remove('active', 'prev', 'next');
        if (i === index) {
          slide.classList.add('active');
        } else if (i === (index - 1 + totalSlides) % totalSlides) {
          slide.classList.add('prev');
        } else if (i === (index + 1) % totalSlides) {
          slide.classList.add('next');
        }
      });
    };

    const changeSlide = () => {
      index = (index + 1) % totalSlides;
      updateSlides();
    };

    updateSlides(); // Initial setup
    const interval = setInterval(changeSlide, 4000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    let loopStartTime = video.duration - 0.19; // Last 0.6 seconds

    const handleVideoEnd = () => {
      video.currentTime = loopStartTime;
      video.play();
    };

    const handleLoadedMetadata = () => {
      loopStartTime = video.duration - 0.6; // Recalculate in case video length changes
    };

    video.addEventListener('ended', handleVideoEnd);
    video.addEventListener('loadedmetadata', handleLoadedMetadata);

    return () => {
      video.removeEventListener('ended', handleVideoEnd);
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
    };
  }, []);

  return (
    <div>
      {/* Top Banner without Navigation and Logo */}
      <header className="top-banner">
        <div className="container">
          <nav className="nav-links">
            {/* Navigation has been removed for now */}
          </nav>
        </div>
      </header>

      {/* Advanced Slider Section */}
      <div ref={sliderRef} className="advanced-slider">
        <div className="slide">
          <img src="/s1.png" alt="Sneak Peek 1" />
        </div>
        <div className="slide">
          <img src="/s2.png" alt="Sneak Peek 2" />
        </div>
        <div className="slide">
          <img src="/s3.png" alt="Sneak Peek 3" />
        </div>
        <div className="slide">
          <img src="/s4.png" alt="Sneak Peek 4" />
        </div>
        <div className="slide">
          <img src="/s5.png" alt="Sneak Peek 5" />
        </div>
        <div className="slide">
          <img src="/s6.png" alt="Sneak Peek 6" />
        </div>
        <div className="slide">
          <img src="/s7.png" alt="Sneak Peek 7" />
        </div>
        <div className="slide">
          <img src="/s8.png" alt="Sneak Peek 8" />
        </div>
        <div className="slide">
          <img src="/s9.png" alt="Sneak Peek 9" />
        </div>
      </div>

      {/* Text Section */}
      <section className="text-section">
        <h1>LADY is more than just a collection of artwork.</h1>
        <p>LADY will start a cult on ordinals.</p>
        <p>LADY has no promises, no roadmap.</p>
        <p>Supply: 3333</p>
        <p>Price: 0.001 btc</p>
        <p>Date: TBA</p>
      </section>

      {/* Video Section */}
      <div className="video-section">
        <video ref={videoRef} autoPlay muted playsInline className="background-video">
          <source src="/background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Twitter Link Section */}
      <footer className="footer">
        <a href="https://x.com/ladybtc_" target="_blank" rel="noopener noreferrer" className="twitter-link">
          <img src="/xlogo.png" alt="Twitter Logo" className="twitter-logo" />
          Follow us on Twitter
        </a>
      </footer>
    </div>
  );
}
