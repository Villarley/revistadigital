import React from 'react';
import Accordion from './Accordion';
import Link from "next/link";

export default function Entry({ Name, Dir: RootDirection, Clicked, Subtopics, handleSelectedTopic }) {
  return (
    <div>
      <Accordion handleSelectedTopic={handleSelectedTopic} Clicked={Clicked} Name={Name} />
      {Clicked && Subtopics && Subtopics.length > 0 ? 
        Subtopics.map((Subtopic, idx) => (
          <SubEntry key={idx} Name={Subtopic.name} RootDirection={RootDirection} />
        )) 
        : null
      }
    </div>
  );
}

function SubEntry({ Name, RootDirection }) {
  console.log(Name, RootDirection)
  return (
    <Link href={RootDirection + "/" + Name} className="">{Name}</Link>
    // <p>{Name}</p>
  )
}
