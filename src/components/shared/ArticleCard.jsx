import React from "react"
import { H2, NormalText, Code } from "@/components/shared/Text"
import { Flex } from "@chakra-ui/react"
export default function ArticleCard({ title, description, example, image, color }) {
  return (
    <Flex flexDirection="column" justifyContent="left">
      <H2>{ title }</H2>
      <NormalText>{ description }</NormalText>
      <Code color={color}>{ example } </Code>
    </Flex>
  )
}
