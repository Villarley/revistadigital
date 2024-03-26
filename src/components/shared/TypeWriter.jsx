'use client'
import React, { useState, useEffect } from 'react';
import { Code, H1, Superheading } from "@/components/shared/Text";

const Typewriter = ({ text, typingSpeed, type }) => {
  const [displayedText, setDisplayedText] = useState('');
  console.log(text.charAt(2))
  useEffect(() => {
    console.log('Starting Typewriter effect for:', text);
    let index = 0;
    const timer = setInterval(() => {
      console.log(`Adding letter: ${text.charAt(index)} at index: ${index}`);
      setDisplayedText((prev) => prev + text.charAt(index));
      index++;
      if (index === text.length + 1) {
        console.log('Completed typing');
        clearInterval(timer);
      }
    }, typingSpeed);

    return () => clearInterval(timer); // Limpieza en caso de desmontaje
  }, [text, typingSpeed]);

  console.log('Rendered Text:', displayedText);

  switch (type) {
    case "code":
      return <Code>{displayedText}</Code>;
    case "heading":
      return <H1>{displayedText}</H1>;
    case "superheading":
      return <Superheading>{displayedText}</Superheading>;
    default:
      return <p>{displayedText}</p>;
  }
};

export default Typewriter;
