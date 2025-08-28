import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "./about.css";
import Photo from "../assets/About.jpg";

import Brand1 from "../assets/brand1.png";
import Brand2 from "../assets/brand2.png";
import Brand3 from "../assets/brand3.png";
import Brand4 from "../assets/Brand4.png";
import Brand5 from "../assets/Brand5.png";
import Brand6 from "../assets/Brand6.png";
import Brand7 from "../assets/Brand7.png";

// Компонент счётчика
function Counter({ target, label, duration = 3000 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = target / (duration / 16); // шаг (каждые 16мс ~ 60fps)
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        start = target;
        clearInterval(timer);
      }
      setCount(Math.floor(start));
    }, 16);

    return () => clearInterval(timer);
  }, [target, duration]);

  return (
    <div className="counter-item">
      <h3>{count}+</h3>
      <p>{label}</p>
    </div>
  );
}

function About() {
  const { t } = useTranslation("about");

  // Массив брендов объявляем здесь
  const brands = [Brand1, Brand2, Brand3, Brand4, Brand5, Brand6, Brand7];

  return (
    <div className="about-page">
      <div className="top1"></div>

      {/* Фото */}
      <div className="about-image">
        <img src={Photo} alt="About us" />
      </div>

      {/* Текст и счётчики */}
      <div className="about-text">
        <h2>{t("about")}</h2>
        <p style={{ whiteSpace: "pre-wrap" }}>{t("text")}</p>
        <div className="counters">
          <Counter target={6} label="Years of Experience" />
          <Counter target={120} label=" Satisfied Clients" />
          <Counter target={340} label="Completed Projects" />
        </div>
      </div>

      {/* Логотипы брендов */}
      <div className="brands-section">
        <div className="brands-track">
          {[...brands, ...brands].map((brand, index) => (
            <div className="brand-item" key={index}>
              <img src={brand} alt={`Brand ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;