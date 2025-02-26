import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";


const videos = [
  "/videos/service-1.mp4",
  "/videos/service-2.mp4",
  "/videos/service-3.mp4",
  "/videos/service-4.mp4",
];

const HeroSection = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [nextVideoIndex, setNextVideoIndex] = useState(1);
  const centerVideoRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      centerVideoRef.current,
      { scale: 0.5, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1 }
    );
  }, [nextVideoIndex]);

  const handleVideoClick = () => {
    gsap.to(centerVideoRef.current, {
      scale: 1.5,
      opacity: 0,
      duration: 1,
      onComplete: () => {
        setCurrentVideoIndex(nextVideoIndex);
        setNextVideoIndex((prev) => (prev + 1) % videos.length);
      },
    });
  };

  return (
    <div className="hero-section">
      {/* Fullscreen Video */}
      <video key={videos[currentVideoIndex]} autoPlay loop muted className="fullscreen-video">
        <source src={videos[currentVideoIndex]} type="video/mp4" />
      </video>
      
      {/* Center Video Thumbnail */}
      <div
        ref={centerVideoRef}
        className="center-video"
        onClick={handleVideoClick}
      >
        <video key={videos[nextVideoIndex]} autoPlay loop muted className="preview-video">
          <source src={videos[nextVideoIndex]} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default HeroSection;
