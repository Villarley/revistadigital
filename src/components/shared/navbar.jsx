"use client"
import "animate.css"
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Entry from './Entries'
import { prwebArticles } from "@/articles/prweb";

export default function Navbar() {
    const [selectedTopic, setSelectedTopic] = useState()
    const pathname = usePathname()
    const handleSelectedTopic = ( selected ) => {
        setSelectedTopic(selected)
    }
    const topics = [
        { name: "Tecnologías de la Información", subTopics: [{}], dir:"/tics" },
        { name: "Emprendimiento e innovación", subTopics: [{}], dir:"/emp" },
        { name: "Programación para web", subTopics: prwebArticles, dir:"/prweb" },
        { name: "Diseño de software", subTopics: [{}], dir:"/disoft" },
        { name: "Soporte TI", subTopics: [{}], dir:"/soporte" },
    ]
    // const string = pathname.split("/")
    // const firstPath = "/"+string[ pathname.startsWith("/") ? 1 : 0]
    // useEffect(() => {
    //     if(!string[1] == "" ){
    //         setSelectedTopic(firstPath)
    //     }
    // }, [setSelectedTopic, firstPath, string])
    return (
        <div className="h-full w-full p-4 flex flex-col gap-8 animate__animated animate__fadeInRight">
            <Link href="/" className="text-white text-3xl text-center w-full">Infórmate<span className="text-Orange font-bold">+</span></Link>
            <div className="flex flex-col gap-8">
            {
                topics.map((topic, idx) => (
                    <Entry key={idx} Name={topic.name} Dir={topic.dir} handleSelectedTopic={handleSelectedTopic} Clicked={ selectedTopic === topic.dir } Subtopics={topic.subTopics}/>
                ))
            }
            </div>
        </div>
    )
}
