import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link, useLocation } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const pathname = location.pathname;
  const isHome = pathname === "/";
  const isVideoCard = pathname.startsWith("/works/");
  const [showBlackBg, setShowBlackBg] = useState(false);
  const [hideNavbar, setHideNavbar] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showSolidBg, setShowSolidBg] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollingUp = currentScrollY < lastScrollY;
      const scrolledEnough = currentScrollY > 80;
  
      if (scrolledEnough && !scrollingUp) {
        setHideNavbar(true); // скролл вниз — прячем
      } else {
        setHideNavbar(false); // скролл вверх — показываем
      }
  
      if (isHome) {
        setShowBlackBg(scrolledEnough && scrollingUp);
        setShowSolidBg(currentScrollY > 1);
      } else if (isVideoCard) {
        setShowBlackBg(true);
        setShowSolidBg(true);
      } else {
        setShowBlackBg(scrolledEnough);
        setShowSolidBg(true);
      }
  
      setLastScrollY(currentScrollY);
    };
  
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, isHome, pathname]);
  useEffect(() => {
    setShowBlackBg(!isHome);
  }, [location.pathname]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (menuOpen && isMobile) {
      document.body.style.overflow = "hidden";
      document.body.classList.add("no-scroll");
    } else {
      document.body.style.overflow = "auto";
      document.body.classList.remove("no-scroll");
    }
  }, [menuOpen, isMobile]);

  const handleLutsClick = (e) => {
    if (location.pathname === "/") {
      e.preventDefault();
      const el = document.getElementById("luts");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/", { state: { scrollToLuts: true } });
    }
  
    if (menuOpen) setMenuOpen(false);
  };
  return (
    <>
      <div
        className={`navbar-bg 
          ${showBlackBg ? "slide-down" : ""} 
          ${hideNavbar ? "hide-navbar" : ""} 
          ${showSolidBg || isVideoCard ? "navbar--solid" : ""}`}
      />
      <nav className={`navbar ${hideNavbar ? "hide-navbar" : ""}`}>
        {isMobile && (
          <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
            ☰
          </div>
        )}

        <div className="navbar-section left">
          <Link className="nav-link" to="/works">WORKS</Link>
          {/* <Link className="nav-link" to="/tutorials">COURSES</Link> */}
          <Link className="nav-link" to="/" onClick={handleLutsClick}>
          LUTs / PG
          </Link>
        </div>

        <div className="navbar-logo">
        <Link
  className="navbar-logo"
  to="/"
  onClick={(e) => {
    if (location.pathname === "/") {
      e.preventDefault(); // не перезагружаем страницу
      window.scrollTo({ top: 0, behavior: "smooth" }); // плавный скролл вверх
    } else {
      navigate("/"); // обычный переход
    }

    if (menuOpen) setMenuOpen(false); // закрыть мобильное меню, если открыто
  }}
>
  FILMAUGUSTIN
</Link>
        </div>

        <div className="navbar-section right">
          <Link className="nav-link" to="/about">ABOUT</Link>
          <Link className="nav-link" to="/products">ORDER NOW</Link>
          {/* <Link className="nav-link" to="/contacts">CONTACTS</Link> */}
        </div>
      </nav>

      {menuOpen && isMobile && (
        <div className="mobile-menu">
          <div className="close-button" onClick={() => setMenuOpen(false)}>✕</div>
          <Link className="mobile-link" to="/" onClick={() => setMenuOpen(false)}>HOME</Link>
          <Link className="mobile-link" to="/products" onClick={() => setMenuOpen(false)}>PORTFOLIO</Link>
          <Link className="mobile-link" to="/contacts" onClick={() => setMenuOpen(false)}>SOCIAL MEDIA</Link>
          <Link className="mobile-link" to="/" onClick={() => setMenuOpen(false)}>ABOUT</Link>
          <Link className="mobile-link" to="/products" onClick={() => setMenuOpen(false)}>PRODUCTS</Link>
          <Link className="mobile-link" to="/contacts" onClick={() => setMenuOpen(false)}>CONTACTS</Link>
        </div>
      )}
    </>
  );
}