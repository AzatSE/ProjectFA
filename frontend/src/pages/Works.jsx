import { useEffect, useState, useRef } from "react";
import "./works.css";
import VideoCard from "../components/VideoCard";
import { useTranslation } from "react-i18next"; 
import background from '../assets/backgroundwhite.jpg';
// function AnimatedTitle({ text }) {
//   return (
//     <h1 className="cinematic-letter-title">
//       {text.split("").map((char, index) => (
//         <span
//           key={index}
//           className="letter"
//           style={{ animationDelay: `${index * 0.035}s` }}  // быстро!
//         >
//           {char === " " ? "\u00A0" : char}
//         </span>
//       ))}
//     </h1>
//   );
// }
function Works() {
  const [videos, setVideos] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [animateHeader, setAnimateHeader] = useState(false);

  const { i18n } = useTranslation(); // ✅ получаем доступ к i18n
  const language = i18n.language || "en"; // ✅ всегда актуальный язык

  useEffect(() => {
    fetch("http://localhost:8000/api/videos/", {
      headers: {
        'Accept-Language': language, // ✅ передаем актуальный язык
      },
    })
      .then((res) => res.json())
      .then(setVideos)
      .catch(console.error); 

    fetch("http://localhost:8000/api/categories/", {
      headers: {
        'Accept-Language': language,
      },
    })
      .then((res) => res.json())
      .then(setCategories)
      .catch(console.error);

    setTimeout(() => setAnimateHeader(true), 100);
  }, [language]); 


  const smoothScrollTo = (targetY, duration = 1000) => {
    const startY = window.scrollY;
    const distance = targetY - startY;
    const startTime = performance.now();
  
    const step = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1); // 0 → 1
      const ease = easeInOutQuad(progress); // плавное замедление
      window.scrollTo(0, startY + distance * ease);
  
      if (elapsed < duration) {
        requestAnimationFrame(step);
      }
    };
  
    requestAnimationFrame(step);
  };
  
  const easeInOutQuad = (t) =>
    t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

  const videoSectionRef = useRef(null);
  const hasScrolled = useRef(false);
  const scrollToVideos = () => {
    if (videoSectionRef.current) {
      videoSectionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  };




  const filteredVideos = videos.filter((video) => {
    const matchesCategory =
      selectedCategory === null ||
      video.category?.id === selectedCategory;
  
    const matchesSearch =
    (video.title?.toLowerCase().includes(searchTerm.toLowerCase()) || false) ||
    (video.description?.toLowerCase().includes(searchTerm.toLowerCase()) || false);
  
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      {/* <header className="page-header cinematic">
        <div className="page-header-content">
          <AnimatedTitle text="Cinematic Studio" />
          <p className="page-subtitle">
          Personal and commercial video work, focused on clean style and rhythm.
            <br />
            Each piece here reflects a focus on clean visuals, tone, and pacing.
          </p>
        </div>
      </header> */}

      {/* <div className="filter-section">
        <div className="filter-content">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          <div className="category-buttons">
            <button
                onClick={() => {
                  setSelectedCategory(null);
                  if (!hasScrolled.current) {
                      scrollToVideos();
                      hasScrolled.current = true;
                  }
                }}
              className={`category-button ${selectedCategory === null ? "selected" : ""}`}
            >
              All
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setSelectedCategory(cat.id);

                  if (!hasScrolled.current) {
                      scrollToVideos();
                      hasScrolled.current = true;
                  }
                }}
                
                className={`category-button ${selectedCategory === cat.id ? "selected" : ""}`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </div> */}
      <div className="top">
      </div>
      <div className="top2">
      </div>


      <div className="grid-container">
        {filteredVideos.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
    </>
  );
}

export default Works;