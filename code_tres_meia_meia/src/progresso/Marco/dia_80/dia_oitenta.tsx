import React, { useState } from "react";

const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    const isVisible = currentScrollPos > 300;
    setIsVisible(isVisible);
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {isVisible && (
        <button onClick={scrollToTop} style={scrollToTopButtonStyle}>
          Topo
        </button>
      )}
    </div>
  );
};

const scrollToTopButtonStyle: React.CSSProperties = {
  position: "fixed",
  bottom: "20px",
  right: "20px",
  padding: "10px",
  borderRadius: "50%",
  backgroundColor: "blue",
  color: "white",
  border: "none",
  cursor: "pointer",
};

export default ScrollToTopButton;
