import React from 'react';
import Accordion from './Accordion';
import Link from "next/link";

export default function Entry({ Name, Dir: RootDirection, Clicked, Subtopics, handleSelectedTopic }) {
  console.log(Clicked)
  return (
    <div className="">
      <Accordion RootDirection={RootDirection} handleSelectedTopic={handleSelectedTopic} Clicked={Clicked} Name={Name} />
      <div className="flex flex-col">
      {Clicked && Subtopics && Subtopics.length > 0 ? 
        Subtopics.map((Subtopic, idx) => (
          <SubEntry key={idx} Name={Subtopic.name} handleSelectedTopic={handleSelectedTopic} RootDirection={RootDirection} />
        )) 
        : null
      }
      </div>
    </div>
  );
}

function SubEntry({ Name, RootDirection, handleSelectedTopic }) {
  console.log(Name, RootDirection)
  return (
    <Link onClick={()=>handleSelectedTopic(RootDirection)} href={RootDirection + "/" + Name} className="text-white">{Name}</Link>
    // <p>{Name}</p>
  )
}
