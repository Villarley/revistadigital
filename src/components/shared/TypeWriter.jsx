"use client"
import React, { useState, useEffect } from 'react';
const TypewriterOnce = ({ text, typingSpeed }) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setDisplayedText((prev) => prev + text.charAt(index));
      index += 1;
      if (index === text.length) clearInterval(timer);
    }, typingSpeed);

    return () => clearInterval(timer); // Limpieza en caso de desmontaje
  }, [text, typingSpeed]);

  return <span>{displayedText}</span>;
};
export default TypewriterOnce;