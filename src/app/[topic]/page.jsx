"use client"
import React from 'react'
import { Error } from "@/components/shared/";
import { articles } from "@/articles/"

export default function MainTopic({ params }) {
    const { topic } = params
    const Article = articles[topic]
    if (Article == undefined) return <Error/>
  return (
      <Article/>
  )
}
