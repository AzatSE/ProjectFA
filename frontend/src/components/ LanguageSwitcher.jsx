import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import './Lang.css';

const languages = [
  { code: 'en', label: 'English' },
  { code: 'ru', label: 'Русский' },
  { code: 'es', label: 'Español' },
  { code: 'uz', label: "O‘zbekcha" },
  { code: 'ja', label: '日本語'},
];

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef();

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('language', lng);
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const currentLang = languages.find(lang => lang.code === i18n.language);

  return (
    <div className="language-switcher" ref={menuRef}>
      <button className="lang-toggle-btn" onClick={toggleMenu}>
        {currentLang ? currentLang.code.toUpperCase() : i18n.language.toUpperCase()}
      </button>
      {menuOpen && (
        <div className="lang-menu">
          {languages
            .filter(lang => lang.code !== i18n.language)
            .map(lang => (
              <button key={lang.code} onClick={() => changeLanguage(lang.code)}>
                {lang.label}
              </button>
            ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;