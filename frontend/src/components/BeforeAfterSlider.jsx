import React, { useState, useRef, useEffect } from 'react';
import './BeforeAfterSlider.css';

const BeforeAfterSlider = ({ 
  beforeImage, 
  afterImage, 
  beforeLabel = "BEFORE", 
  afterLabel = "AFTER" 
}) => {
  const [sliderPosition, setSliderPosition] = useState(27);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const MIN_POSITION = 5;
  const MAX_POSITION = 95;

  const updateSliderPosition = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const rawPercentage = (x / rect.width) * 100;
    const clamped = Math.max(MIN_POSITION, Math.min(MAX_POSITION, rawPercentage));
    setSliderPosition(clamped);
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    updateSliderPosition(e);
  };

  const handleMouseMove = (e) => {
    if (isDragging) updateSliderPosition(e);
  };

  const handleMouseUp = () => setIsDragging(false);

  const handleTouchStart = (e) => {
    setIsDragging(true);
    updateSliderPosition(e.touches[0]);
  };

  const handleTouchMove = (e) => {
    if (isDragging) {
      e.preventDefault();
      updateSliderPosition(e.touches[0]);
    }
  };

  const handleTouchEnd = () => setIsDragging(false);

  const handleClick = (e) => {
    if (isDragging) return; // чтобы не конфликтовало с drag
    updateSliderPosition(e);
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      document.addEventListener('touchmove', handleTouchMove, { passive: false });
      document.addEventListener('touchend', handleTouchEnd);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isDragging]);

  return (
    <div
      className="before-after-container"
      ref={containerRef}
      onClick={handleClick}
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
        >
      {/* Before Image */}
      <div className="before-image-container"
      style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <img src={beforeImage} alt="Before" className="comparison-image" />
        <div className="image-label before-label">{beforeLabel}</div>
      </div>

      {/* After Image */}
      <div 
        className="after-image-container" 
        style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}
      >
        <img src={afterImage} alt="After" className="comparison-image" />
        <div className="image-label after-label">{afterLabel}</div>
  
      </div>
       
        
      {/* Slider */}
      <div className="slider-line" style={{ left: `${sliderPosition}%` }}>
        {/* <div
          className="slider-handle"
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
        >
          <div className="slider-arrow left-arrow">‹</div>
          <div className="slider-arrow right-arrow">›</div>
        </div> */}
      </div>
    </div>
  );
};

export default BeforeAfterSlider;