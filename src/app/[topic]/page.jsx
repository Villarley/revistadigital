"use client"
import React from 'react'
import { H1 } from "@/components/shared/headings/";
import { prweb } from "@/static/prweb";

export default function MainTopic({params}) {
    const { topic } = params
    console.log(params)
  return (
    <>
    <H1>{prweb.title}</H1>
    </>
  )
}
