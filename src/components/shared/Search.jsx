"use client";
import React, { useState } from "react";
import {
  IconButton,
  InputGroup,
  Input,
  InputRightElement,
  Button,
} from "@chakra-ui/react";
import { Search, X } from "lucide-react";

export default function SearchComp({handleSearchChange, searchedValue}) {
  const [isIcon, setIsIcon] = useState(true);

  return (
    <div className="w-full h-16 flex justify-center md:justify-end items-center">
      <InputGroup display={!isIcon ? "block" : "none"}>
        <InputRightElement>
          <button
            onClick={() => {
              setIsIcon(!isIcon)
              handleSearchChange("")
            }}
            bg="transparent"
          >
            <X />
          </button>
        </InputRightElement>
        <Input value={searchedValue} onChange={(evt)=>handleSearchChange(evt.target.value)} type="text" placeholder="Buscar..." borderColor="black" />
      </InputGroup>
      <IconButton
        icon={<Search />}
        onClick={() => setIsIcon(!isIcon)}
        bg="transparent"
        display={isIcon ? "block" : "none"}
      />
    </div>
  );
}
