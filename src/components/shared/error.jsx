import React from 'react'
import Image from 'next/image';
import { Typewriter } from "@/components/shared/";
export default function Error() {
  return (
    <div className="w-full h-full flex justify-center items-center">
        <Typewriter text="Error 404" typingSpeed={150} type="superheading"/>
    </div>
  )
}
