import React from "react";

function DisplaySection({ triggerPreview }) {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="display-section wrapper">
      <h2 className="title">iPhone14Pro</h2>
      <p className="text">Pro.Beyond.</p>
      <span className="description">
        A magical way to interact with your iPhone. A vital safety feature
        designed to save lives. An innovative 48MP Main camera. And a display
        that's up to 2x brighter in the sun. All powered by the ultimate
        smartphone chip.
      </span>
      <button className="button" onClick={triggerPreview}>
        Try me!
      </button>
      <button className="back-button" onClick={handleScrollToTop}>
        TOP
      </button>
    </div>
  );
}

export default DisplaySection;
