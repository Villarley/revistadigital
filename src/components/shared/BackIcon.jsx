import React from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"


export default function BackIcon() {
  return (
    <Link href={"/prweb"}>
    <ArrowLeft/>
    </Link>
  )
}
