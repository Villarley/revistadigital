import React from 'react'
import { Error } from "@/components/shared/";
import { prwebArticles } from "@/articles/prweb"

export default function Topic({ params }) {
    const { subTopic } = params
    console.log(subTopic)
    const Article = prwebArticles[subTopic].article
    if (Article == undefined) return <Error/>
  return (
      <Article/>
  )
}
