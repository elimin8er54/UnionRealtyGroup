import React, { useEffect, useRef, useState } from "react";

interface Props {
  children: {};
}

function FadeInSection(props: Props) {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef();

  const imageScroll = () => {
    if (isInViewport(domRef.current)) {
      setVisible(true);
    }
  };


  function isInViewport(el: HTMLElement) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top <=
      (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  useEffect(() => {
    window.addEventListener("scroll", imageScroll);
    return () => { window.removeEventListener("scroll", imageScroll) };
  }, []);
  return (
    <div
      className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
      ref={domRef}
    >
      {props.children}
    </div>
  );
}

export default FadeInSection;
