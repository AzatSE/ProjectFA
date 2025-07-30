import React from 'react';
import './FourthSection.css';

import Img1 from '../assets/After2.jpg'
import Img2 from '../assets/After3.jpg'

export default function FourthSection() {
    return (
      <section className="fourth-section">
        {[{
          img: Img1,
          title: "FilmAugustin LUT",
          desc: (
            <>
              Filmkid 16 LUTs (for 7 camera profiles)<br />
              ⁠3x custom Grain Overlays (+ / ++ / +++)<br />
              ⁠1x Film Damage Overlay<br />
              ⁠Tutorial Video<br />
              Example Grading Clips<br />
              Installation Guide (PDF)<br />
              Exclusive Color Settings Guide (PDF)<br />
              Monitoring LUTs<br />
            </>
          ),
          price: "$89.00",
        }, {
          img: Img2,
          title: "FilmAugustin Powergrade",
          desc: (
            <>
              Filmkid 16 PowerGrade (.drx + .dpx)<br />
              Tutorial Video<br />
              Full Grading Walkthrough<br />
              Example Grading Clips<br />
              Installation Guide (PDF)<br />
              Exclusive Color Settings Guide (PDF)<br />
              Monitoring LUTs<br />
            </>
          ),
          price: "$79.00",
        }].map((item, i) => (
          <div key={i} className="product-wrapper">
            <div className="product-card" style={{ backgroundImage: `url(${item.img})` }}>
              <div className="card-overlay" />
              <div className="card-info">
                <h2>{item.title}</h2>
                <p>{item.desc}</p>
                <div className="card-bottom">
                  <span className="price">{item.price}</span>
                </div>
              </div>
            </div>
  
            {/* Кнопка вне карточки, выходит за границы */}
            <div className="button-wrapper">
              <button className="buy-button">Buy Now</button>
            </div>
          </div>
        ))}
      </section>
    );
  }