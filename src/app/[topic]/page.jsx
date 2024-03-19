"use client"
import React from 'react'
import { H1 } from "@/components/shared/Text" 
import { Typewriter } from "@/components/shared/";
import { articles } from "@/articles/articles"

export default function MainTopic({ params }) {
    const { topic } = params
    const article = prweb[topic]
  return (
    
      <Typewriter text="Solo se escribe una vez." typingSpeed={150}/>
  )
}
