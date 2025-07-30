import './Home.css';
// import stars from '../assets/stars.mp4';

import Home from '../assets/Home.mp4'
import redge from '../assets/REdge.png'
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import Before1 from '../assets/Before1.jpg';
import After1 from '../assets/After1.jpg';
import Before2 from '../assets/Before2.jpg';
import After2 from '../assets/After2.jpg';
import Before3 from '../assets/Before3.jpg';
import After3 from '../assets/After3.jpg';
import Before4 from '../assets/Before4.jpg';
import After4 from '../assets/After4.jpg';
import TwoCardSection from '../components/TwoCardSection';
import Second from '../assets/second.mp4'
import ReviewSection from '../components/ReviewSection';
import Fou from '../components/FourthSection'; 
import { useLocation, useNavigationType } from "react-router-dom";
import { useEffect, useRef } from "react";

export default function HomePage() {
  const location = useLocation();
  const lutsRef = useRef(null);
  const shouldScroll = useRef(location.state?.scrollToLuts || false);

  useEffect(() => {
    if (!shouldScroll.current) return;

    const scrollToLuts = () => {
      const el = document.getElementById("luts");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        shouldScroll.current = false;
        return true;
      }
      return false;
    };

    // Попробовать сразу
    if (scrollToLuts()) return;

    // Если нет — ждать появления через MutationObserver
    const observer = new MutationObserver(() => {
      if (scrollToLuts()) observer.disconnect();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="home-container">
      {/* Видеосекция — 1 экран */}
      <section className="video-section">

        <video autoPlay muted loop playsInline className="background-video">
        <source src={Second} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="overlay-content">
          <h1 className="hero-title">FILMAUGUSTIN</h1>
          <h2 className="hero-subtitle">FULL-SERVICE VIDEO PRODUCTION</h2>
          <button className="order-button">Start Filming Now</button>
          <p className="hero-caption">FilmAugustin brings a classic 16mm film look to any editing software. Simply drag and drop to add cinematic grain and color to your footage, achieving a vintage aesthetic in modern digital formats.</p>
        </div>
        <div className="dark-overlay" />
        
        <div className="content">
        <img src={redge} className="ripped-edge" />
        </div>
      </section>


      
      
      <section id="luts" ref={lutsRef} className="divider-section">
        <div className="section-inner">
          
        </div>
        <TwoCardSection />
      </section>

  



      <section className="second-section">
        <div className="container">
          <div className="slider-grid">
            <BeforeAfterSlider 
              beforeImage={Before1} 
              afterImage={After1}
              beforeLabel="BEFORE"
              afterLabel="AFTER"
            />
            <BeforeAfterSlider 
              beforeImage={Before2} 
              afterImage={After2}
              beforeLabel="BEFORE"
              afterLabel="AFTER"
            />
            <BeforeAfterSlider 
              beforeImage={Before3} 
              afterImage={After3}
              beforeLabel="BEFORE"
              afterLabel="AFTER"
            />
            <BeforeAfterSlider 
              beforeImage={Before4} 
              afterImage={After4}
              beforeLabel="BEFORE"
              afterLabel="AFTER"
            />
          </div>
        </div>
      </section>

      <section>
        <div className='ReviewSec'>
        <ReviewSection/>

        </div>
      </section>


      <section className="Fourth">
        <div className="card-wrapper-unique">
          <Fou/>
        </div>
      </section>




      {/* Футер */}
      {/* <footer className="footer">
  <div className="footer-container">
    <div className="footer-section">
      <h3>About Us</h3>
      <ul>
        <li><a href="#">Our Team</a></li>
        <li><a href="#">Story</a></li>
        <li><a href="#">Careers</a></li>
      </ul>
    </div>
    <div className="footer-section">
      <h3>Support</h3>
      <ul>
        <li><a href="#">FAQ</a></li>
        <li><a href="#">Contact Us</a></li>
        <li><a href="#">Support</a></li>
      </ul>
    </div>
    <div className="footer-section">
      <h3>Legal</h3>
      <ul>
        <li><a href="#">Privacy Policy</a></li>
        <li><a href="#">Terms & Conditions</a></li>
        <li><a href="#">Cookies</a></li>
      </ul>
    </div>
  </div>
  <div className="footer-bottom">
  <p>&copy; 2025 FilmAUGUSTIN. All rights reserved.</p>
  </div>
</footer> */}
    </div>
  );
}