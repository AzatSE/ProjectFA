import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ ScrollToTop';
import './App.css';
// Lazy pages
const HomePage = lazy(() => import('./pages/HomePage'));
const Tutorials = lazy(() => import('./pages/Tutorials'));
const Luts = lazy(() => import('./pages/Luts'));
const About = lazy(() => import('./pages/About'));
const Contacts = lazy(() => import('./pages/Contacts'));
const Works = lazy(() => import('./pages/Works'));
const VideoPlayerPage = lazy(() => import('./pages/VideoPlayerPage'));

// Optional: Lazy components if needed
// const BeforeAfterSlider = lazy(() => import('./components/BeforeAfterSlider'));
// const TwoCardSection = lazy(() => import('./components/TwoCardSection'));

function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop />

      <Suspense
        fallback={
          <div className="loading-screen">
            <img src="/loading.gif" alt="Loading..." className="loading-gif" />
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tutorials" element={<Tutorials />} />
          <Route path="/luts" element={<Luts />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/works" element={<Works />} />
          <Route path="/works/:id" element={<VideoPlayerPage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;