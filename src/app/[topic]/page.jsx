"use client"
import React from 'react'
import { H1 } from "@/components/shared/Text" 
import { Typewriter } from "@/components/shared/";
import { Error } from "@/components/shared/";
import { articles } from "@/articles/articles"

export default function MainTopic({ params }) {
    const { topic } = params
    const Article = articles[topic]
    if (Article == undefined) return <Error/>
  return (
      <Article/>
  )
}
