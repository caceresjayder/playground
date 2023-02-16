import React, { useState } from "react";
import Header from "./containers/Header";
import Carrusel from "./containers/Carrusel";
import Image from "next/image";
import Link from "next/link";
import Styles from "./styles/Styles.module.scss";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";

const toModal = {
  "Lunch Menu": (
    <Image
      src="https://i.postimg.cc/2j75GzKb/Lunch.png"
      width={500}
      height={750}
      alt="menu-img"
    />
  ),
  "Night Menu": (
    <Image
      src="https://i.postimg.cc/tCR4mLKr/night.png"
      width={500}
      height={750}
      alt="menu-img"
    />
  ),
  "Kids Menu": (
    <Image
      src="https://i.postimg.cc/x85T1Rzy/kid.png"
      width={500}
      height={750}
      alt="menu-img"
    />
  ),
};

const modalState = {
  "Lunch Menu": false,
  "Night Menu": false,
  "Kids Menu": false,
};

const helpButtons = [
  "Who we are?",
  "Our Vision",
  "Our Mision",
  "From where comes the components of that burger?",
]

const menuButtons = ["Lunch Menu", "Kids Menu", "Night Menu"]

export default function Restaurant() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [state, setState] = useState(modalState);

  const togglePresent = (evt: string) => {

      setState({
        ...state,
        [evt]: true,
      });
      onOpen();
  }

  const closeReset = () => {
    setState(modalState);
    onClose()
  }

  return (
    <>
      <div className={Styles.restaurant}>
        <Header />
        <div className={Styles.container}>
          <div className={Styles.navCar}>
            <div className={Styles.nav}>
            {helpButtons.map(item => {
                return(
                    <button key={item} onClick={()=> togglePresent(item)}>
                        {item}
                    </button>
                )
            })}
            </div>
            <Carrusel/>
            <div className={Styles.nav}>
            {menuButtons.map(item => {
                return(
                    <button key={item} onClick={()=> togglePresent(item)}>
                        {item}
                    </button>
                )
            })}
            </div>
          </div>
        </div>
        <div className={Styles.foot}>
          <div className={Styles.leftside}>
            <p>
              <span>Opening Hours:</span>
              <br />
              <span>08:00 - 23:00</span>
            </p>
            <p>
              <span>Address:</span>
              <br />
              <span>Everlife Avenue, Springfield</span>
            </p>
            <p>
              <span>Telefone:</span>
              <br />
              <span>+01 123-4567890</span>
            </p>
          </div>
          <div className={Styles.center}>
            <p>
              <span>Enjoy the life eating!</span>
              <br />
            </p>
          </div>
          <div className={Styles.rigthside}>
            <p>Socials</p>
            <p>
              <Link href="/">Instagram</Link>
            </p>
            <p>
              <Link href="/">Facebook</Link>
            </p>
            <p>
              <Link href="/">TikTok</Link>
            </p>
          </div>
        </div>
      </div>
      <Modal isOpen={isOpen} onClose={closeReset}>
        <ModalOverlay />
        <ModalContent bg="transparent">
          <ModalCloseButton position="absolute" left={3} top={-1} bg="whiteAlpha.900" borderRadius="50%"/>
          <ModalBody>
            {state["Lunch Menu"] ? toModal["Lunch Menu"] : null}
            {state["Kids Menu"] ? toModal["Kids Menu"] : null}
            {state["Night Menu"] ? toModal["Night Menu"] : null}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
