import React from 'react';
import './TwoCardSection.css';

export default function TwoCardSection() {
  return (
    <section className="two-card-section">
      <div className="card">
        <div className="card-text">
          <h2 className="card-title">FilmAugustin LUT</h2>
          <p className="card-subtitle">Simple drag and drop the LUT for any video editing software.Works with Premiere Pro, After Effects, Final Cut and Cap Cut</p>
        </div>
        <img
          src="https://filmkid.com/cdn/shop/files/LUT_Preview_Icon_-_Hover_GIFSKI_ed540193-2d15-4254-a4f0-071e93e8b2c3.gif?v=1750691361&width=3200"
          alt="Left illustration"
          className="card-image left"
        />
      </div>

      <div className="card">
        <div className="card-text">
          <h2 className="card-title">FilmAuguitine Powergrade</h2>
          <p className="card-subtitle">Our custom Davinci resolve powergrade made for even more control and customization over your final look</p>
        </div>
        <img
          src="https://filmkid.com/cdn/shop/files/NODE_GRAPH_-_HOVER.gif?v=1750634286&width=3200"
          alt="Right illustration"
          className="card-image"
        />
      </div>
    </section>
  );
}
