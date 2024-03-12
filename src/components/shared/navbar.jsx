"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import Entries from './Entries';

export default function Navbar() {
    const [selectedTopic, setSelectedTopic] = useState();
    const handleSelectedTopic = ({ selected }) => {
        setSelectedTopic(selected)
    }
    const entries = [
        { name: "Tecnologías de la Información (TI)", subTopics: [{}] },
        { name: "Emprendimiento e innovación", subTopics: [{}] },
        { name: "Programación para web", subTopics: [{}] },
        { name: "Diseño de software", subTopics: [{}] },
        { name: "Soporte TI", subTopics: [{}] },
    ]
    return (
        <div className="h-full w-full p-4">
            <Link href="#">Informate<span className="text-Orange">+</span></Link>
            {
                entries.map((entrie) => (
                    <Entries Name={entrie.name} handleSelectedTopic={handleSelectedTopic} Clicked={ selectedTopic === entrie.name } Subtopics={entrie.subTopics}/>
                ))
            }
        </div>
    )
}
