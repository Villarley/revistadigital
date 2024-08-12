import { Error } from "@/components/shared/"
import { prwebArticles } from "@/articles/prweb"
import { TicsArticles } from "@/articles/tics"

const articlesSources = [prwebArticles, TicsArticles]

function findArticle(topic, subTopic) {
  for (const source of articlesSources) {
    if (source[subTopic]) {
      return source[subTopic].article
    }
    if (source[topic] && source[topic][subTopic]) {
      return source[topic][subTopic].article
    }
  }
  return undefined
}

export default function Topic({ params }) {
  const { subTopic, topic } = params

  console.log(topic)

  const Article = findArticle(topic, subTopic)

  if (!Article) return <Error/>

  return (
    <Article/>
  )
}
