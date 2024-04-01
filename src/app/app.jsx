"use client";
import React from "react";
import {
  useDisclosure,
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  IconButton,
} from "@chakra-ui/react";
import { Menu } from "lucide-react";
import { Navbar } from "@/components/shared/";

export default function App({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <div className="h-screen w-full flex flex-col md:flex-row">
      <div className="flex md:hidden bg-Bg justify-end">
        <IconButton
        bg={"transparent"}
          ref={btnRef}
          onClick={onOpen}
          className="md:hidden m-4"
          icon={<Menu />}
        />
      </div>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}      >
        <DrawerOverlay />
        <DrawerContent bg="#0d0d0d">
          <DrawerCloseButton />
          <Navbar />
        </DrawerContent>
      </Drawer>
      <div className="hidden md:block md:w-[23%] bg-DarkFont">
        <Navbar />
      </div>
      <div className="w-full md:w-[77%] bg-Bg p-8">{children}</div>
    </div>
  );
}
