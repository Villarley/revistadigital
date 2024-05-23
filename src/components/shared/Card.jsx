import React from 'react'
import Image from 'next/image'
import { CircleChevronRight } from 'lucide-react'
import Link from 'next/link'

export default function Card({ title, img, root, dir, linkInsideMagazine }) {
  return (
    <div
    className="rounded-md bg-[#fff] shadow flex flex-col items-center"
  >
    <Image
      height={100}
      width={100}
      src={img}
      alt=""
      className=" rounded-t-md w-full h-1/2"
    />
    <h3 className="mt-2 text-lg font-semibold">{title}</h3>
    <Link className="" href={linkInsideMagazine ? root+"/"+dir : dir}>
    <CircleChevronRight className="hover:scale-125" color='#ff8000'/>
    </Link>
  </div>
  )
}
