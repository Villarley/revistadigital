import React from 'react';
import Accordion from './Accordion';
import Link from "next/link";

export default function Entry({ Name, Dir: RootDirection, Clicked, Subtopics, handleSelectedTopic }) {
  console.log(Object.entries(Subtopics))
  return (
    <div className="">
      <Accordion RootDirection={RootDirection} handleSelectedTopic={handleSelectedTopic} Clicked={Clicked} Name={Name} />
      <div className="flex flex-col gap-6 justify-center">
      {Clicked && Subtopics ? 
        Object.entries(Subtopics).map(([name, info], idx) => (
          <SubEntry key={idx} dir={name} Name={info.name} handleSelectedTopic={handleSelectedTopic} RootDirection={RootDirection} />
        )) 
        : null
      }
      </div>
    </div>
  );
}

function SubEntry({ Name, RootDirection, handleSelectedTopic, dir }) {
  console.log(Name, RootDirection)
  return (
    <Link onClick={()=>handleSelectedTopic(RootDirection)} href={RootDirection + "/" + dir} className="text-white text-justify">{Name}</Link>
    // <p>{Name}</p>
  )
}
