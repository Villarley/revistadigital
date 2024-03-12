import React from 'react'
import Accordion from './Accordion'

export default function Entries({ Name, Clicked, Subtopics, handleSelectedTopic }) {
  return (
    <Accordion handleSelectedTopic={handleSelectedTopic} Clicked={Clicked} Name={Name}></Accordion>
  )
}
function subEntry({Name}){

}