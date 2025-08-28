import React from 'react';
import './ReviewSection.css';

export default function ReviewSection() {
  return (
    <section className="review-container">
      <div className="review-card">
      <div className="review-author">
          <img src="https://img.freepik.com/free-photo/portrait-young-male-professor-education-day_23-2150980044.jpg" alt="User 1" className="review-avatar" />
          <span className="review-name">Hills</span>
        </div>
        <p className="review-text">
          "I used the LUT on a short film and it instantly brought cinematic quality."
        </p>
        <div className="stars">
            <span className="star">★</span>
            <span className="star">★</span>
            <span className="star">★</span>
            <span className="star">★</span>
            <span className="star">★</span>
          </div>
      </div>

      <div className="review-card middle-review">
        <div className="review-author">
          <img src="https://img.freepik.com/free-photo/portrait-young-male-professor-education-day_23-2150980067.jpg" alt="User 2" className="review-avatar" />
          <span className="review-name">Brandon</span>
        </div>
        <p className="review-text">
      «I’ve tried countless LUTs over the years — most of them either crush the blacks too hard or oversaturate skin tones.»
        </p>
        <div className="stars">
            <span className="star">★</span>
            <span className="star">★</span>
            <span className="star">★</span>
            <span className="star">★</span>
            <span className="star">★</span>
          </div>
      </div>

      <div className="review-card">
        <div className="review-author">
          <img src="https://img.freepik.com/free-photo/portrait-king-medieval-times_23-2150931969.jpg?semt=ais_hybrid&w=740" alt="User 3" className="review-avatar" />
          <span className="review-name">Jack</span>
        </div>
        <p className="review-text">
          "These tools save me hours in post-production. I use them on every client project."
        </p>
        <div className="stars">
            <span className="star">★</span>
            <span className="star">★</span>
            <span className="star">★</span>
            <span className="star">★</span>
            <span className="star">★</span>
          </div>
      </div>
    </section>
  );
}