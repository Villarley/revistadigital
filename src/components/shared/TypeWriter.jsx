'use client'
import React, { useState, useEffect, useRef } from 'react'
import { Code, H1, Superheading } from "@/components/shared/Text"


const Typewriter = ({ text, typingSpeed, type }) => {
  const [displayedText, setDisplayedText] = useState('')
  const indexRef = useRef(0)

  useEffect(() => {
    console.log('Starting Typewriter effect for:', text)
    indexRef.current = 0 

    const timer = setInterval(() => {
      const isComplete = appendNextChar()
      if (isComplete) clearInterval(timer)
    }, typingSpeed)
    const appendNextChar = () => {
      const currentChar = text.charAt(indexRef.current)
      console.log(currentChar)
      setDisplayedText((prev) => prev + currentChar)
      indexRef.current++ 
      if (indexRef.current > text.length) {
        console.log('Completed typing')
        return true
      }
      return false 
    }
    return () => clearInterval(timer)
  }, [text, typingSpeed])

  switch (type) {
    case "code":
      return <Code>{displayedText}</Code>
    case "heading":
      return <H1>{displayedText}</H1>
    case "superheading":
      return <Superheading>{displayedText}</Superheading>
    default:
      return <p>{displayedText}</p>
  }
}

export default Typewriter

